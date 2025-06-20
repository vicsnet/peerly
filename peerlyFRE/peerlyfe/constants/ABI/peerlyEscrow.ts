export const peerlyEscrow = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      }
    ],
    "name": "OrderCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      }
    ],
    "name": "OrderConfirmed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "shopOwner",
        "type": "address"
      },
      {
        "indexed": false,
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
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "OrderCreated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "admin",
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
        "name": "_orderId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "adminIntervention",
        "type": "uint256"
      }
    ],
    "name": "adminOrderInterfernce",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_orderId",
        "type": "uint256"
      }
    ],
    "name": "buyerApproveOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "name": "buyerOrders",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      },
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
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "adminIntervention",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "shopAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "shopOwner",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bool",
            "name": "fulfilled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "refunded",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "buyerApproved",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "orderDisputed",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "adminInterventionStatus",
            "type": "bool"
          }
        ],
        "internalType": "struct PeerlyEscrow.OrderStatus",
        "name": "orderStatus",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_orderId",
        "type": "uint256"
      }
    ],
    "name": "cancelOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "cancelledSales",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_orderId",
        "type": "uint256"
      }
    ],
    "name": "confirmOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_shopAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_productId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_paymentAmount",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_productName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_size",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_deliveryFee",
        "type": "uint256"
      }
    ],
    "name": "createOrder",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_orderId",
        "type": "uint256"
      }
    ],
    "name": "disputeOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "disputedOrders",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      },
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
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "adminIntervention",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "shopAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "shopOwner",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bool",
            "name": "fulfilled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "refunded",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "buyerApproved",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "orderDisputed",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "adminInterventionStatus",
            "type": "bool"
          }
        ],
        "internalType": "struct PeerlyEscrow.OrderStatus",
        "name": "orderStatus",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feePercentage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAdmin",
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
        "name": "_orderId",
        "type": "uint256"
      }
    ],
    "name": "getOrderDetails",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "orderId",
            "type": "uint256"
          },
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
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "adminIntervention",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "shopAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "shopOwner",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "fulfilled",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "refunded",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "buyerApproved",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "orderDisputed",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "adminInterventionStatus",
                "type": "bool"
              }
            ],
            "internalType": "struct PeerlyEscrow.OrderStatus",
            "name": "orderStatus",
            "type": "tuple"
          }
        ],
        "internalType": "struct PeerlyEscrow.Order",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_buyer",
        "type": "address"
      }
    ],
    "name": "getOrdersByBuyer",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "orderId",
            "type": "uint256"
          },
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
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "adminIntervention",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "shopAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "shopOwner",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "fulfilled",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "refunded",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "buyerApproved",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "orderDisputed",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "adminInterventionStatus",
                "type": "bool"
              }
            ],
            "internalType": "struct PeerlyEscrow.OrderStatus",
            "name": "orderStatus",
            "type": "tuple"
          }
        ],
        "internalType": "struct PeerlyEscrow.Order[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_shopOwner",
        "type": "address"
      }
    ],
    "name": "getOrdersByShop",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "orderId",
            "type": "uint256"
          },
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
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "adminIntervention",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "buyer",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "shopAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "shopOwner",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "fulfilled",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "refunded",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "buyerApproved",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "orderDisputed",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "adminInterventionStatus",
                "type": "bool"
              }
            ],
            "internalType": "struct PeerlyEscrow.OrderStatus",
            "name": "orderStatus",
            "type": "tuple"
          }
        ],
        "internalType": "struct PeerlyEscrow.Order[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "orderCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "orders",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      },
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
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "adminIntervention",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "shopAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "shopOwner",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bool",
            "name": "fulfilled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "refunded",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "buyerApproved",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "orderDisputed",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "adminInterventionStatus",
            "type": "bool"
          }
        ],
        "internalType": "struct PeerlyEscrow.OrderStatus",
        "name": "orderStatus",
        "type": "tuple"
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
    "inputs": [],
    "name": "receiptNFT",
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
        "name": "_feePercent",
        "type": "uint256"
      }
    ],
    "name": "setFeePercent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_peerlyTrust",
        "type": "address"
      }
    ],
    "name": "setPeerlyTrust",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_receiptNFT",
        "type": "address"
      }
    ],
    "name": "setReceiptNFT",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenAddress",
        "type": "address"
      }
    ],
    "name": "setTokenAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
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
    "name": "shopOrders",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "orderId",
        "type": "uint256"
      },
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
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "adminIntervention",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "shopAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "shopOwner",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bool",
            "name": "fulfilled",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "refunded",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "buyerApproved",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "orderDisputed",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "adminInterventionStatus",
            "type": "bool"
          }
        ],
        "internalType": "struct PeerlyEscrow.OrderStatus",
        "name": "orderStatus",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "successfulSales",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokenAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const