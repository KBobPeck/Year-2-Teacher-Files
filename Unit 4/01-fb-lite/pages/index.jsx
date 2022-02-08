
//!below will render the to home page

import { useEffect } from "react";

//!the props are automatically added from the getInitialProps similar to the context file
const index = ({ user, followStats }) => {
  // this is to see the objects and make sure they are working. notice that there is no password in the user object by default
  // console.log(user, followStats);

  useEffect(()=>{
    document.title = `Welcome, ${user.name.split(' ')[0]}`
  },[])

  return <div>Home Page</div>
}

export default index;

// const index = ({ posts }) => {
  // return (
  //   <div>
  //     {posts &&
  //       posts.length > 0 &&
  //       posts.map((post) => {
  //         return (
  //           <div key={post.id}>
  //             <h1>{post.title}</h1>
  //             <p>{post.body}</p>
  //             <Divider/>
  //           </div>
  //         );
  //       })}
  //   </div>
  // );
// };

//!ctx is a poperty in the appContext. it can be thought of as the page context. meaning it has the entire req object for the page and all the props and all the other objects like cookies and authorization
//!getInitialProps MUST ALWAYS return an object
// index.getInitialProps = async (ctx) => {
  //This will get the token back from the cookies when we pass it through the checkToken in the authUser Util
  // const pageProps = await checkToken(ctx)
  //this will let you see the pageprops to make sure everything is working nicely
  // console.log("getinitialprops",pageProps);
  // this adds the user and followers from the auth to the pageprops so we can destructure
  // return {...pageProps}

  // try {
  //   //! this is a website that stores lots of dummy data that we can use to practice at first.
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   //! this is a showcase of how we can get queries from the url right in the page just type localhost:3000/?name=Jimmy
  //   return {posts : res.data}
  //   // const {name} = ctx.query
  //   // console.log(name);
  // } catch (error) {
  //   return { errorLoading: true };
  // }
// };