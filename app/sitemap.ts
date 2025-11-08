import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://farukkandemir.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add more URLs as you add pages
    // {
    //   url: 'https://farukkandemir.dev/projects',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ];
}
