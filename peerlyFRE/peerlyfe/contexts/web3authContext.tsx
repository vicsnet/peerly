// IMP START - Quick Start
import { AUTH_CONNECTION, MFA_LEVELS, WALLET_CONNECTORS, WEB3AUTH_NETWORK } from "@web3auth/modal";
import { type Web3AuthContextConfig } from "@web3auth/modal/react";
// IMP END - Quick Start

// IMP START - Dashboard Registration
const clientId = "BK1D6c-PVX2cvdwRZqGma8mnaTDftcFYpRFV8Cu2Qc8JDQj4HmQfFXnyZEbxTU_T97bd0DkwNrlXLNN85H6O0JQ"; // get from https://dashboard.web3auth.io

// RPC_URL = https://api.web3auth.io/infura-service/v1/0x1/BK1D6c-PVX2cvdwRZqGma8mnaTDftcFYpRFV8Cu2Qc8JDQj4HmQfFXnyZEbxTU_T97bd0DkwNrlXLNN85H6O0JQ
const web3AuthContextConfig: Web3AuthContextConfig = {
  web3AuthOptions: {
    clientId,
    web3AuthNetwork: WEB3AUTH_NETWORK.TESTNET,
    mfaLevel: MFA_LEVELS.NONE,
    modalConfig: {
      connectors: {
        [WALLET_CONNECTORS.AUTH]: {
          label: "auth",
          loginMethods: {
            google: {
              name: "google login",
              authConnectionId: "tlnt-google",
            },
          },
        },
      },
    },
  }
};
// IMP END - Config

export default web3AuthContextConfig;