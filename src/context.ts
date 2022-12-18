import { createContext, useContext } from "react";

const defaultValue = {
  favContact: undefined,
  setFavContact: () => { },
}

export const FavouriteContactContext = createContext<any>(defaultValue)