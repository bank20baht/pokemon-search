/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return process.env.GIT_HASH + "@" + process.env.BUILD_ID;
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
