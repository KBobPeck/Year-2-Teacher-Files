import Router from "next/router";
import cookie from "js-cookie";

export const setToken = (token) => {
  //adds a cookie to the browser so the user can be authed
  cookie.set("token", token);
  //This forces the page to change back to home page if everything went right and there was a token issued
  Router.push("/");
};
