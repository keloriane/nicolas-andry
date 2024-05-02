import { createContext } from 'react';

const HomeContext = createContext({});

const HomeProvider = ({ children }: { children: any }) => {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
};
export default HomeProvider;
