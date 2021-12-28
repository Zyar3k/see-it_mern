import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import ApiKey from "./components/APIkey.js";

const projectId = ApiKey.REACT_APP_SANITY_PROJECT_ID;
const token = ApiKey.REACT_APP_SANITY_TOKEN;

export const client = sanityClient({
  projectId: projectId,
  //   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-12-28",
  useCdn: true,
  //   token: process.env.REACT_APP_SANITY_TOKEN,
  token: token,
});

// Create a URL builder for image urls
const builder = imageUrlBuilder(client);
// Get a url for a image asset
export const urlFor = (source) => builder.image(source);
