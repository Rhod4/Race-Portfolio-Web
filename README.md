# RP

This is the frontend for the Race Portfolio project [WIP]

**This project is very much in the work in progress stage**

---

This project is designed to allow users, within the sim racing world, 
to be able to set up and host sim races. Allowing anyone to race, 
whether in a league or public.

Due to having multiple games with multiple different results systems,
the race admins will have to enter the results in manually.
It will be investigated when all priority work is completed, to see if
it can be automated. 

The race admin will also have to host the race currently. 
Hosting will also be investigated but if done, would have to come at a cost

---

Completed Areas:
- account creation
- viewing races
  - viewing other participants in the race
- joining races
  - and pulling out of races 
- dashboard
  - creating and editing races
- profile area
  - will still need work for more info

Upcoming Features:
- users notified when races are about to start
  - more than likely a code (password) will be sent to participants to join with
- roles haven't been setup yet
- view races they have raced in/ participating in from dashboard
  - view their results
- creation of leagues
    - leagues will be private or public for anyone to join
    - leagues result will be stored and shown with a standings table
- race scores (e.g. safety rating)

These are just a few planned features, with many more to come

---

The project was originally made with vue, but then converted to be
a nuxt.js based project. Due to this, some of the structure 
will need to be revamped

This project uses:
- vue3
- nuxt.js
- typescript
- vuelidate
- DaisyUi
- Pinia
- SweetAlert2
- Axios

---
# Setup Project
## Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
