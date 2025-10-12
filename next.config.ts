import withPWA from "next-pwa";

const config = {
  reactStrictMode: true,
  env:{
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  }
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})(config);
