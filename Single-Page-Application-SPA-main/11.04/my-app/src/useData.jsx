import { useEffect, useState } from "react";

export function useData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
   if(url){
    
    const getData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      return setData(result);
    };
      getData();
   } 

   return () =>{
    setData(null)
   }

  }, [url]);

  return data;
}

//GET POST PUT PATCH DELETE
