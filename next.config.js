/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: [
        'images.unsplash.com',
        't0.gstatic.com',
        'openweathermap.org',
        'media0.giphy.com'
    ]
  }
}
