import { useEffect } from "react";
import { productsAtom, queryAtom } from "atoms";
import { useRecoilState, useRecoilValue } from "recoil";

export const useSearchResults = (query: string): [any] => {
  const [queryAtomData, setQueryAtomData] = useRecoilState(queryAtom);
  useEffect(() => {
    setQueryAtomData(query);
  }, [query]);

  const products = useRecoilValue(productsAtom);
  return products;
};
