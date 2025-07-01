import React, { useEffect } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "../../../../components/ui/alert-dialog";
import { toast } from "sonner";
import { useDashboardPageState, useShop } from "@/contexts/zustand/ZustandState";
import { useSendTransaction } from "thirdweb/react";
import { defineChain, getContract, prepareContractCall } from "thirdweb";
import { client } from "@/lib/configThirdweb";
import { peerlyShopABI } from "@/constants/ABI/peerlyShop";
import { useRouter } from "next/router";


interface DeleteProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: number;
  productName: string;
}

export function DeleteProductModalNew({ isOpen, onClose, productId,productName  }: DeleteProductModalProps) {
    const {shopAddress} = useShop();
    const { mutate: sendTransaction,  isPending,isSuccess, isError, error, data:transaction_receipt } = useSendTransaction();
    const router = useRouter();
    const {setCurrentPage} = useDashboardPageState()

    const liskSepolia = defineChain(4202)




    const PeerlyShopContract = getContract({
      client,
      address: shopAddress ?? '',
      abi: peerlyShopABI,
      chain: liskSepolia,
    });
  

  const handleDelete = () => {
    
    const transaction = prepareContractCall({
      contract: PeerlyShopContract,
      method: 'removeProduct',
      params: [BigInt(productId)],
    });
    sendTransaction(transaction as any);
  }


  useEffect(()=>{
    if(isError){
        toast.error(`Error Occur ${error}`)
    }
    if(isSuccess){
        toast.success(`${productName} Deleted: ${transaction_receipt.transactionHash}`)
        onClose();
        router.push('/shop')
        setCurrentPage('products')
      }
  
  },[isError, isSuccess])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/10 ${isOpen ? '' : 'hidden'}`}
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Delete Product</h2>
        </div>
        <div className="mb-6 text-gray-700">
        {  `Are you sure you want to delete ${productName} This action cannot be undone.`}
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
            onClick={handleDelete}
            type="button"
          >
            {isPending ? 'Deleting' : 'Delete'}
  
          </button>
        </div>
      </div>
    </div>
  );
}