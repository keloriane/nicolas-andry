import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [{
      protocol: "https",
      hostname: "cdn.sanity.io"
    }]
  },
  compiler: {
    styledComponents: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
};
export default MillionLint.next({
  rsc: true
})(nextConfig);