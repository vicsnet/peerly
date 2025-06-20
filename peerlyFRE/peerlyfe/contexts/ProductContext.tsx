"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: string;
  description: string;
  inventory: number;
  vendorId: number;
  vendorName: string;
  rating?: number;
  reviewCount?: number;
  inStock: boolean;
  discount?: number;
  
  // Product specifications
  sku?: string;
  productLine?: string;
  model?: string;
  productionCountry?: string;
  dimensions?: string; // L x W x H cm
  weight?: string; // in kg
  color?: string;
  material?: string;
  
  // Variants (size, color options, etc.)
  variants?: {
    name: string;
    options: string[];
  }[];
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: number, updates: Partial<Product>) => void;
  deleteProduct: (id: number) => void;
  getProductById: (id: number) => Product | null;
  getProductsByVendor: (vendorId: number) => Product[];
  getProductsByCategory: (category: string) => Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Mock products with enhanced specifications
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Jordan 4 Retro White Cement (2025) FV5029-100 Size 12 Men's",
    price: 129.99,
    discountPrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Footwear",
    description: "High-performance running shoes with superior cushioning and support for serious runners. Features advanced Nike technology for optimal comfort and performance.",
    inventory: 45,
    vendorId: 1,
    vendorName: "SneakerWorld",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    discount: 23,
    
    // Specifications
    sku: "FA203FS4OKRBQNAFAMZ",
    productLine: "Liangzai2021",
    model: "Sneakers",
    productionCountry: "China",
    dimensions: "28*18*10",
    weight: "0.75",
    color: "White",
    material: "Synthetic Leather",
    
    variants: [
      {
        name: "Size",
        options: ["8", "9", "10", "11", "12", "13"]
      },
      {
        name: "Color",
        options: ["White", "Black", "Red"]
      }
    ]
  },
  {
    id: 2,
    name: "Premium Running Shoes",
    price: 129.99,
    discountPrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Footwear",
    description: "High-performance running shoes with superior cushioning and support for serious runners.",
    inventory: 45,
    vendorId: 1,
    vendorName: "SneakerWorld",
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    discount: 23,
    
    // Specifications
    sku: "PR001RUN2024",
    productLine: "Athletic Pro",
    model: "Runner Elite",
    productionCountry: "Vietnam",
    dimensions: "29*19*11",
    weight: "0.65",
    color: "Blue/White",
    material: "Mesh/Rubber",
    
    variants: [
      {
        name: "Size",
        options: ["7", "8", "9", "10", "11", "12"]
      }
    ]
  },
  {
    id: 3,
    name: "Organic Bananas (2 lbs)",
    price: 4.99,
    images: [
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Produce",
    description: "Fresh organic bananas, perfect for snacking or baking.",
    inventory: 50,
    vendorId: 2,
    vendorName: "Fresh Harvest",
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    
    // Specifications
    sku: "FH-BAN-ORG-2LB",
    productLine: "Organic Produce",
    model: "Fresh Bananas",
    productionCountry: "Ecuador",
    dimensions: "25*15*8",
    weight: "0.91",
    color: "Yellow",
    material: "Organic Fruit"
  },
  {
    id: 4,
    name: "Wireless Earbuds Pro",
    price: 199.99,
    discountPrice: 149.99,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Electronics",
    description: "Premium wireless earbuds with active noise cancellation and 24-hour battery life.",
    inventory: 25,
    vendorId: 3,
    vendorName: "TechHaven",
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
    discount: 25,
    
    // Specifications
    sku: "TH-WEB-PRO-24",
    productLine: "Audio Pro",
    model: "EarBuds Pro Max",
    productionCountry: "South Korea",
    dimensions: "6*4*3",
    weight: "0.05",
    color: "Space Gray",
    material: "Aluminum/Silicone",
    
    variants: [
      {
        name: "Color",
        options: ["Space Gray", "White", "Black"]
      }
    ]
  },
  {
    id: 5,
    name: "Modern Desk Lamp",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Home Decor",
    description: "Sleek LED desk lamp with adjustable brightness and USB charging port.",
    inventory: 15,
    vendorId: 4,
    vendorName: "Home & Beyond",
    rating: 4.7,
    reviewCount: 34,
    inStock: true,
    
    // Specifications
    sku: "HB-LAMP-MOD-LED",
    productLine: "Modern Living",
    model: "DeskLamp Pro",
    productionCountry: "China",
    dimensions: "45*20*15",
    weight: "1.2",
    color: "Matte Black",
    material: "Metal/Plastic"
  },
  {
    id: 6,
    name: "Handcrafted Ceramic Mug",
    price: 24.99,
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Kitchenware",
    description: "Beautiful handcrafted ceramic mug, perfect for your morning coffee.",
    inventory: 30,
    vendorId: 5,
    vendorName: "Artisan Crafts",
    rating: 4.9,
    reviewCount: 28,
    inStock: true,
    
    // Specifications
    sku: "AC-MUG-CER-HC",
    productLine: "Handcrafted Collection",
    model: "Classic Mug",
    productionCountry: "USA",
    dimensions: "12*9*9",
    weight: "0.3",
    color: "Earth Tone",
    material: "Ceramic"
  },
  {
    id: 7,
    name: "Vitamin D3 Supplement",
    price: 19.99,
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800"
    ],
    category: "Supplements",
    description: "High-potency Vitamin D3 supplements for bone health and immune support.",
    inventory: 100,
    vendorId: 6,
    vendorName: "Wellness Hub",
    rating: 4.5,
    reviewCount: 156,
    inStock: true,
    
    // Specifications
    sku: "WH-VIT-D3-5000",
    productLine: "Essential Vitamins",
    model: "D3-5000IU",
    productionCountry: "USA",
    dimensions: "8*8*12",
    weight: "0.15",
    color: "White",
    material: "Capsule/Bottle"
  }
];

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(mockProducts);

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Math.max(...products.map(p => p.id), 0) + 1,
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const updateProduct = (id: number, updates: Partial<Product>) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === id ? { ...product, ...updates } : product
      )
    );
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const getProductById = (id: number): Product | null => {
    return products.find(product => product.id === id) || null;
  };

  const getProductsByVendor = (vendorId: number): Product[] => {
    return products.filter(product => product.vendorId === vendorId);
  };

  const getProductsByCategory = (category: string): Product[] => {
    if (category === 'All') return products;
    return products.filter(product => product.category === category);
  };

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProductById,
      getProductsByVendor,
      getProductsByCategory,
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}