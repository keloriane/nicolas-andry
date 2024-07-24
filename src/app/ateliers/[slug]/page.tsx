import React from "react";

export default function AtelierPage(slug: { params: { slug: string } }) {
  console.log(slug.params.slug);
  return <div>AtelierPage {slug.params.slug}</div>;
}
