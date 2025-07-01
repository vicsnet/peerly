"use client"
import { X } from "lucide-react";
// Import the images directly from figma assets
// import imgSymbolPng from "figma:asset/6b902610013a9c11fa62fab7fec58a4d2a35c9f2.png";
// import imgSymbolPng from "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070";
// https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070
// import imgLogoPng from "figma:asset/680449e5dac08f498764fbd6cda12356a66374b2.png";
// import imgLogoPng from "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070";
import { imgGroup } from "@/imports/svg-5mh2g";
// import svgPaths from "@/assets/svg-baymwh3e0j.svg";
import { NavBar } from "@/components/NavBar";
import { useState } from "react";
import { toast } from "sonner";
import { useActiveAccount, useSendTransaction, useWaitForReceipt } from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import useReadGetContract from "@/hooks/useReadGetContract";
import { useRouter } from "next/router";


// interface SignInProps {
//   onSignIn: () => void;
//   onSignUp: () => void;
//   onClose?: () => void;
//   isSellerFlow?: boolean;
// }



export function StartSelling() {
  const { mutate: sendTransaction,  isPending,isSuccess, isError, error, data:transaction_receipt } = useSendTransaction();
 

  const router = useRouter(); 

  const account = useActiveAccount();

  const [storeName, setStoreName] = useState<string>('');
const [storeDescription, setStoreDescription] = useState <string>('');
const [storeAddress, setStoreAddress] = useState<string>('');
const [storeLogo, setStoreLogo] = useState<File | null>(null);
const [storeBanner, setStoreBanner] = useState<File | null>(null);

const {PeerlyPondContract} = useReadGetContract()
const createStore = async () => {
  if(!account){
    toast.error("Login")
    return;
  }
  // setIsLoading(true);
  // if (!starknetAccount?.address) {
  //     toast.error('Please connect your wallet');
  //     setIsLoading(false);
  //     return;
  // }
  if (storeName === '') {
      toast.error('Name field required');
      // setIsLoading(false);
      return;
  }
  if (storeDescription === '') {
      toast.error('Description field required');
      // setIsLoading(false);
      return;
  }
  if (storeAddress === '') {
      toast.error('Address field required');
      // setIsLoading(false);
      return;
  }
  if (storeLogo === null) {
      toast.error('Logo field required');
      // setIsLoading(false);
      return;
  }
  if (storeBanner === null) {
      toast.error('Banner field required');
      // setIsLoading(false);
      return;
  }
  if (storeLogo === null) {
      toast.error('Logo field required');
      // setIsLoading(false);
      return;
  }
  if (storeBanner === null) {
      toast.error('Banner field required');
      // setIsLoading(false);
      return;
  }

  // upload store logo to ipfs

  // upload store logo to ipfs
  // const storeLogoIpfs = await uploadFileToIpfs(storeLogo);
  // const storeBannerIpfs = await uploadFileToIpfs(storeBanner);


  const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyYTBjNjg3MS04NGIxLTRlMDgtODg2ZC1iYmU5ODY5ZDQ4OWMiLCJlbWFpbCI6InZpbmNlLmFkZXNhbm1pMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZWQ2MGI4MzZiNGI3M2Q3OGU5NmYiLCJzY29wZWRLZXlTZWNyZXQiOiI2N2FjNWNmZTBhODIzYWEyYzA1ZDA5MDNhMDRiZWQ5YjM1MzllMDVkODkxZWMwNTRiYjM2OTBkMDUyMDdjN2NhIiwiZXhwIjoxNzcwMTEyODA3fQ.5zF5vDwlY_RHXz4lkckjovm1xbFxowIbqZvDf69QD0Y";

  try {
    const logoFormData = new FormData();
    const bannerFormData = new FormData()

    if (!storeLogo) {
        throw new Error("storeLogo is required");
    }
    if(!bannerFormData){
      throw new Error("storeLogo is required");
    }
    logoFormData.append("file", storeLogo);
    bannerFormData.append("file", storeBanner);

    const requestLogo = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {

            Authorization: `Bearer ${JWT}`,
        },
        body: logoFormData,
    });

    const responseLogo = await requestLogo.json();
    console.log('resp...', responseLogo.IpfsHash);

    const requestBanner = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
      method: "POST",
      headers: {

          Authorization: `Bearer ${JWT}`,
      },
      body: bannerFormData,
  });

  const responseBanner = await requestBanner.json();
  console.log('resp...', responseBanner.IpfsHash);
