//!below will render the to home page

import { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "./util/baseUrl";
import CreatePost from "./components/Post/CreatePost";
import CardPost from "./components/Post/CardPost";
import { Segment } from "semantic-ui-react";
import { parseCookies } from "nookies";
import { NoPosts } from "./components/Layout/NoData";
import { PostDeleteToastr } from "./components/Layout/Toastr";
import Cookies from "js-cookie";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  EndMessage,
  PlaceHolderPosts,
} from "./components/Layout/PlaceHolderGroup";

//!the props are automatically added from the getInitialProps similar to the context file. You can add pageProps on the _app page, we did that for the user information
const index = ({ user, postData, errorLoading }) => {
  // this is to see the objects and make sure they are working. notice that there is no password in the user object by default
  // console.log(user, followStats);

  const [posts, setPosts] = useState(postData);
  //this is for react-toaster we will build that out later
  const [showToastr, setShowToastr] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(2);

  useEffect(() => {
    document.title = `Welcome, ${user.name.split(" ")[0]}`;
  }, []);

  useEffect(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]);

  const fetchDataOnScroll = async () => {
    try {
      const res = await axios.get(`${baseUrl}/api/posts`, {
        headers: { Authorization: Cookies.get("token") },
        params: { pageNumber },
      });

      if (res.data.length === 0) setHasMore(false);

      setPosts((prev) => [...prev, ...res.data]);
      setPageNumber((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showToastr && <PostDeleteToastr />}
      <Segment>
        <CreatePost user={user} setPosts={setPosts} />
        {posts.length === 0 || errorLoading ? (
          <NoPosts />
        ) : (
          <InfiniteScroll
            hasMore={hasMore}
            next={fetchDataOnScroll}
            loader={<PlaceHolderPosts />}
            endMessage={<EndMessage />}
            dataLength={posts.length}
          >
            {posts.map((post) => (
              <CardPost
                key={post._id}
                post={post}
                user={user}
                setPosts={setPosts}
                setShowToastr={setShowToastr}
              />
            ))}
          </InfiniteScroll>
        )}
      </Segment>
    </>
  );
};

index.getInitialProps = async (ctx) => {
  try {
    const { token } = parseCookies(ctx);
    const res = await axios.get(`${baseUrl}/api/v1/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: { pageNumber: 1 },
    });
    // console.log(res.data);
    return { postData: res.data };
  } catch (error) {
    console.log(error);
    return { errorLoading: true };
  }
};

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
