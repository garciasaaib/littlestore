import { createContext, useState, FC, ReactNode } from "react";
import { Product } from "../api/Product";
interface ShoppingCartType {
  isAsideOpen: boolean;
  openAside: () => void;
  closeAside: () => void;
  productDetails: Product | null;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  setProductDetails: React.Dispatch<React.SetStateAction<Product | null>>
}
export const ShoppingCartContext = createContext<ShoppingCartType | null>(null);

export const ShoppingCartProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  // close/open aside
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
  const openAside = () => setIsAsideOpen(true);
  const closeAside = () => setIsAsideOpen(false);

  // product details
  const [productDetails, setProductDetails] = useState<Product|null>(null);
  // shopping card products
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const addProductToCart = (product: Product) => {
    setCartProducts([...cartProducts, product]);
  };
  const removeProductFromCart = (product: Product) => {
    setCartProducts(cartProducts.filter((p) => p.id !== product.id));
  };

  const state: ShoppingCartType = {
    isAsideOpen,
    openAside,
    closeAside,
    productDetails,
    addProductToCart,
    removeProductFromCart,
    setProductDetails,
  };
  return (
    <ShoppingCartContext.Provider value={state}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
