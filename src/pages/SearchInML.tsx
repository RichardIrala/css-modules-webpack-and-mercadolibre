import { useItemResult, useSearchResults } from "hooks/useSearchResults";
import React from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../components/ItemDetail";
import { SearchResultItem } from "../components/SearchResultItem";

export const SearchInML = () => {
  const { query, id } = useParams();
  const products = useSearchResults(query);
  const product: any = useItemResult(id);

  return products ? (
    //Productos buscados por query
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
  ) : //productDetail
  product?.title ? (
    <div>
      <ItemDetail
        thumbnail={product.thumbnail}
        title={product.title}
        price={product.price}
        pictures={product.pictures}
      />
    </div>
  ) : (
    //Nada
    <div></div>
  );
};
