import React, { useState } from "react";
import { X, Upload, Trash2 } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription 
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { Textarea } from "../../../components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { ImageWithFallback } from "../../../components/figma/ImageWithFallback";
import { toast } from "sonner";

export interface UploadedImage {
  id: string;
  url: string;
}

interface ReportIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (description: string, images: UploadedImage[]) => void;
}

export function ReportIssueModal({ isOpen, onClose, onSubmit }: ReportIssueModalProps) {
  const [issueReason, setIssueReason] = useState<string>("");
  const [issueDescription, setIssueDescription] = useState<string>("");
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Reset form when modal is closed
  React.useEffect(() => {
    if (!isOpen) {
      setIssueReason("");
      setIssueDescription("");
      setUploadedImages([]);
      setIsSubmitting(false);
    }
  }, [isOpen]);
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!issueReason) {
      toast.error("Please select an issue reason");
      return;
    }
    
    if (!issueDescription.trim()) {
      toast.error("Please provide a description of the issue");
      return;
    }
    
    setIsSubmitting(true);
    
    // Combine reason and description for submission
    const fullDescription = `${issueReason}: ${issueDescription}`;
    
    // Call the onSubmit prop with the issue details
    onSubmit(fullDescription, uploadedImages);
  };
  
  // Handle image upload - in a real app, this would interact with an upload service
  const handleImageUpload = () => {
    // Simulate image upload with random Unsplash images
    const randomImageId = Math.random().toString(36).substring(2, 10);
    const imageUrl = `https://source.unsplash.com/random/800x600/?issue&${Date.now()}`;
    
    const newImage: UploadedImage = {
      id: randomImageId,
      url: imageUrl
    };
    
    setUploadedImages(prev => [...prev, newImage]);
    toast.success("Image uploaded successfully");
  };
  
  // Handle image removal
  const handleRemoveImage = (id: string) => {
    setUploadedImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Report an Issue</DialogTitle>
          <DialogDescription>
            Report an issue with this transaction. Our support team will review your report and contact you if needed.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div>
            <Label>What is the issue?</Label>
            <RadioGroup value={issueReason} onValueChange={setIssueReason} className="mt-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Product damaged" id="option-damaged" />
                <Label htmlFor="option-damaged" className="cursor-pointer">Product damaged during shipping</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Product not received" id="option-not-received" />
                <Label htmlFor="option-not-received" className="cursor-pointer">Product not received</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Wrong item" id="option-wrong" />
                <Label htmlFor="option-wrong" className="cursor-pointer">Received wrong item</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Quality issue" id="option-quality" />
                <Label htmlFor="option-quality" className="cursor-pointer">Product quality issue</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Other" id="option-other" />
                <Label htmlFor="option-other" className="cursor-pointer">Other issue</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="issue-description">Description</Label>
            <Textarea 
              id="issue-description"
              placeholder="Please provide details about the issue..."
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              rows={4}
              className="mt-2"
            />
          </div>
          
          <div>
            <Label>Evidence (optional)</Label>
            <p className="text-sm text-slate-500 mb-2">
              Upload images of the issue to help us resolve it faster
            </p>
            
            <div className="border-2 border-dashed border-slate-200 rounded-md p-4">
              <div className="flex flex-wrap gap-2">
                {uploadedImages.map((image) => (
                  <div key={image.id} className="relative w-24 h-24">
                    <ImageWithFallback
                      src={image.url}
                      alt="Issue evidence"
                      className="w-full h-full object-cover rounded-md"
                    />
                    <button 
                      type="button"
                      onClick={() => handleRemoveImage(image.id)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                
                <button
                  type="button"
                  onClick={handleImageUpload}
                  className="w-24 h-24 border border-slate-200 rounded-md flex flex-col items-center justify-center gap-1 hover:bg-slate-50"
                >
                  <Upload className="w-5 h-5 text-slate-400" />
                  <span className="text-xs text-slate-500">Upload</span>
                </button>
              </div>
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}