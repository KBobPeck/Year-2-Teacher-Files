import Head from "next/head";

// ! this just replaces the head tag of any page its used. Since this is added to the _app.js page (the complier for any page) it will be added everywhere
//!!! IMPORTANT !!! once compiled this page will appear in the public folder so make sure to reference all files with just a /
const HeadTags = () => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.png" sizes="16*16" type="image/png" />

      <link rel="stylesheet" type="text/css" href="/listMessages.css" />

      <link rel="stylesheet" type="text/css" href="/styles.css" />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />

      <title>React Social Media</title>
    </Head>
  </>
);
export default HeadTags;
