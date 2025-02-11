import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_BASE_URL);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []); 

  console.log(data?.products); 

  return (
    <section>
      <h1>Data product</h1>
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
