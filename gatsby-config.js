const path = require("path");
const siteURL = "https://getfootwears.com";
const disqus = "getfootwears";

module.exports = {
  siteMetadata: {
	  title:'Best Shoes Reviews and Buying Guides | Get Foot Wears',
description:'Need Advice to pick best shoes ?  Reviews, buying guides and price comparisons between all best running shoes',
    siteURL: siteURL,
    siteUrl: siteURL,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `getfootwears`,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
          {
            resolve: `gatsby-remark-images-native-lazy-load`,
            options: {
              loading: "lazy", // "lazy" | "eager" | "auto"
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        mediaTypes: [`text/markdown`, `text/x-markdown`],
      },
    },
    {
      resolve: "gatsby-plugin-mdx-frontmatter",
    },
    "gatsby-plugin-slug",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        customizeWebpackConfig: (config) => ((config.node.fs = "empty"), (config.node.child_process = "empty")),
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteURL,
      },
    },
    `gatsby-plugin-remove-fingerprints`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/404.html`,'/contact-us/thanks/','/contact-us/','/404/','/dev-404-page/','/terms-of-service/','/privacy-policy/','/affiliate-disclosure/','/about-us/','/author/','/news/','/basketball-shoes/','/flat-feet-shoes/','/plantar-fasciitis-shoes/','/running-shoes/','/author/rebecca-bandy/'],
      },
    },
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        content: [path.join(process.cwd(), "src/**/!(*.d).{js,mdx,md}")],
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["css/"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    // make sure to keep it last in the array
  ],
};
