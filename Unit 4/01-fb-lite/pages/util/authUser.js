import Router from "next/router";
import cookie from "js-cookie";
import axios from "axios";
import catchErrors from "./catchErrors";
import { Component } from "react";
import { destroyCookie, parseCookies } from "nookies";

export const regexUsername = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const setToken = (token) => {
  cookie.set("token", token);
  Router.push("/");
};

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
};

export const checkToken = async (ctx) => {
  const {token} = parseCookies(ctx)
  let pageProps = {};

  // we get the token
  // console.log('token', token);

  //this will be a growing list as we add more routes to the page
  const protectedRoutes = ctx.pathname === "/";

  if (!token) {
    protectedRoutes && redirectUser(ctx, "/login");
  } else {

    try {
      const response = await axios.get('/api/v1/auth', {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })

      const {user, followers} = response.data

      if(user) {
        //if the user is sent to login or signup while they still have an active token then they will be sent to the home page
        !protectedRoutes && redirectUser(ctx, '/');
      }

      pageProps.user = user;
      pageProps.followers = followers

    } catch (error) {
      // console.log(error);
      destroyCookie(ctx, "token");
      redirectUser(ctx, "/login");
    }
  }

  return pageProps
};
