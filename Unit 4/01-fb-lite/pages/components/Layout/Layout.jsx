import React from "react";
import HeadTags from "./HeadTags";
import Navbar from "./Navbar";
//! semantic UI is similar to bootstrap but easier to use in react and works on a import basis so you can easily overwrite certain parts
import { Container, Grid } from "semantic-ui-react";
import nprogress from "nprogress";
import Router from "next/router";

function Layout({ children }) {
  //! nprogress is an easy way to create loading bars on your page,
  //! if you are creating something more complicated you can .set() the value to change the bar, since pages load so fast you can start / done
  //! watch it happen when you reload the page, it is the small bad at the top
  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.done();
  Router.onRouteChangeError = () => nprogress.done();

  return (
    <>
      <HeadTags />
      <Navbar />
      <Container text>
        {/* <Grid
          // textAlign="center"
          style={{ minHeight: "calc(100vh - 55px)" }}
          verticalAlign="middle"
        >
          <Grid.Column> */}
        {children}
        {/* </Grid.Column>
        </Grid> */}
      </Container>
    </>
  );
}

export default Layout;
