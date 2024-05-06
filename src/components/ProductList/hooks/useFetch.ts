import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  isAvailable: boolean;
};

export const useFetch = (url: string) => {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const resData = await response.json();

      setData(resData);
    };
    fetchData();
  }, [url]);

  return { data };
};
