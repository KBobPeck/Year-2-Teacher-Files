import Layout from "./components/Layout/Layout";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import { redirectUser } from "./util/authUser";
import axios from "axios";
import baseUrl from "./util/baseUrl";
import { destroyCookie, parseCookies } from "nookies";

// if you would like to see the appContext then you can do this and test it out
// function MyApp(appContext) {
//   console.log(appContext);
function MyApp({ Component, pageProps }) {
  // Component is considered a children prop since it is inside of the component, that is why we need the children prop in layout
  return (
    <Layout user = {pageProps.user}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx);
  let pageProps = {};

  const protectedArray = ["/"];

  const protectedRoute = protectedArray.includes(ctx.pathname);

  //if we do not have a token and we are on a page that we shouldn't be, get redirected to login
  if (!token) {
    protectedRoute && redirectUser(ctx, "/login");
  } else {
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    try {
      //! you need to include the baseURL or the cookies wont save properly and will be deleted on refresh
      const res = await axios.get(`${baseUrl}/api/v1/auth`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { user, followStats } = res.data;

      if (user) !protectedRoute && redirectUser(ctx, "/");

      pageProps.user = user;
      pageProps.followStats = followStats;
    } catch (error) {
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/login");
    }
  }
  return { pageProps };
};

export default MyApp;
