import React from "react";

//~~~~This is an example of why we need to use useState and not variables

const ErrorExample = () => {
  let title = "random title";

  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;

//This is an error because we are not rerendering the site
//this will also fail because we don't have a way of
//  perserving the variables between renders

//now that you have see the error we can move to example 2 and show the state
