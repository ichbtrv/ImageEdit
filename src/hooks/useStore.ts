import { useContext } from 'react';
import { StoreContext } from '../stores/storeProvider';

const useStore = () => useContext(StoreContext);
export default useStore;
