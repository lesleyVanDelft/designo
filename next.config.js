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
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: false,
			},
		];
	},
};

// module.exports = {
// 	async redirechts() {
// 		return [
// 			{
// 				source: '/',
// 				destination: '/home',
// 				permanent: true,
// 			},
// 		]
// 	}
// }
