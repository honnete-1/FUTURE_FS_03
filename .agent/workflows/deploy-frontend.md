---
description: How to deploy the frontend to Vercel
---

# Deploying to Vercel

Since this is a **Next.js 16** project, **Vercel** is the best platform for deployment.

## Prerequisites
- A GitHub account
- A Vercel account (linked to GitHub)
- Your project pushed to a GitHub repository

## Steps

1.  **Push to GitHub**
    -   Initialize git if you haven't: `git init`
    -   Add all files: `git add .`
    -   Commit: `git commit -m "Ready for deploy"`
    -   Create a new repo on GitHub and follow the instructions to push your code.

2.  **Deploy on Vercel**
    -   Go to [Vercel Dashboard](https://vercel.com/dashboard).
    -   Click **"Add New..."** -> **"Project"**.
    -   Import your `vision-web` repository.
    -   **Framework Preset**: It should auto-detect "Next.js".
    -   **Root Directory**: **IMPORTANT!** Make sure to select `vision-web` if your repo root is `FUTURE_FS_03`. If you pushed just `vision-web` as the root, leave it as `./`.
    -   Click **Deploy**.

## Environment Variables
If we add backend URLs or API keys later, remember to add them in Vercel under **Settings > Environment Variables**.
