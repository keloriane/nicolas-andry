"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AgendaCta = ({ locale, text }: { locale: string; text: string }) => {
  const pathname = usePathname();

  const path = pathname.split("/")[2];
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
            <Link className="cta" href={`/${locale}/agenda`}>
              <span>{text}</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AgendaCta;
