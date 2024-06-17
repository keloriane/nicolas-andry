"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../../sanity/lib/client";
import { MENU_QUERY } from "../../sanity/lib/queries";
import { MenuType } from "@/types/MenuType";

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

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [menuItems, setMenuItems] = useState<MenuType[]>([
    { name: "", link: "" },
  ]);

  useEffect(() => {
    client
      .fetch(MENU_QUERY)
      .then((data) => {
        setMenuItems(data.menuItem);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <MenuContext.Provider value={{ menuItems }}>
      {children}
    </MenuContext.Provider>
  );
};
