/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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
}

export default nextConfig
