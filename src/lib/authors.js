/* ============================================================================
   Article bylines.

   Each post is assigned an author deterministically from its slug, so a byline
   is stable across renders and builds rather than reshuffling on every deploy.
   Carried over from the previous site unchanged — same author list, same
   featured order, same hash — so no already-published article changes hands.
   ========================================================================== */

import { FEATURED } from './blogIndex'
import { LINKEDIN } from './people'

/* The ORDER of this list decides which post gets which author (see the hash
   below). Don't reorder or insert names in the middle: add new authors at the
   end, or published posts will change author. Profile URLs live in people.js. */
const AUTHOR_NAMES = [
  'Prateek Chouhan', 'Pintu Sahu', 'Rohit Saraf', 'Vipul Choure', 'Amber Jain',
  'Shubham Rathore', 'Atul Singh Rajpoot', 'Mohak Soni', 'Mohammed Azim', 'Rohit Gupta',
]

export const AUTHORS = AUTHOR_NAMES.map((name) => ({ name, url: LINKEDIN[name] }))

/* The featured posts — the ones surfaced at the top of the listing — carry the
   senior set, in featured order. Everything else is spread across the full
   list by a hash of the slug. */
const TOP_AUTHORS = ['Prateek Chouhan', 'Pintu Sahu', 'Rohit Saraf', 'Vipul Choure', 'Rohit Gupta']
  .map((n) => AUTHORS.find((a) => a.name === n))

export const authorFor = (slug = '') => {
  const fi = FEATURED.indexOf(slug)
  if (fi !== -1) return TOP_AUTHORS[fi % TOP_AUTHORS.length]
  let h = 0
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0
  return AUTHORS[h % AUTHORS.length]
}
