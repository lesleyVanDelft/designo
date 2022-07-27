/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
};
