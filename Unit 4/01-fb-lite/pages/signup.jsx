import {
  FooterMessage,
  HeaderMessage,
} from "./components/Common/WelcomeMessage";
import { useState, useEffect, useRef } from "react";
import {
  Form,
  Segment,
  Button,
  Divider,
  TextArea,
  Message,
} from "semantic-ui-react";
import CommonInputs from "./components/Common/CommonSocials";
import ImageDropDiv from "./components/Common/ImageDropDiv";
import axios from "axios";
import { setToken } from "./util/authUser";
import catchErrors from "./util/catchErrors";
import { checkToken } from "./util/authUser";

let cancel;

const signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: "",
  });

  const { name, email, password, bio } = user;

  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [username, setUsername] = useState("");
  const [usernameLoading, setUsernameLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);

  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [highlighted, setHighlighted] = useState(false);
  const inputRef = useRef(null);

  //* USE EFFECTS
  useEffect(() => {
    setSubmitDisabled(!(name && bio && email && password && username));
  }, [user, username]);

  useEffect(() => {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);

  //* HANDLER FUNCTIONS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    let profilePicURL;

    if (media !== null) {
      const formData = new FormData();
      formData.append("image", media, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const res = await axios.post("/api/v1/uploads", formData);
      profilePicURL = res.data.src;
    }

    if (media !== null && !profilePicURL) {
      setFormLoading(false);
      return setErrorMsg("Error Uploading image");
    }

    try {
      const res = await axios.post("/api/v1/user/signup", {
        user,
        profilePicURL,
      });

      setToken(res.data);
    } catch (error) {
      const errorMsg = catchErrors(error);
      setErrorMsg(errorMsg);
    }
    setFormLoading(false);
  };

  const handleChange = (e) => {
    // ! we added files during the imageDrop part since that is the section that handles our files
    const { name, value, files } = e.target;

    //! check if the changed thing is the profile picture. If you have one and then cancle the sreach there will be an error unless you check for length 0
    if (name === "media" && files.length > 0) {
      setMedia(() => files[0]);
      setMediaPreview(() => URL.createObjectURL(files[0]));
    }

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  //* FUNCTIONS *

  const checkUsername = async () => {
    // const cancelToken = axios.CancelToken;
    setUsernameLoading(true);
    try {
      cancel && cancel();

      const res = await axios.get(`/api/v1/user/${username}`, {
        cancelToken: new axios.CancelToken((canceler) => {
          cancel = canceler;
        }),
      });
      if (res.data === "Available") {
        setErrorMsg(null);
        setUsernameAvailable(true);
        setUser((prev) => ({ ...prev, username: username }));
      }
    } catch (error) {
      setErrorMsg("Username Not Available");
      setUsernameAvailable(false);
    }
    setUsernameLoading(false);
  };

  //! for the form you can check the semantic doc to see how loading and error work
  return (
    <>
      <HeaderMessage />

      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Segment>
          <h5>Profile Pic</h5>
          <div style={{ overflow: "hidden", marginBottom: "1rem" }}>
            <ImageDropDiv
              mediaPreview={mediaPreview}
              setMediaPreview={setMediaPreview}
              setMedia={setMedia}
              inputRef={inputRef}
              highlighted={highlighted}
              setHighlighted={setHighlighted}
              handleChange={handleChange}
            />
          </div>
          <Message error content={errorMsg} header="Oops!" />
          <Form.Input
            required
            label="Name"
            placeholder="name"
            name="name"
            value={name}
            onChange={handleChange}
            icon="user"
            iconPosition="left"
          />
          <Form.Input
            required
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            icon="envelope"
            iconPosition="left"
            type="email"
          />
          <Form.Input
            required
            label="Password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            icon={{
              name: showPassword ? "eye" : "eye slash",
              circular: true,
              link: true,
              onClick: () => setShowPassword(!showPassword),
            }}
            iconPosition="left"
            type={showPassword ? "text" : "password"}
          />
          <Form.Input
            loading={usernameLoading}
            error={!usernameAvailable}
            required
            label="Username"
            placeholder="Username"
            icon={usernameAvailable ? "check" : "close"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fluid
            iconPosition="left"
          />
          <Divider hidden></Divider>
          <Form.Field
            required
            control={TextArea}
            name="bio"
            value={bio}
            onChange={handleChange}
            placeholder="bio"
          />

          <CommonInputs
            user={user}
            showSocialLinks={showSocialLinks}
            setShowSocialLinks={setShowSocialLinks}
            handleChange={handleChange}
          />

          <Button
            icon="signup"
            content="Sign Up"
            type="submit"
            color="green"
            disabled={submitDisabled || !usernameAvailable}
          />
        </Segment>
      </Form>
      <FooterMessage />
    </>
  );
};

export default signup;

signup.getInitialProps = async (ctx) => {
  //This will get the token back from the cookies when we pass it through the checkToken in the authUser Util
  const pageProps = await checkToken(ctx);
  return pageProps;
};
