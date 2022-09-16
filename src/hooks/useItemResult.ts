import { useEffect } from "react";
import { idState, itemDetailState } from "atoms";
import { useRecoilState, useRecoilValue } from "recoil";

export const useItemResult = (id: string): object => {
  const [idStateData, setIdStateData] = useRecoilState(idState);
  useEffect(() => {
    setIdStateData(id);
  }, [id]);

  const productDetail = useRecoilValue(itemDetailState);
  return productDetail;
};
