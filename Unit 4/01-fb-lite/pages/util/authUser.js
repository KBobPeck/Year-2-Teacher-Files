import Router from "next/router";
import cookie from "js-cookie";


export const regexUsername = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const setToken = (token) => {
  //adds a cookie to the browser so the user can be authed
  cookie.set("token", token);
  //This forces the page to change back to home page if everything went right and there was a token issued
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

export const logoutUser = (email) => {
  cookie.set("userEmail", email)
  cookie.remove('token');
  Router.push('/login')
  Router.reload()
}

//!THIS IS THE EXAMPLE THAT I HAD ON THE INDEX PAGE!
//!IF YOU WANT TO USE THIS EXAMPLE THEN BY ALL MEANS PLEASE DO!
//!I ALSO USED IT FOR TESTING ON MY OWN PRACTICE WORK!
//TODO FOR THIS TO WORK PLEASE ADD A getInitialProps TO EVERY PAGE AND CHECK TOKEN
// export const checkToken = async (ctx) => {
//   const {token} = parseCookies(ctx)
//   let pageProps = {};

//   // we get the token
//   // console.log('token', token);

//   //this will be a growing list as we add more routes to the page
//   const protectedRoutes = ctx.pathname === "/";

//   if (!token) {
//     protectedRoutes && redirectUser(ctx, "/login");
//   } else {

//     try {
//       //now we have to add the base url here because of where the cookie is baing placed. if the page reloads then the cookie is lost unless it is tied to the local host and not the root folder
//       const response = await axios.get(`${baseUrl}/api/v1/auth`, {
//         headers:{
//           Authorization: `Bearer ${token}`
//         }
//       })

//       const {user, followers} = response.data

//       if(user) {
//         //if the user is sent to login or signup while they still have an active token then they will be sent to the home page
//         !protectedRoutes && redirectUser(ctx, '/');
//       }

//       pageProps.user = user;
//       pageProps.followers = followers

//     } catch (error) {
//       console.log(error);
//       destroyCookie(ctx, "token");
//       redirectUser(ctx, "/login");
//     }
//   }

//   return {pageProps}
// };
