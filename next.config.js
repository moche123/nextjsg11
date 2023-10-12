/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'png.pngtree.com'
            }
        ]
    }
}

module.exports = nextConfig
