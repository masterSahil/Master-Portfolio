export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Block crawlers from sensitive areas if any
    },
    sitemap: 'https://www.mastersahil.dev/sitemap.xml', // Update to your real domain later
  }
}
