/* ============================================================================
   Article bylines.

   Each post is assigned an author deterministically from its slug, so a byline
   is stable across renders and builds rather than reshuffling on every deploy.
   Carried over from the previous site unchanged — same author list, same
   featured order, same hash — so no already-published article changes hands.
   ========================================================================== */

import { FEATURED } from './blogIndex'

export const AUTHORS = [
  { name: 'Prateek Chouhan', url: 'https://www.linkedin.com/in/prateek-chouhan25/' },
  { name: 'Pintu Sahu', url: 'https://www.linkedin.com/in/sahupintu/' },
  { name: 'Rohit Saraf', url: 'https://www.linkedin.com/in/rohiit-saraf/' },
  { name: 'Vipul Choure', url: 'https://www.linkedin.com/in/vipulchoure/' },
  { name: 'Amber Jain', url: 'https://www.linkedin.com/in/amber-jain-cofounder/' },
  { name: 'Shubham Rathore', url: 'https://www.linkedin.com/in/shubham-rathore-aibuilder/' },
  { name: 'Atul Singh Rajpoot', url: 'https://www.linkedin.com/in/atulsinghrajpoot/' },
  { name: 'Mohak Soni', url: 'https://www.linkedin.com/in/mohaksoni/' },
  { name: 'Mohammed Azim', url: 'https://www.linkedin.com/in/mohammed-azim-622ba28b/' },
  { name: 'Rohit Gupta', url: 'https://www.linkedin.com/in/rohit-gupta-92803384/' },
]

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
