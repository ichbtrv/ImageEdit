import { createContext } from 'react';
import { RootStore } from './rootStore';

export const StoreContext = createContext({} as RootStore);
export const StoreProvider = StoreContext.Provider;
