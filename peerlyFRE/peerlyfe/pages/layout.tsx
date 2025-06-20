// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import '../styles/globals.css'
// import { ProductProvider } from '../contexts/ProductContext'
// import { CartProvider } from '../contexts/CartContext'
// import { DialogProvider } from '../contexts/DialogContext'
// import { Toaster } from '../components/ui/sonner'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Vendor Marketplace',
//   description: 'A comprehensive vendor marketplace application',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ProductProvider>
//           <CartProvider>
//             <DialogProvider>
//               {children}
//               <Toaster position="top-right" />
//             </DialogProvider>
//           </CartProvider>
//         </ProductProvider>
//       </body>
//     </html>
//   )
// }