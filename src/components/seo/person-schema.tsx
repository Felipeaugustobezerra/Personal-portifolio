export function PersonSchema() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Person",

    name: "Felipe Augusto",

    jobTitle: "Front-End Developer",

    url: "https://felipeaugusto.pt",

    sameAs: [
      "https://github.com/seuusuario",
      "https://linkedin.com/in/seuusuario",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}