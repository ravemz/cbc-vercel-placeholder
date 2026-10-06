/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
    ],
  },
  // Serve the landing page for any unmatched path, keeping the original URL
  // in the browser so Vercel Analytics records the path the visitor landed on.
  async rewrites() {
    return {
      fallback: [{ source: "/:path*", destination: "/" }],
    };
  },
};

export default nextConfig;
