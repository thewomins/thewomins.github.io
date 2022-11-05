import React, {useContext, useReducer} from "react";
import {en} from "src/Languages/en";
import {es} from "src/Languages/es";
import {TDictLanguage} from "src/Languages/type";
import {Languages} from "src/types/types";
import {dictLanguage} from "src/utils/dict";

type TLanguageState = {
  language: Languages;
  text: TDictLanguage;
};

const initialState: TLanguageState = {
  language: "Español",
  text: es,
};

type reducerActionLanguage = {
  type: "setLanguage";
  Language: Languages;
};

function getLanguageByValue(object: typeof dictLanguage, value: Languages) {
  const key = Object.keys(object).find((key) => object[key] === value);
  if (key === "es") {
    return es;
  }
  if (key === "en") {
    return en;
  }
  return en;
}

const reducer = (state: TLanguageState, action: reducerActionLanguage) => {
  switch (action.type) {
    case "setLanguage":
      return {
        ...state,
        language: action.Language,
        text: getLanguageByValue(dictLanguage, action.Language),
      };
    default:
      throw new Error();
  }
};

const LanguageContext = React.createContext<{
  Language: TLanguageState;
  dispatchLanguage: React.Dispatch<reducerActionLanguage>;
}>({
  Language: initialState,
  dispatchLanguage: () => initialState,
});

const LanguageContextProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [Language, dispatchLanguage] = useReducer(reducer, initialState);

  return (
    <LanguageContext.Provider value={{Language, dispatchLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const {Language = initialState, dispatchLanguage} =
    useContext(LanguageContext);

  return {Language, dispatchLanguage};
};

export {LanguageContextProvider, useLanguage};
