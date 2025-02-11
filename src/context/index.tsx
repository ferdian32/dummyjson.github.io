import { createContext, ReactNode,useState,useEffect } from "react";
// import { signInWithPopup } from "firebase/auth";
export const GlobalContext = createContext<any>(null);

export const GlobalState = ({ children }: { children: ReactNode }) => {
  const [data,setData] = useState<any>(null);
  useEffect(() => {
    try {
      
      const getData = async () => {
        const response = await fetch(import.meta.env.VITE_BASE_URL);
        if(!response.ok) {
          throw new Error(`Something went wrong while fetching data`)
        }
        const result  = await response.json();
        setData(result);
      }
      getData();
    } catch (error) {
      
    }
  },[])
  return (
    <GlobalContext.Provider value={{data}}>
      {children}
    </GlobalContext.Provider>
  );
};
