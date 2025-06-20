import React from 'react'
import { getContract } from 'thirdweb';
import { client } from "@/lib/configThirdweb";
import { defineChain } from "thirdweb/chains";
import {peerlyEscrow, peerlyPond, peerlyTrust, peerlyIdentityNFT, peerlyReceipt} from "@/constants/contract"
import {peerlyPondABI} from "@/constants/ABI/peerlyPondABI"


export default function useReadGetContract() {
  const liskSepolia = defineChain(4202)
  // const abi = peerlyPondABI as const;
    const PeerlyEscrowContract  = getContract({
        client,
        address: peerlyEscrow,
        chain: liskSepolia,
      });

      const PeerlyPondContract  = getContract({
        client,
        address: peerlyPond,
        abi: peerlyPondABI,
        chain: liskSepolia,
      });

      const PeerlyTrustContract  = getContract({
        client,
        address: peerlyTrust,
        chain: liskSepolia,
      });
      const PeerlyIdentityNFTContract  = getContract({
        client,
        address: peerlyIdentityNFT,
        chain: liskSepolia,
      });

      const PeerlyReceiptContract  = getContract({
        client,
        address: peerlyReceipt,
        chain: liskSepolia,
      });

      return {PeerlyEscrowContract, PeerlyPondContract, PeerlyTrustContract, PeerlyIdentityNFTContract, PeerlyReceiptContract}
}

