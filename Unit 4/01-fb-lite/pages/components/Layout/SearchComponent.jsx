import React, { useState } from "react";
import { List, Image, Search } from "semantic-ui-react";
import axios from "axios";
import cookie from "js-cookie";
import Router from "next/router";
import baseUrl from "../../util/baseUrl";
let cancel;

function SearchComponent() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleChange = async (e) => {
    const { value } = e.target;
    setText(value);
    if (value) {
      setLoading(true);
      try {
        cancel && cancel();
        const CancelToken = axios.CancelToken;
        const token = cookie.get("token");

        const res = await axios.get(`${baseUrl}/api/v1/search/${value}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          cancelToken: new CancelToken((canceler) => {
            cancel = canceler;
          }),
        });

        if (res.data.length === 0) {
          setResults([]);
          return setLoading(false);
        }

        setResults(res.data);
      } catch (error) {
        console.log("Error Searching");
      }
    } else {
      setResults([]);
    }

    setLoading(false);
  };

  return (
    <Search
      onBlur={() => {
        results.length > 0 && setResults([]);
        loading && setLoading(false);
        setText("");
      }}
      loading={loading}
      value={text}
      resultRenderer={ResultRenderer}
      results={results || null}
      onSearchChange={handleChange}
      placeholder="Find other users"
      minCharacters={1}
      onResultSelect={(e, data) => Router.push(`/${data.result.username}`)}
    />
  );
}

const ResultRenderer = ({ _id, profilePicURL, name }) => {
  return (
    <List key={_id}>
      <List.Item>
        <Image
          style={{
            objectFit: "contain",
            height: "1.5rem",
            width: "1.5rem",
          }}
          src={profilePicURL}
          alt="ProfilePic"
          avatar
        />
        <List.Content header={name} as="a" />
      </List.Item>
    </List>
  );
};

export default SearchComponent;
