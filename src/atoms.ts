import { atom, selector } from "recoil";

export const textState = atom({
  key: "textState", //Key único del átomo
  default: "Richard", //Valor default base
});

export const queryAtom = atom({
  key: "queryParam",
  default: "",
});

export const productsAtom = selector({
  key: "productsML",
  get: async ({ get }) => {
    //Esto solicita el valor de un átomo :3 y se usa
    const query = get(queryAtom);
    if (query) {
      const res = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
      );
      const resjson = await res.json();
      console.log(resjson.results);
      return resjson.results;
    }
  },
});
