/* ============================================================================
   Text helpers for metadata.

   Page copy is written to be read on the page, not to sit in a <meta> tag: the
   product and industry `intro` paragraphs run 192 to 456 characters, where a
   search result shows about 155. These trim that down without leaving a
   sentence cut off mid-clause.
   ========================================================================== */

/* One space between words, no leading or trailing whitespace. Source strings
   are authored across several lines in the content files. */
const collapse = (s) => String(s ?? '').replace(/\s+/g, ' ').trim()

/* Trim to `max` characters, preferring a sentence boundary.

   The 0.6 floor is the part that matters: without it, a paragraph whose first
   sentence is six words long would be clamped to those six words and the rest
   of the description thrown away. Below the floor the cut falls back to the
   last whole word with an ellipsis, which reads as continuing rather than as
   a complete but uselessly short sentence. */
export const clampDescription = (text, max = 155) => {
  const s = collapse(text)
  if (s.length <= max) return s

  const window = s.slice(0, max + 1)
  const sentence = Math.max(
    window.lastIndexOf('. '),
    window.lastIndexOf('? '),
    window.lastIndexOf('! '),
  )
  if (sentence >= max * 0.6) return window.slice(0, sentence + 1)

  const word = window.slice(0, max - 1).lastIndexOf(' ')
  const cut = window.slice(0, word > 0 ? word : max - 1)
  // A trailing comma or dash before an ellipsis reads as a typo.
  return `${cut.replace(/[,;:–—-]+$/, '')}…`
}

/* Join a few fields into one description, dropping the empty ones. Used where
   no single field is long enough on its own — a use case's scenario plus its
   outcome, for instance. */
export const describe = (...parts) => clampDescription(parts.filter(Boolean).join(' '))

/* 'AI & Agents' -> 'ai-agents'.

   Must stay identical to `sslug` in components/Glossary.jsx, which generates
   the section ids this links to. Kept as its own copy rather than imported,
   because that file is a client component and this one is used from server
   metadata; if either changes, change both. */
export const anchorSlug = (s) =>
  String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
