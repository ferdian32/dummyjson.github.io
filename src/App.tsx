import {useContext } from "react";
import { GlobalContext } from "./context";
function App() {
  
  const {data} = useContext(GlobalContext);
  console.log(data);
  return (
    <section>
      <h1 className="text-2xl text-sky-500 font-bold ">Data product</h1>
      <ul>
        {data?.products?.length > 0 ? (
          data.products.map((item: any) => (
            <li key={item.id}>{item.title}</li> 
          ))
        ) : (
          <h1>Data Tidak ditemukan</h1>
        )}
      </ul>
    </section>
  );
}

export default App;
