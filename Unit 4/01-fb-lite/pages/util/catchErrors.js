const catchErrors = error => {
  let errorMsg;

  // If the request was made and the server not responded with a status code in the range of 2xx
  if (error.response) {
    errorMsg = error.response.data;
    console.error(errorMsg);

    // if the request was made and no response was recevied from server
  } else if (error.request) {
    errorMsg = error.request;
    console.error(errorMsg);
    
    // if something else happened while making the request
  } else {
    errorMsg = error.message;
    console.error(errorMsg);
  }
  return errorMsg;
};

export default catchErrors;
