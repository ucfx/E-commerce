import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { ProductContextProvider } from "./Context/ProductContext.jsx";
import { AccountContextProvider } from "./Context/UserAccountContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <AccountContextProvider>
        <App />
        </AccountContextProvider>
    
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
