// import * as React from 'react';

import { createContext, useState } from "react";

export type HistoryContextType = {
    history: any;
    setHistory: any;
  };

export const HistoryContext = createContext<HistoryContextType | null>(null);

const HistoryProvider: React.FC< {children: React.ReactNode}> = ({ children }) => {
    const [history, setHistory] = useState([Array(9).fill(null)]);

    return (
        <HistoryContext.Provider value={{ history, setHistory }}>
          {children}
        </HistoryContext.Provider>
      );
    };

export default HistoryProvider;