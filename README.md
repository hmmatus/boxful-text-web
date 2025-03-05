This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the dependencies:

```bash
#Example with yarn
yarn install
```
Next, in the root file, create a .env file and add the url of the api service:
```bash
NEXT_PUBLIC_API_URL=<your_api_gateaway>
```
Then you can run the project:
```bash
yarn dev

#or

yarn build
```

Check the result in your terminal to see the route to access the web, should be displayed like this:

```bash
   ▲ Next.js 15.2.0 (Turbopack)
   - Local:        http://localhost:3001
   - Network:      http://192.168.0.6:3001
   - Environments: .env
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
