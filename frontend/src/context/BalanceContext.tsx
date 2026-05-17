import { createContext, useContext, useState } from "react";

type BalanceContextType = {
    balance: string;
    setBalance: (balance: string) => void;
};

const BalanceContext = createContext<BalanceContextType>({
    balance: '0',
    setBalance: () => {},
});

export const useBalance = () => useContext(BalanceContext);

export function BalanceProvider({ children }: { children: React.ReactNode }) {
    const [balance, setBalance] = useState('0');

    return (
        <BalanceContext.Provider value={{ balance, setBalance }}>
            {children}
        </BalanceContext.Provider>
    );
}
