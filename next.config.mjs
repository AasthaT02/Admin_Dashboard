//  @type {import('next').NextConfig} 
const nextConfig = {
  images:
  {
      remotePatterns:
      [
      {
          protocol:"http",
          hostname:"localhost",
      },
      {
          protocol:"https",
          hostname:"encrypted-tbn0.gstatic.com",
      },
      {
          protocol:"https",
          hostname:"storage.googleapis.com",
      },
      // {
      //     protocol:"https",
      //     hostname:"storage.googleapis.com",
      // },
      // {
      //     protocol:"https",
      //     hostname:"storage.googleapis.com",
      // },
  ],
  },

};

export default nextConfig;
