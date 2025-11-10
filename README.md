# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Production visit email notifications (Vercel)

This app can send an email notification every time a user visits the production site (once per browser session).

How it works:
- Client sends a GET request to `/api/notify-visit` on first load in production.
- The serverless function on Vercel sends an email via Resend with visit details.

Setup on Vercel:
- Add environment variables in your Vercel project settings:
  - `RESEND_API_KEY`: Your Resend API key (required).
  - `NOTIFY_TO`: Email to receive notifications (optional; defaults to `zulqarnainishaq400@gmail.com`).
  - `NOTIFY_FROM`: Sender email (optional; defaults to `onboarding@resend.dev`).
- Deploy to Vercel. The function runs only when `VERCEL_ENV=production`.

Notes:
- For reliable delivery and to avoid spam folders, verify a domain in Resend and set `NOTIFY_FROM` to an address on that domain.
- The client uses sessionStorage to avoid multiple notifications in one browser session.
