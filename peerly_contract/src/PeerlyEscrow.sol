// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./PeerlyReceiptNFT.sol";
import {IPeerlyShop} from "./interfaces/IPeerlyShop.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IPeerlyTrust} from "./interfaces/IPeerlyTrust.sol";
import "./interfaces/Types.sol";

contract PeerlyEscrow {
    //total orders
    uint256 public orderCount;

    //fee percentage
    uint256 public feePercentage;
    //treasury address

    //token address
    address public tokenAddress;

    //trust contract address
    address public peerlyTrust;

    // admin address
    address public admin;

    //receipt NFT
    address public receiptNFT;

    struct Order {
        uint256 orderId;
        uint256 productId;
        uint256 quantity;
        uint256 amount;
        uint256 adminIntervention;
        // bool fulfilled;
        // bool refunded;
        // bool buyerApproved;
        // bool orderDisputed;
        // bool adminInterventionStatus;
        address buyer;
        address shopAddress;
        address shopOwner;
        OrderStatus orderStatus;
    }
    struct OrderStatus {
        bool fulfilled;
        bool refunded;
        bool buyerApproved;
        bool orderDisputed;
        bool adminInterventionStatus;
    }


    struct Receipt {
        uint256 productId;
        uint256 quantity;
        uint256 pricePaid;
        uint256 timestamp;
    }

    mapping(uint256 => Order) public orders;
    mapping(address => Order[]) public buyerOrders;
    mapping(address => Order[]) public shopOrders;
    mapping(address => Receipt[]) public buyerReceipts;
    mapping(address => uint256) public successfulSales;
    mapping(address => uint256) public cancelledSales;
    Order[] public disputedOrders;

    event OrderCreated(
        uint256 indexed orderId,
        address indexed buyer,
        address indexed shopOwner,
        uint256 productId,
        uint256 quantity,
        uint256 amount
    );
    event OrderCancelled(uint256 indexed orderId);
    event OrderConfirmed(uint256 indexed orderId);

    constructor() {
        admin = msg.sender;
    }
    /// @notice this function calls the buyProduct function from the PeerlyShop contract and fills the Order struct
    /// @dev this function calls the peerlyshop contract to buy a product and fills the Order struct
    /// @param _shopAddress The address of the peerlyshop contract
    /// @param _productId The registerd id of the product in the peerlyshop contract
    /// @param _quantity The quantity of the product
    /// @param _paymentAmount The amount of the payment
    /// @param _tokenAddress The address of the token to use for the payment

    /// @param _productName The name of the product

    function createOrder(
        address _shopAddress,
        uint256 _productId,
        uint256 _quantity,
        uint256 _paymentAmount,
        address _tokenAddress,
        string memory _productName,
        string memory _size,
        uint256 _deliveryFee
    ) external payable {
        require(_shopAddress != address(0), "Invalid shop");
        address _shopOwner = IPeerlyShop(_shopAddress).getOwner();

        PurchaseData memory purchase = PurchaseData({
        productId: _productId,
        quantity: _quantity,
        orderId: orderCount,
        paymentAmount: _paymentAmount,
        deliveryfee: _deliveryFee,
        tokenAddress: _tokenAddress,
        shopAddress: _shopAddress,
        productBuyer: msg.sender,
        size: _size
    });
        IPeerlyShop(_shopAddress).buyProduct(purchase);

        //  send the token to peerly trust contract

        orders[orderCount] = Order({
            orderId: orderCount,
            buyer: msg.sender,
            shopAddress: _shopAddress,
            shopOwner: _shopOwner,
            productId: _productId,
            quantity: _quantity,
            amount: _paymentAmount,
            adminIntervention: 0,
            orderStatus: OrderStatus({
                fulfilled: false,
                refunded: false,
                buyerApproved: false,
                orderDisputed: false,
                adminInterventionStatus: false
            })
        });
        Order storage order = orders[orderCount];

        buyerOrders[msg.sender].push(order);
        shopOrders[_shopAddress].push(order);

        //create a receipt for the buyer
        // mint receipt
        PeerlyReceiptNFT(receiptNFT).mintReceipt(
            msg.sender,
            orderCount,
            _productName,
            _productId,
            _quantity,
            _paymentAmount
        );

        // emit OrderCreated(orderCount, msg.sender, _shopOwner);
        //emit event for the buyer
        //emit event for the shop owner
        orderCount++;
    }

    /// @notice this function confirms order to show that shop owner has received the Order and order packed and shipped
    /// @dev this function calls the peerlyshop contract to buy a product and fills the Order struct
    /// @param _orderId is the Id of the saved order which is the orderCount

    function confirmOrder(uint256 _orderId) external {
        Order storage order = orders[_orderId];
        require(msg.sender == order.shopOwner, "Only shop owner can confirm");
        require(!order.orderStatus.fulfilled, "Order already fulfilled");
        require(!order.orderStatus.refunded, "Order was refunded");

        order.orderStatus.fulfilled = true;
        successfulSales[order.shopAddress]++;
        // emit OrderConfirmed(_orderId);
    }

    /// @notice this function confirms order to show that shop owner has received the Order and order packed and shipped
    /// @dev this function calls the peerlyshop contract to buy a product and fills the Order struct
    /// @param _orderId is the Id of the saved order which is the orderCount

    function cancelOrder(uint256 _orderId) external {
        Order storage order = orders[_orderId];
        require(msg.sender == order.buyer, "Only buyer");
        require(
            !order.orderStatus.fulfilled && !order.orderStatus.refunded,
            "Not cancellable"
        );
        require(
            order.orderStatus.orderDisputed == false,
            "Order already disputed"
        );
        require(
            order.orderStatus.adminInterventionStatus == false,
            "Admin intervention already done"
        );

        order.orderStatus.refunded = true;
        cancelledSales[order.shopAddress]++;
        IPeerlyTrust(peerlyTrust).returnFund(
            tokenAddress,
            order.buyer,
            order.productId,
            _orderId
        );

        // revoke receipt
        PeerlyReceiptNFT(receiptNFT).burn(_orderId);
        // (bool sent, ) = order.buyer.call{value: order.amount}();
        // require(sent, "Refund failed");

        // emit OrderCancelled(_orderId);
    }

    //buyer approves the order to show that they have received the product
    //and satisfied with the product
    // fund released from the escrow account to the shop owner

    /// @notice buyer approves the order to show that they have received the product
    /// @dev this function changes the state  struct of Order.orderStatus.buyerApproved to true
    /// @param _orderId is the Id of the saved ordercount

    function buyerApproveOrder(uint256 _orderId) external {
        Order storage order = orders[_orderId];
        require(msg.sender == order.buyer, "Only buyer can approve");
        require(!order.orderStatus.buyerApproved, "Order already approved");
        require(order.orderStatus.fulfilled, "Order not fulfilled");
        require(!order.orderStatus.orderDisputed, "Order already disputed");
        order.orderStatus.buyerApproved = true;
        // transfer the funds to the shop owner
        IPeerlyTrust(peerlyTrust).withdrawFund(
            order.shopAddress,
            tokenAddress,
            order.buyer,
            order.productId,
            _orderId,
            feePercentage
        );
        // emit event
    }

    /// @notice buyer dispute the order to show that the buyer is not satisfied with the product and transfer case to admin
    /// @dev this function changes the state  struct of Order.orderStatus.orderDisputed to true
    /// @param _orderId is the Id of the saved ordercount
    function disputeOrder(uint256 _orderId) external {
        Order storage order = orders[_orderId];
        require(msg.sender == order.buyer, "Only buyer can dispute");
        require(order.orderStatus.refunded == false, "Order refunded");
        require(!order.orderStatus.orderDisputed, "Order already disputed");
        require(order.orderStatus.fulfilled, "Order not fulfilled");
        order.orderStatus.orderDisputed = true;
        disputedOrders.push(order);
        // emit event
    }


    /// @notice buyer dispute the order to show that the buyer is not satisfied with the product and transfer case to admin
    /// @dev this function changes the state  struct of  order.orderStatus.refunded to true or false 
    /// @param _orderId is the Id of the saved ordercount
    /// @param adminIntervention this can only be 1 or 2, if 1 compromise not made and refund takes place else compromise has been made

    function adminOrderInterfernce(
        uint256 _orderId,
        uint256 adminIntervention
    ) external {
        Order storage order = orders[_orderId];
        require(msg.sender == admin, "Only admin can intervene");
        require(order.orderStatus.fulfilled, "Order not fulfilled");
        require(order.orderStatus.orderDisputed, "Order not disputed");
        require(
            adminIntervention == 1 || adminIntervention == 2,
            "Invalid admin intervention"
        );

        if (adminIntervention == 1) {
            order.orderStatus.adminInterventionStatus = true;
            order.adminIntervention = 1;
            cancelledSales[order.shopAddress]++;
            order.orderStatus.refunded = true;
            // transfer the funds to the buyer
            IPeerlyTrust(peerlyTrust).returnFund(
                tokenAddress,
                order.buyer,
                order.productId,
                _orderId
            );
            // revoke receipt
            PeerlyReceiptNFT(receiptNFT).burn(_orderId);
            // emit event
        } else {
            order.adminIntervention = 2;
            order.orderStatus.orderDisputed = false;
            order.orderStatus.adminInterventionStatus = true;
            // transfer the funds to the shop owner
            IPeerlyTrust(peerlyTrust).withdrawFund(
                order.shopAddress,
                tokenAddress,
                order.buyer,
                order.productId,
                _orderId,
                feePercentage
            );
            // emit event
        }
    }

    /// @notice this funtion get the buyers order
    /// @dev this function calls the buyerOrders mapping
    /// @param _buyer The address of the product buyer
    /// @return Order[] this function returns array of all buyers order

    function getOrdersByBuyer(
        address _buyer
    ) external view returns (Order[] memory) {
        return buyerOrders[_buyer];
    }

    /// @notice this function returns single order
    /// @dev this function ruturns the srtuct of the created order
    /// @param _orderId is the Id of the saved order which is the orderCount
    /// @return Order is the saved struct mapped to orderId
    function getOrderDetails(
        uint256 _orderId
    ) external view returns (Order memory) {
        return orders[_orderId];
    }

    function getOrdersByShop(
        address _shopOwner
    ) external view returns (Order[] memory) {
        return shopOrders[_shopOwner];
    }

    function setFeePercent(uint256 _feePercent) external {
        require(msg.sender == admin, "Only Amin can set Fee");
        feePercentage = _feePercent;
    }

    function setPeerlyTrust(address _peerlyTrust) external {
        require(msg.sender == admin, "Only admin can set peerly trust");
        peerlyTrust = _peerlyTrust;
    }

    function setReceiptNFT(address _receiptNFT) external {
        require(msg.sender == admin, "Only admin can set receipt NFT");
        receiptNFT = _receiptNFT;
    }

    function setTokenAddress(address _tokenAddress) external {
        require(msg.sender == admin, "Only admin can set token address");
        tokenAddress = _tokenAddress;
    }

    function getAdmin() external view returns (address) {
        return admin;
    }
}
