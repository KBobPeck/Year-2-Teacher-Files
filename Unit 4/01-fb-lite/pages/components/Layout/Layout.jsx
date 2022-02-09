import React, { createRef } from "react";
import HeadTags from "./HeadTags";
import Navbar from "./Navbar";
//! semantic UI is similar to bootstrap but easier to use in react and works on a import basis so you can easily overwrite certain parts
import {
  Container,
  Grid,
  Ref,
  Segment,
  Sticky,
  Visibility,
} from "semantic-ui-react";
import nprogress from "nprogress";
import Router from "next/router";
import SideMenu from "./SideMenu";
import Search from "./Search";

function Layout({ children, user }) {
  //! nprogress is an easy way to create loading bars on your page,
  //! if you are creating something more complicated you can .set() the value to change the bar, since pages load so fast you can start / done
  //! watch it happen when you reload the page, it is the small bad at the top
  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.done();
  Router.onRouteChangeError = () => nprogress.done();

  //this is a context ref. we place context about the site in here and then we use it to parse below. this is used to make props easier to distribute
  //also createRef is different from useRef. useRef is static and once created will be the same for the rest of the site until refresh
  //createRef will update the reference every re-render and not just on refresh since we want this site to be live we need a ref that will update
  const contextRef = createRef();

  return (
    <>
      <HeadTags />
      {user ? (
        <>
          <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
            <Ref innerRef={contextRef}>
              <Grid>
                <Grid.Column floated="left" width={2}>
                  {/* we wrap in stick to make the column non scrollable */}
                  <Sticky context={contextRef}>
                    <SideMenu user={user} />
                  </Sticky>
                </Grid.Column>
                <Grid.Column width={10}>
                  {/* we wrap in visibility to make the colum scrollable */}
                  <Visibility context={contextRef}>{children}</Visibility>
                </Grid.Column>
                <Grid.Column>
                  <Sticky context={contextRef}>
                    <Segment basic>
                      <Search />
                    </Segment>
                  </Sticky>
                </Grid.Column>
              </Grid>
            </Ref>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <Container text>{children}</Container>
        </>
      )}
    </>
  );
}
export default Layout;
