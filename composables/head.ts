export const useCustomHead = (
  title = "Nexos Status",
  description = "Free & Open Source uptime monitoring tool and beautiful status pages with incidents reports. Powered by Nexos Creator!",
  image = "https://status.nexoscreation.com/og.png"
) => {
  useHead({
    title,
    htmlAttrs: { lang: "en" },
    viewport: "width=device-width, initial-scale=1",
    charset: "utf-8",
    link: [{ rel: "icon", href: "/favicon.png" }],
    meta: [
      {
        name: "description",
        content: description,
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@nexoscreator" },
      { name: "twitter:title", content: title },
      {
        name: "twitter:description",
        content: description,
      },
      { name: "twitter:image", content: image },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:url", content: "https://status.nexoscreation.com/" },
      { property: "og:image", content: image ?? image },
      {
        property: "og:description",
        content: description,
      },
    ],
  })
}