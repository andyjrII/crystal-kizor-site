# Crystal Kizor: landing page
Next.js (App Router) + TypeScript. Mostly static, with two small client components (chapter nav, contact form).

    npm install
    npm run dev      # http://localhost:3000
    npm run build

Copy and links live in `lib/brands.ts`. Chapters whose `href` is `'#'` render their button as an enquiry link to the contact form (`#contact` inside the `#next` section); set a real URL there when one exists.

## Contact form

The `#next` section posts to `app/api/contact/route.ts`, which sends via Resend with no extra dependencies. Copy `.env.example` to `.env.local` and set:

    CONTACT_TO_EMAIL=...  # who receives enquiries; change any time, no code change needed
    RESEND_API_KEY=...    # Resend API key used for sending

Optional: `CONTACT_FROM_EMAIL` (verified sender; defaults to Resend's onboarding sender, suitable for testing only — verify a domain in Resend for production).

Deploy: push to GitHub, import the repo on Vercel (add the env vars in the project settings).
