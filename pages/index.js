import React from "react";
import { Heading } from "@chakra-ui/react";
import { DEFAULT_METATAGS } from "../src/core/constants";

const assets = undefined;
const Homepage = () => {
  return <Heading minH="100vh">Hello world</Heading>;
};

export async function getStaticProps() {
  const assetPreload = assets
    ? Object.keys(assets).map((key) => {
        return {
          rel: "preload",
          href: assets[key],
          as: "image",
        };
      })
    : [];
  const preconnects = [{ rel: "preconnect", href: "https://s3.amazonaws.com" }];

  const preloads = assetPreload.concat(preconnects);

  return {
    props: { metaTags: DEFAULT_METATAGS, preloads },
  };
}

export default Homepage;
