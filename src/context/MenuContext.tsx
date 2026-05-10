"use client";
import React, { createContext, useContext, useMemo } from "react";

import type { MenuType } from "@/types/MenuType";

interface MenuContextType {
  menuItems: MenuType[];
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

/**
 * Receives the menu items already fetched server-side and exposes them via
 * context so deeply-nested client components don't need prop drilling.
 */
export const MenuProvider: React.FC<{
  children: React.ReactNode;
  menuItems: MenuType[];
}> = ({ children, menuItems }) => {
  const value = useMemo(() => ({ menuItems }), [menuItems]);
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
