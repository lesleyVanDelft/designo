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
				permanent: true,
			},
			{
				source: '/about',
				destination: '/about',
				permanent: true,
			},
			{
				source: '/locations',
				destination: '/locations',
				permanent: true,
			},
			{
				source: '/contact',
				destination: '/contact',
				permanent: true,
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
