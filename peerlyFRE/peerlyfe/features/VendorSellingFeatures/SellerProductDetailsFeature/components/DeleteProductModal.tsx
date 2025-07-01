// import React from "react";
// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../../../../components/ui/alert-dialog";
// import { toast } from "sonner";
// import { useProducts } from "../../../../contexts/ProductContext";

// interface DeleteProductModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   productId: number;
//   productName: string;
// }

// export function DeleteProductModal({ isOpen, onClose, productId, productName }: DeleteProductModalProps) {
//   const { deleteProduct } = useProducts();

//   const handleDelete = () => {
//     const success = deleteProduct(productId);
    
//     if (success) {
//       toast.success(`Product "${productName}" deleted successfully`);
//     } else {
//       toast.error("Failed to delete product");
//     }
    
//     onClose();
//   };

//   return (
//     <AlertDialog open={isOpen} onOpenChange={onClose}>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>Delete Product</AlertDialogTitle>
//           <AlertDialogDescription>
//             Are you sure you want to delete "{productName}"? This action cannot be undone.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <AlertDialogAction onClick={handleDelete} className="bg-red-500 hover:bg-red-600">
//             Delete
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }