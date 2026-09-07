import 'server-only'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

import { blogPosts } from '../data/blogPosts'
import { topicPosts } from '../data/topicPosts'

/* ============================================================================
   Article bodies.

   The 13 primary posts and the 167 topic posts ship their bodies as plain HTML
   files. Under Vite these were pulled in with `?raw` (eager) and `import.meta
   .glob` (lazy); here they are read off disk on the server at build time, so no
   article markup reaches the client bundle at all — the post page is rendered
   statically with its body already in place.
   ========================================================================== */

const DIRS = {
  primary: path.join(process.cwd(), 'src/data/blog-bodies'),
  topic: path.join(process.cwd(), 'src/data/topic-bodies'),
}

const primarySlugs = new Set(blogPosts.map((p) => p.slug))
const topicSlugs = new Set(topicPosts.map((p) => p.slug))

export const postBody = async (slug) => {
  const dir = primarySlugs.has(slug) ? DIRS.primary : topicSlugs.has(slug) ? DIRS.topic : null
  if (!dir) return null
  try {
    return await readFile(path.join(dir, `${slug}.html`), 'utf8')
  } catch {
    return null
  }
}
