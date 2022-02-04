import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <Link
        href={{
          pathname: "/api/v1/hello",
          query: { name: "terry" },
        }}
      >
        click here
      </Link>
      <Link
        href={{
          pathname: "/api/v1/hello",
          query: { name: "terry" },
        }}
      >
        click here
      </Link>
    </div>
  );
};

export default index;
