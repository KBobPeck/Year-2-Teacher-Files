import Layout from "./components/Layout/Layout";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

// if you would like to see the appContext then you can do this and test it out
// function MyApp(appContext) {
//   console.log(appContext);
function MyApp({Component, pageProps}) {
  // Component is considered a children prop since it is inside of the component, that is why we need the children prop in layout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

