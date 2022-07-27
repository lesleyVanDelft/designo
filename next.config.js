/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		imageSizes: [16, 32, 48, 64, , 90, 96, 128, 256, 384, 500, 800, 1024],
	},
	experimental: {
		images: {
			allowFutureImage: true,
		},
	},
};
