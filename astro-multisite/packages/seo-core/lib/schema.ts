export const org = ({ name, url, logo, phone }: any) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name, url, logo,
  contactPoint: phone ? [{ "@type":"ContactPoint", telephone: phone, contactType:"customer service" }] : undefined
});

export const website = ({ url, searchUrl }: any) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  url,
  potentialAction: searchUrl ? {
    "@type":"SearchAction",
    target: `${searchUrl}?q={search_term_string}`,
    "query-input":"required name=search_term_string"
  } : undefined
});

export const breadcrumbs = (items: {name:string,url:string}[]) => ({
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type":"ListItem", position: i+1, name: it.name, item: it.url
  }))
});
