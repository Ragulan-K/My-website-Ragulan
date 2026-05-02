/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { PortfolioData } from "./types";
import { INITIAL_PORTFOLIO_DATA } from "./constants";

interface PortfolioContextType {
  data: PortfolioData;
  updateData: (newData: PortfolioData) => void;
  resetData: () => void;
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  activeSection: string;
  setActiveSection: (value: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "ragulan_portfolio_data";

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PortfolioData>(INITIAL_PORTFOLIO_DATA);
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData) as PortfolioData;
        
        // If the code has a newer version than what's in localStorage, prioritize the code
        if (INITIAL_PORTFOLIO_DATA.version && (!parsedData.version || INITIAL_PORTFOLIO_DATA.version > parsedData.version)) {
          console.log("Newer data version found in code, refreshing local storage");
          setData(INITIAL_PORTFOLIO_DATA);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_PORTFOLIO_DATA));
        } else {
          setData(parsedData);
        }
      } catch (e) {
        console.error("Failed to parse saved portfolio data", e);
      }
    }
  }, []);

  const updateData = (newData: PortfolioData) => {
    setData(newData);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
  };

  const resetData = () => {
    setData(INITIAL_PORTFOLIO_DATA);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <PortfolioContext.Provider value={{ data, updateData, resetData, isAdmin, setIsAdmin, activeSection, setActiveSection }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
