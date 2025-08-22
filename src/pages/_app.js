import { AuthProvider } from "@/context/auth-context";
import { CartProvider } from "@/context/cart-context";
import "@/styles/globals.css";
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
