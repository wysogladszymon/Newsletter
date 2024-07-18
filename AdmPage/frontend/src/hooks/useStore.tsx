import {FC, ReactNode, useContext, createContext } from "react";
import { EmailStore } from "../stores/EmailStore";

interface stores {
  emailStore?: EmailStore;
}

const StoreContext = createContext<stores | null >(null);

export const useStoree = () => {
  const stores = useContext(StoreContext);
  
  if (!stores) {
    throw new Error("useStore must be used within a storeProvider.");
  }
  return stores;
};

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const emailStore = new EmailStore();
  const stores = { emailStore };

  return (
    <StoreContext.Provider value={stores}>
      {children}
    </StoreContext.Provider>
  );
};