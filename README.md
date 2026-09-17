# 🧱 Dev Stack Builder

**Dev Stack** is a small React web app that helps developers explore modern web
technologies — frontends, backends, databases, languages, styling tools, and
DevOps tools — and assemble them into a personal "stack" they can compare at a
glance.

## 📖 About the project

Browse a catalog of technologies as cards (each with a rating, difficulty
level, and short description), add the ones you like to a **Your Stack**
panel, and remove them individually or all at once. The whole UI is themed
around a single shared orange → pink → violet gradient, and every action
(add, duplicate attempt, remove, remove all) is confirmed with a toast
notification.

## 🛠️ Technologies used

- **React 18** (function components + hooks)
- **Vite** — dev server & build tool
- **Tailwind CSS** — utility-first styling
- **react-toastify** — toast notifications
- **JSON** — technology data, fetched at runtime instead of hardcoded

## ✨ Features

1. **Build-your-own stack** — add any technology to a persistent "Your Stack"
   sidebar with one click; duplicate adds are blocked with a warning toast and
   the card's button flips to a disabled "✓ Added to Stack" state.
2. **Data-driven catalog** — all 15 technologies live in `public/technologies.json`
   and are loaded with `fetch()` inside a `useEffect`, complete with a loading
   spinner while the request is in flight.
3. **Fully responsive, gradient-themed UI** — a sticky navbar that collapses
   into a hamburger menu on mobile, a responsive 1/2/3-column technology grid,
   and one shared brand gradient (defined once in `tailwind.config.js`) reused
   across the wordmark, hero heading, and primary buttons.

## 🚀 Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser. To create a production build:

```bash
npm run build
npm run preview
```

## 📁 Project structure

```
src/
  components/
    Navbar.jsx        # sticky nav + mobile hamburger menu
    Hero.jsx           # two-tone gradient heading, CTA buttons, illustration
    TechnologyGrid.jsx # section wrapper: card grid + Your Stack sidebar
    TechCard.jsx        # single technology card
    YourStack.jsx        # sidebar showing the selected stack
    Loader.jsx            # loading spinner shown while data is fetched
    Footer.jsx              # brand block, link groups, bottom bar
  App.jsx                    # top-level state: data fetching, stack, toasts
  main.jsx                    # React entry point
public/
  technologies.json           # technology catalog, loaded via fetch()
```

---

## 🎓 React questions

**What is JSX, and why is it used in React?**

JSX is a syntax extension that lets us write HTML-like markup directly inside
JavaScript. It's used because it makes component UI code easier to read and
write than nested `React.createElement()` calls — you can see the structure
of what will render while still using full JavaScript for logic.

**What is the difference between props and state?**

Props are values passed *into* a component from its parent — the component
receiving them can read but not change them. State is data a component
manages *itself*, using `useState`, and can update over time. Props flow
down; state lives locally and triggers a re-render when it changes.

**What does the useState hook do, and where did you use it in this project?**

`useState` lets a function component hold and update local data between
renders. In this project it's used in `App.jsx` to store the fetched
`technologies` list, the `loading` flag, and the `stack` array of selected
technologies, and in `Navbar.jsx` to track whether the mobile menu is open.

**What does the useEffect hook do, and why did you need it to load the JSON data?**

`useEffect` runs a side effect after a component renders — things like data
fetching, subscriptions, or timers that shouldn't happen during rendering
itself. We used it in `App.jsx` to call `fetch('/technologies.json')` once
when the app first mounts, so the network request happens as a side effect
rather than on every render, and we can flip `loading` to `false` once the
data arrives.

**Why does every item in a .map() list need a unique key prop?**

React uses the `key` to tell list items apart between renders, so it knows
which items were added, removed, or reordered instead of re-rendering the
whole list from scratch. Without a stable, unique key, React can mismatch
items and cause bugs or lose component state — we use each technology's
`id` field as the key.

**What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering means showing different UI depending on some condition,
using normal JavaScript (`if`, ternaries, `&&`). We use it in `YourStack.jsx`:
when `stack.length === 0` it renders the "Your stack is empty" message,
otherwise it renders the list of stack items and the "Remove All" button.

