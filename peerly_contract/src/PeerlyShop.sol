// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
import {IPeerlyTrust} from "./interfaces/IPeerlyTrust.sol";

contract PeerlyShop {
    uint256 productCount;
    address public peerlyEscrow;
    address public owner;
    address public peerlyTrust;
    // All this data can be stored on IPFS
    // struct Store {
    //     string vendorName;
    //     string storeDescription;
    //     string storeImage;
    //     string storeBanner;
    //     string storeAddress;
    //     string storeEmail;
    //     string storePhone;

    // }
    //URI of the stored data from PeerlyIdentityNFT
    string public storeData;

    // All this data can be stored on IPFS including the price

    struct Product {
        string[] productImage;
        string productDescription;
        string productName;
        uint256 price;
        uint256 totalStock;
        uint256 sold;
        SizeStock[] sizes;
        string specification;
    }
    struct SizeStock {
        string size; // e.g., "M", "42", "L"
        uint256 quantity; // stock available for this size
    }

    struct PurchaseData {
        uint256 productId;
        uint256 quantity;
        uint256 orderId;
        uint256 paymentAmount;
        address tokenAddress;
        address shopAddress;
        address productBuyer;
        string size;
        uint256 deliveryfee;
    }

    struct Receipt {
        uint256 productId;
        uint256 quantity;
        uint256 pricePaid;
        uint256 timestamp;
    }

    mapping(uint256 productCount => Product) public products;
    mapping(address => Receipt[]) public buyerReceipts;

    constructor(
        address _peerlyEscrow,
        address _owner,
        string memory _storeData,
        address _peerlyTrust
    ) {
        peerlyEscrow = _peerlyEscrow;
        owner = _owner;
        storeData = _storeData;
        peerlyTrust = _peerlyTrust;
    }

    // Events
    event productAdded(
        uint256 indexed productId,
        string productName,
        string productDescription,
        string[] productImage,
        uint256 price,
        uint256 totalStock,
        uint256 sold
    );

    event productUpdated(
        uint256 indexed productId,
        string productName,
        string productDescription,
        string[] productImage,
        uint256 price,
        uint256 totalStock,
        uint256 sold
    );
    event ProductRemoved(uint256 indexed productId);

    event ProductPurchased(
        address indexed buyer,
        uint256 indexed productId,
        uint256 quantity,
        uint256 pricePaid,
        uint256 timestamp
    );
    // event StoreCreated(
    //     address indexed vendor,
    //     string vendorName,
    //     string storeDescription,
    //     string storeImage,
    //     string storeBanner
    // );

    // Error
    // error StoreAlreadyExists();

    // this contract is for a particular store owner

    // the store owner can create their own store

    // the store owner can add products to their store

    // the store owner can remove products from their store

    // the store owner can update the price of a product

    // function createStore(string memory _storeData) public {
    //     storeData = _storeData;
    // }

    /// @notice create  new product struct
    /// @dev new Product struct is created and mapped to productCount
    /// @param _productImage The image of the product in svg format
    /// @param _productDescription The description of the product
    /// @param _productName The name of the product
    /// @param _price The price of the product
    /// @param _totalStock The total stock of the product

    function addProduct(
        string[] memory _productImage,
        string memory _productDescription,
        string memory _productName,
        uint256 _price,
        uint256 _totalStock,
        string[] memory _sizes,
        uint256[] memory _quantities,
        string memory _specification
    ) public {
        require(msg.sender == owner, "Not owner");
        require(
            _sizes.length == _quantities.length,
            "Mismatch in sizes and quantities"
        );

        uint256 productId = productCount + 1;
        // add a new product to the store
        Product storage product = products[productId];

        // products[productId] = Product({
        product.productImage = _productImage;

        product.productDescription = _productDescription;
        product.productName = _productName;
        product.price = _price;
        product.totalStock = _totalStock;
        product.sold = 0;
        product.specification = _specification;
        // });

        for (uint i = 0; i < _sizes.length; i++) {
            product.sizes.push(
                SizeStock({size: _sizes[i], quantity: _quantities[i]})
            );
        }
        emit productAdded(
            productId,
            _productName,
            _productDescription,
            _productImage,
            _price,
            _totalStock,
            0
        );
    }

    /// @notice this function return the added product struct
    /// @param  _productId The id of the product which is the productCount
    /// @return Product struct of the assigned id is returned

    function getProduct(
        uint256 _productId
    ) public view returns (Product memory) {
        return products[_productId];
    }

    /// @notice update the price of a product
    /// @dev update the price field of the Product struct
    /// @param _productId The id of the product whict is the productCount
    /// @param _newPrice The new price of the product

    function updateProductPrice(uint256 _productId, uint256 _newPrice) public {
        require(
            msg.sender == owner,
            "Only the owner can update the price of a product"
        );
        require(products[_productId].price != 0, "No product");
        // update the price of a product
        products[_productId].price = _newPrice;

        string memory productName = products[_productId].productName;

        string memory productDescription = products[_productId]
            .productDescription;

        string[] memory productImage = products[_productId].productImage;

        uint256 totalStock = products[_productId].totalStock;
        uint256 sold = products[_productId].sold;
        emit productUpdated(
            _productId,
            productName,
            productDescription,
            productImage,
            _newPrice,
            totalStock,
            sold
        );
    }

    /// @notice remove the product data
    /// @dev delete the product Struct from the mapping
    /// @param _productId The id of the product whict is the productCount

    function removeProduct(uint256 _productId) public {
        require(msg.sender == owner, "Only the owner can remove a product");
        // remove a product from the store
        delete products[_productId];
        emit ProductRemoved(_productId);
    }

    /// @notice buy a product only from the PeerlyEscrow contract can call this function
    /// @dev buy a product from the store which reduces the Product struct totalStock
    // / @param _productId The id of the product whict is the productCount
    // / @param _quantity The quantity of the product to buy
    // / @param _orderId The id of the order generated from the PeerlyEscrow contract
    // / @param _paymentAmount The amount of the payment
    // / @param _tokenAddress The address of the token to use for the payment
    // / @param _shopAddress The address(this) of the Peerlyshop
    // / @param _productBuyer The address of the buyer

    function buyProduct(PurchaseData calldata data) external payable {
        require(msg.sender == peerlyEscrow, "Caller must be escrow contract");

        Product storage product = products[data.productId];

        require(data.quantity > 0, "Quantity must be at least 1");
        require(
            product.totalStock - product.sold >= data.quantity,
            "Stock not available"
        );

        uint256 totalPrice = product.price * data.quantity;
        uint256 totalCost = data.paymentAmount + data.deliveryfee;

        bool found = false;

        for (uint i = 0; i < product.sizes.length; i++) {
            if (
                keccak256(abi.encodePacked(product.sizes[i].size)) ==
                keccak256(abi.encodePacked(data.size))
            ) {
                require(
                    product.sizes[i].quantity >= data.quantity,
                    "Not enough stock for selected size"
                );

                require(
                    data.paymentAmount >= totalCost,
                    "Insufficient payment"
                );

                product.sizes[i].quantity -= data.quantity;
                found = true;
                break;
            }
        }

        require(found, "Size not found");

        product.sold += data.quantity;

        IPeerlyTrust(peerlyTrust).deposit(
            data.tokenAddress,
            data.paymentAmount,
            data.shopAddress,
            data.productId,
            data.orderId,
            data.productBuyer
        );

        buyerReceipts[msg.sender].push(
            Receipt({
                productId: data.productId,
                quantity: data.quantity,
                pricePaid: totalPrice,
                timestamp: block.timestamp
            })
        );

        emit ProductPurchased(
            data.productBuyer,
            data.productId,
            data.quantity,
            totalPrice,
            block.timestamp
        );

        emit productUpdated(
            data.productId,
            product.productName,
            product.productDescription,
            product.productImage,
            product.price,
            product.totalStock,
            product.sold
        );
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getShopData() public view returns (string memory) {
        return storeData;
    }
}