let store_uri;
  if (responseBanner.IpfsHash && responseLogo.IpfsHash ) {
    const formData = new FormData();
    // const dataContent = response.IpfsHash;
    const data = {
        name: storeName,
        description: storeDescription,
        location: storeAddress,
        logo: `https://emerald-big-beaver-890.mypinata.cloud/ipfs/${responseLogo.IpfsHash}`,
        image: `https://emerald-big-beaver-890.mypinata.cloud/ipfs/${responseBanner.IpfsHash}`,
    }
    const jsonData = JSON.stringify(data);
    const Myfile = new File([jsonData], `${storeName}FullData.json`, { type: "application/json" });
    formData.append("file", Myfile);

    const request = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {

            Authorization: `Bearer ${JWT}`,
        },
        body: formData,

    });
    const Dataresponse = await request.json();
    console.log('Dataresp...', Dataresponse.IpfsHash);
     store_uri = `https://emerald-big-beaver-890.mypinata.cloud/ipfs/${Dataresponse.IpfsHash}`

    
  } 
  // store_uri = `https://emerald-big-beaver-890.mypinata.cloud/ipfs/QmSYgiEDJwDq8yANE5ZPQjNr8wcnTQkciQrbJAc3w2V3kx`
  
  
if(store_uri === ""){
  toast.error("Error_occur");
  return;
}

  console.log('store_uri');
  return(store_uri);
}
  
  catch (error) {
    console.log(error)
  }


}

const createShop = async () =>{
  const store_uri = await createStore();
  if(store_uri){
    const transaction =  prepareContractCall({
      contract: PeerlyPondContract,
      method: "createShop",
      params: [store_uri], // type safe params
    });
    sendTransaction(transaction as any);

  }
}

if(isError)
{

  console.log('isError', error);
  toast.error(error.message)
}

if(isSuccess){
  console.log('trans',transaction_receipt);
  
  toast.success(transaction_receipt.transactionHash)
  
  router.push("/shop")
}




  return (
    <div className="bg-slate-50 min-h-screen w-full">
      <div className="flex flex-col gap-6 p-4 sm:p-6 md:p-[40px] max-w-[1440px] mx-auto">
        <NavBar />
        

        {/* Main content */}
        <div className="flex flex-col items-center justify-center mt-12">
          {/* Title section */}
          <div className="w-[540px] flex flex-col items-center text-center mb-6">
            <h1 className="text-[30px] font-semibold text-gray-900 tracking-[-0.225px] mb-1">
           Create your store
            </h1>
            <p className="text-[14px] text-gray-900">
              {/* {isSellerFlow  */}
                {/* ?  */}
                Welcome! create your store to start selling
                {/* : "Welcome back! Sign in using your email, or continue with Google or Apple"} */}
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl w-[540px] shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8">
              {/* Email and password inputs */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  {/* store field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium text-slate-900">Store Name</label>
                    <input 
                      type="text"
                      placeholder="Enter your store name"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-[16px]"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                    />
                  </div>

               
                  {/* store Description field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium text-slate-900">Store Description</label>
                    <input 
                      type="text"
                      placeholder="Descripe your store"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-[16px]"
                      value={storeDescription}
                      onChange={(e) => setStoreDescription(e.target.value)}
                    />
                  </div>

                    {/* store Description field */}
                    <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium text-slate-900">Store Address</label>
                    <input 
                      type="text"
                      placeholder="Enter your store location"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-[16px]"
                      value={storeAddress}
                      onChange={(e) => setStoreAddress(e.target.value)}
                    />
                  </div>

                  {/* store Logo field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium text-slate-900">Store Logo</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-[16px] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const file = e.target.files[0];
                          setStoreLogo(file);
                        } 
                      }}
                    />
                    {/* Optionally, show a preview if you have a logo state */}
                    {storeLogo && (
                      <img
                        src={URL.createObjectURL(storeLogo)}
                        alt="Logo Preview"
                        className="mt-2 h-16 w-16 object-cover rounded-full border"
                      />
                    )}
                  </div>

                          {/* store Logo field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium text-slate-900">Store Banner</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="w-full border border-slate-300 rounded-md px-3 py-2 text-[16px] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-100 file:text-slate-700"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          const file = e.target.files[0];
                          setStoreBanner(file);
                        } 
                      }}
                    />
                    {/* Optionally, show a preview if you have a logo state */}
                    {storeBanner && (
                      <img src={ URL.createObjectURL(storeBanner)} alt="Banner Preview" className="mt-2 h-16 w-16 object-cover rounded-full border" />
                    )}
                  </div>
                  
                
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-3">
                  <button 
                    className="bg-slate-900 text-white py-2 px-4 rounded-md text-[14px] font-medium"
                    onClick={createShop}
                  >
                    Create Store
                  </button>
                </div>
              </div>

           </div>
          </div>

        {isPending && (
          <div className="fixed inset-0 flex items-center justify-center bg-slate-900/40 z-50">
            <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 min-w-[260px] min-h-[220px]">
              <div className="flex items-center justify-center mb-4">
                <svg className="animate-spin h-10 w-10 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-80" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              </div>
              <span className="text-slate-900 text-base font-semibold">Creating your store...</span>
              <span className="text-slate-500 text-xs mt-2 text-center">Please wait while we set up your shop on Peerly.</span>
            </div>
          </div>
        )}

        </div>
      </div>
    </div>
  );
}