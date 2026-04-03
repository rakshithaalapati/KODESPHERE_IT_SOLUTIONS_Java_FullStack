import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext.tsx";
import { WishlistProvider } from "./context/WishlistContext";
import "./styles/global.css";
import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <CartProvider>
      <WishlistProvider>   {/* 🔥 THIS WAS MISSING */}
      <ThemeProvider>
    <App />
  </ThemeProvider>
    </WishlistProvider>
    </CartProvider>
  </AuthProvider>
);