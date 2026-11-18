/* ============================================================================
   LinkedIn profiles for the people named on the site: blog authors and the
   founding team.

   Kept in its own small file (no other imports) so both server code (the
   structured data) and client components (the founder cards on /why-us) can
   read it without pulling the blog index into the browser bundle.

   A profile listed here becomes the person's `url` and `sameAs` in the
   structured data, so only add profiles that are confirmed to belong to that
   person. Anyone without an entry is still named, just without a profile link.

   Confirmed by the team on 2026-11-18: Rohit Saraf, Prateek Chouhan,
   Pintu Sahu, Rohit Gupta, Vipul Choure. Sandeep Neema and Rajeev Gupta on 2026-11-18.
   ========================================================================== */

export const LINKEDIN = {
  'Prateek Chouhan': 'https://www.linkedin.com/in/prateek-chouhan25/',
  'Pintu Sahu': 'https://www.linkedin.com/in/sahupintu/',
  'Rohit Saraf': 'https://www.linkedin.com/in/rohiit-saraf/',
  'Vipul Choure': 'https://www.linkedin.com/in/vipulchoure/',
  'Amber Jain': 'https://www.linkedin.com/in/amber-jain-cofounder/',
  'Shubham Rathore': 'https://www.linkedin.com/in/shubham-rathore-aibuilder/',
  'Atul Singh Rajpoot': 'https://www.linkedin.com/in/atulsinghrajpoot/',
  'Mohak Soni': 'https://www.linkedin.com/in/mohaksoni/',
  'Mohammed Azim': 'https://www.linkedin.com/in/mohammed-azim-622ba28b/',
  'Rohit Gupta': 'https://www.linkedin.com/in/rohit-gupta-92803384/',
  'Sandeep Neema': 'https://www.linkedin.com/in/sandeepneema/',
  'Rajeev Gupta': 'https://www.linkedin.com/in/yayrajeev/',
}
