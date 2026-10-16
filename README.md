# বাজার দর | BazarDor

BazarDor helps people in Bangladesh check everyday grocery prices at a glance. Browse current prices, compare market by market ranges, and see how prices have changed.

## Key features

1. **Browse everyday products:** Explore and track market price changes for regular products and household essentials. See which products have gone up or down and by how much.
2. **Explore by category:** Find products through category based browsing.
3. **Compare market prices:** View each product's market level minimum, maximum, and average prices.
4. **Sort and inspect products:** Sort category listings by price and open product pages for more detail.
5. **Authenticate and update user profile:** User authentication is available through Email, Google and GitHub. Sign in to update your profile.

## Technologies

- **Next.js 16**
- **React 19** and **TypeScript**
- **Tailwind CSS 4** and **HeroUI**
- **Better Auth** with MongoDB for authentication
- **React Icons** and **React Fast Marquee**
- BazarDor product and category data from the [Programming Hero Open API](https://openapi.programming-hero.com/api/bazardor)

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [https://bazardor-emon.vercel.app/](https://bazardor-emon.vercel.app/) in your browser.

Authentication uses environment variables for the MongoDB connection, Better Auth base URL, and Google and GitHub OAuth credentials. Configure `BAZARDOR_DB_URL`, `BETTER_AUTH_URL`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GITHUB_CLIENT_ID`, and `GITHUB_CLIENT_SECRET` in `.env.local` to enable those sign-in features.
