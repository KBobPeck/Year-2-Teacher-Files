import {
  FooterMessage,
  HeaderMessage,
} from "../components/Common/WelcomeMessage";
import { useState, useEffect, useRef } from "react";
import { Form, Segment, Button, Divider, TextArea } from "semantic-ui-react";
import CommonInputs from "../components/Common/CommonSocials";
import ImageDropDiv from "../components/Common/ImageDropDiv";
import axios from "axios";
import baseUrl from "../util/baseUrl";
// import { regexUserName } from "../util/authUser";
const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

const signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
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

  const [userName, setUserName] = useState("");
  const [userNameLoading, setUserNameLoading] = useState(false);
  const [userNameAvailable, setUserNameAvailable] = useState(true);

  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [highlighted, setHighlighted] = useState(false);
  const inputRef = useRef(null);

  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    const isUser = Object.values({ name, email, password, userName }).every(
      (item) => Boolean(item)
    );
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user, userName]);

  const checkUsername = async () => {
    setUserNameLoading(true);
    try {
      const res = await axios.get(`/api/v1/signup/${userName}`);
      if (res.data === "Available") {
        setUserNameAvailable(true);
        setUser((prev) => ({ ...prev, userName }));
      }
    } catch (error) {
      setErrorMsg("Username is not available");
    }
    setUserNameLoading(false);
  };

  useEffect(() => {
    userName === "" ? setUserNameAvailable(false) : checkUsername();
  }, [userName]);

  //! handler functions
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    // ! we added files during the imageDrop part since that is the section that handles our files
    const { name, value, files } = e.target;

    //! you could create a new handler if you wanted to in the imagedrop and just update the user there too
    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser((prev) => ({ ...prev, [name]: value }));
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
              name: "eye",
              circular: true,
              link: true,
              onClick: () => setShowPassword(!showPassword),
            }}
            iconPosition="left"
            type={showPassword ? "text" : "password"}
          />
          <Form.Input
            loading={userNameLoading}
            error={
              !userNameAvailable && { content: "testing", pointing: "down" }
            }
            required
            label="Username"
            placeholder="Username"
            icon={userNameAvailable ? "check" : "close"}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              const test = regexUserName.test(e.target.value);
              //TODO I HAVE NO CLUE WHY THIS IS SO TEMPREMENTAL ITS DRIVING ME CRAZY
              if (test || regexUserName.test(e.target.value)) {
                setUserNameAvailable(true);
              } else {
                setUserNameAvailable(false);
              }
            }}
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
            disabled={submitDisabled || !userNameAvailable}
          />
        </Segment>
      </Form>
      <FooterMessage />
    </>
  );
};

export default signup;
