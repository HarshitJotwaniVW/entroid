/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /* Builds can be pointed at their own output directory, so a production build
     never overwrites the .next a running `next dev` is serving from. Without
     this, building while the dev server is up leaves it serving chunks that no
     longer exist and every route 500s until it is restarted.

       NEXT_DIST_DIR=.next-build npx next build */
  distDir: process.env.NEXT_DIST_DIR || '.next',

  // The parent folder carries its own lockfile, so pin the trace root here or
  // Next infers the wrong workspace and warns on every build.
  outputFileTracingRoot: import.meta.dirname,

  // Blog and topic article bodies are plain .html files read off disk at build
  // time (src/lib/blogBodies.js). They are not JS imports, so Next's file
  // tracer cannot see them — list them explicitly so they ship with the build.
  outputFileTracingIncludes: {
    '/resources/blogs/[slug]': [
      './src/data/blog-bodies/**/*',
      './src/data/topic-bodies/**/*',
    ],
  },

  /* Baseline security headers. Deliberately no Content-Security-Policy: the
     site loads fonts from two external origins, injects article bodies with
     dangerouslySetInnerHTML, carries inline JSON-LD, and Next adds its own
     inline bootstrap — a policy strict enough to be worth having needs nonces
     plumbed through middleware, which is its own piece of work. A half-written
     CSP breaks the site and protects nothing. */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
        ],
      },
    ]
  },
}

export default nextConfig
