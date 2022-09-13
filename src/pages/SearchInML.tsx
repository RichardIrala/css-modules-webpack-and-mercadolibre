import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../components/ItemDetail";
import { SearchResultItem } from "../components/SearchResultItem";

type LoginFormProps = {
  children?: string | number;
  onLogin: (formData) => void;
};

export const SearchInML = () => {
  const { query, id } = useParams();
  const [products, setProducts]: any = useState([]);
  const [product, setProduct]: any = useState({});

  useEffect(() => {
    setProducts([]);
    setProduct({});

    if (query) {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then((res) => res.json())
        .then(({ results }) => {
          setProducts(results);
        });
    }
    //ItemDetail
    if (id) {
      fetch(`https://api.mercadolibre.com/items/${id}`)
        .then((res) => res.json())
        .then((resjson) => {
          setProduct(resjson);
        });
    }
  }, [query, id]);

  return query && products ? (
    <div>
      {products.map((product, index) => (
        <SearchResultItem
          key={index}
          thumbnail={product.thumbnail}
          title={product.title}
          price={product.price}
          id={product.id}
        />
      ))}
    </div>
  ) : id && product.title ? (
    <div>
      <ItemDetail
        thumbnail={product.thumbnail}
        title={product.title}
        price={product.price}
        pictures={product.pictures}
      />
    </div>
  ) : (
    <div></div>
  );
};
