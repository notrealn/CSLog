# CSLog

This is a [Next.js](https://nextjs.org) project for logging inventory usage.

Required dependencies: sqlite, nodejs or bun

[Sqlitebrowser](https://sqlitebrowser.org/) is also recommended to edit the db, which is stored in data.db in this folder (need to build first).

## Getting Started

First, clone this repo and install everything by running:

```bash
npm install
# or
bun i
```

Build the required files:

```bash
npm run build
# or
bun run build
```

Create a `.env` file in accordance to `.env.example`. Then seed the db (required to setup admin account):

```bash
npx prisma db seed
# or
bunx prisma db seed
```

To start the production server:

```bash
npm start
# or
bun start

# Background version
npm pm2start
# or
bun pm2start
```

Dev server (for development only):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result (it's on port 3000).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
