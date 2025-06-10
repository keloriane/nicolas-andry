// Hotjar.tsx

"use client";
import Script from "next/script";
import { useEffect } from "react";
import Hotjar from "@hotjar/browser";

const HotJar = () => {
  useEffect(() => {
    const siteId = Number(process.env.HOTJAR_ID);
    const hotjarVersion = 6;

    Hotjar.init(siteId, hotjarVersion);
  });

  if (
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_HOTJAR_ID
  ) {
    return (
      <Script id="hotjar" strategy="afterInteractive">
        {`
           (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
    );
  }
  return null;
};

export { HotJar };
