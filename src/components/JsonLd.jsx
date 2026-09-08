/* ============================================================================
   A schema.org graph, serialised into the page.

   NOTE: no 'use client' — deliberately. Every other component in this folder
   is a client component; this one must stay on the server. Rendered from a
   server page.jsx the JSON is flattened straight into the streamed HTML and
   never reaches the client bundle. Imported into a client component instead,
   it would be serialised twice, and via Nav or Footer it would be emitted on
   every page whether that page wanted it or not.

   Placement: the script does not need to be in <head>. Google, Bing and the
   schema.org spec all read JSON-LD from anywhere in the document, and React 19
   only hoists <script> elements carrying both `async` and `src`, so an inline
   ld+json block renders exactly where it is put, with no hydration mismatch.
   ========================================================================== */

/* `<` is escaped because the graph carries free text — glossary definitions,
   FAQ answers, article titles. A literal `</script>` inside any of them would
   close the block early and spill the rest of the JSON into the page. */
export const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
  />
)

export default JsonLd
