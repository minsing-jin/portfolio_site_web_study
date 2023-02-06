/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
	images: {
	  domains: [
		  'www.notion.so',
		  'images.unsplash.com',
		  'https://s3.us-west-2.amazonaws.com'
	  ]
  }
  },
}

module.exports = nextConfig
