"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../../sanity/lib/client";
import { getMenuData, MENU_QUERY } from "../../sanity/lib/queries";
import { MenuType } from "@/types/MenuType";
import { loadQuery } from "@sanity/react-loader";

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

export const MenuProvider: React.FC<{
  children: React.ReactNode;
  locale: string;
}> = ({ children, locale }) => {
  const [menuItems, setMenuItems] = useState<MenuType[]>([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      if (!client || !MENU_QUERY) {
        console.error("Sanity client or MENU_QUERY is not defined");
        return;
      }

      try {
        const res: any = await client.fetch(MENU_QUERY, { lang: locale });
        if (res) {
          setMenuItems(res.menuItem);
        }
      } catch (error) {
        console.error("Error loading menu data:", error);
      }
    };

    fetchMenuData();
  }, [locale]);

  return (
    <MenuContext.Provider value={{ menuItems }}>
      {children}
    </MenuContext.Provider>
  );
};
