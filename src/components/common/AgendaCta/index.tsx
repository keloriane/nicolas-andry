"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, localePath } from "@/lib/seo";

const AgendaCta = ({ locale, text }: { locale: string; text: string }) => {
  const pathname = usePathname();

  // Default locale lives at the root, other locales keep a /<locale>/ prefix.
  const segments = pathname.split("/").filter(Boolean);
  const path =
    segments.length > 0 && isLocale(segments[0]) ? segments[1] : segments[0];
  return (
    <>
      {path === "agenda" ? (
        ""
      ) : (
        <div
          className="main_cta"
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div className="cta_container">
            <Link className="cta" href={localePath(locale, "agenda")}>
              <span>{text}</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AgendaCta;
