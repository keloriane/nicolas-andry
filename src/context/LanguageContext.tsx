"use client";
import { createContext, Dispatch, ReactNode, useReducer } from "react";

type Language = "fr" | "en" | "nl";

interface LanguageState {
  lang: Language;
}

type Action = { type: "SET_LANG"; payload: Language };

const initialLanguageState: LanguageState = {
  lang: "fr",
};

const languageReducer = (state: LanguageState, action: Action) => {
  switch (action.type) {
    case "SET_LANG":
      return {
        ...state,
        lang: action.payload,
      };

    default:
      return state;
  }
};

interface LanguageContextProps {
  state: LanguageState;
  dispatch: Dispatch<Action>;
}

export const LanguageContext = createContext<LanguageContextProps>({
  state: initialLanguageState,
  dispatch: () => null,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [state, dispatch] = useReducer(languageReducer, initialLanguageState);

  return (
    <LanguageContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageContext.Provider>
  );
};
