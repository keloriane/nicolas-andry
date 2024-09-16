import Link from "next/link";
import React from "react";

export const CTA = ({ cta, href }: { cta: string; href: string }) => {
  return (
    <div className="cta_container">
      <Link className="cta" href={"mailto:contact@nicolas-andry.com"}>
        <span>Me contacter</span>
      </Link>
    </div>
  );
};
