import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number;
  title: string;
  value: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createNewTransaction: (transaction: TransactionInput) => Promise<void>;
}


export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider ({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createNewTransaction(transaction: TransactionInput) {
    const response = await api.post('transactions', {
      ...transaction,
      createdAt: new Date()
    });
    
    const {transaction: newTransaction} = response.data;

    setTransactions([...transactions, newTransaction]);
  }

  return (
    <TransactionsContext.Provider value={ {transactions, createNewTransaction} }>
      {children}
    </TransactionsContext.Provider>
  );
}