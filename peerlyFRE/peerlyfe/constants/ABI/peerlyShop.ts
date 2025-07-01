export const peerlyShopABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_peerlyEscrow",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_storeData",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "_peerlyTrust",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "productId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "pricePaid",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "ProductPurchased",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "productId",
        "type": "uint256"
      }
    ],
    "name": "ProductRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "productId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "productName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "productDescription",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string[]",
        "name": "productImage",
        "type": "string[]"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalStock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sold",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "specification",
        "type": "string"
      }
    ],
    "name": "productAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "productId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "productName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "productDescription",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string[]",
        "name": "productImage",
        "type": "string[]"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalStock",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "sold",
        "type": "uint256"
      }
    ],
    "name": "productUpdated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string[]",
        "name": "_productImage",
        "type": "string[]"
      },
      {
        "internalType": "string",
        "name": "_productDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_productName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_totalStock",
        "type": "uint256"
      },
      {
        "internalType": "string[]",
        "name": "_sizes",
        "type": "string[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_quantities",
        "type": "uint256[]"
      },
      {
        "internalType": "string",
        "name": "_specification",
        "type": "string"
      }
    ],
    "name": "addProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "productId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "orderId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "paymentAmount",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "tokenAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "shopAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "productBuyer",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "size",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "deliveryfee",
            "type": "uint256"
          }
        ],
        "internalType": "struct PeerlyShop.PurchaseData",
        "name": "data",
        "type": "tuple"
      }
    ],
    "name": "buyProduct",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "buyerReceipts",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "productId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "pricePaid",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_productId",
        "type": "uint256"
      }
    ],
    "name": "getProduct",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string[]",
            "name": "productImage",
            "type": "string[]"
          },
          {
            "internalType": "string",
            "name": "productDescription",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "productName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalStock",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sold",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "string",
                "name": "size",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "quantity",
                "type": "uint256"
              }
            ],
            "internalType": "struct PeerlyShop.SizeStock[]",
            "name": "sizes",
            "type": "tuple[]"
          },
          {
            "internalType": "string",
            "name": "specification",
            "type": "string"
          }
        ],
        "internalType": "struct PeerlyShop.Product",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getShopData",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "peerlyEscrow",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "peerlyTrust",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "productCount",
        "type": "uint256"
      }
    ],
    "name": "products",
    "outputs": [
      {
        "internalType": "string",
        "name": "productDescription",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "productName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalStock",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "sold",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "specification",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_productId",
        "type": "uint256"
      }
    ],
    "name": "removeProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "storeData",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_productId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_newPrice",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_newTotalStock",
        "type": "uint256"
      },
      {
        "internalType": "string[]",
        "name": "_sizes",
        "type": "string[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_quantities",
        "type": "uint256[]"
      }
    ],
    "name": "updateProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]as const