"use client";

import {
  createContext,
  useContext,
  FC,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import Loading from "./Loading";

interface IsLoadingProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const IsLoadingContext = createContext<IsLoadingProps | undefined>(undefined);

export const IsLoadingProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const value = {
    isLoading,
    setIsLoading,
  };
  return (
    <IsLoadingContext.Provider value={value}>
      {children}
      {isLoading ? <Loading /> : null}
    </IsLoadingContext.Provider>
  );
};

export const useIsLoadingInfo = () => {
  const context = useContext(IsLoadingContext);
  if (!context) {
    throw new Error("isLoading must be used within a Provider");
  }
  return context;
};
