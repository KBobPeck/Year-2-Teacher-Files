import { checkToken } from "./util/authUser";

const reset = () => {
  return <div>reset</div>;
};

export default reset;

reset.getInitialProps = async (ctx) => {
  //This will get the token back from the cookies when we pass it through the checkToken in the authUser Util
  const pageProps = await checkToken(ctx)
  return pageProps
}