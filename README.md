# Curacal
Curacal is a web app that helps you keep track of the people you want to buy gifts for, the occasions you give them on, and your gift ideas for each individual person.
For when you don't just want to give them something from their wishlist.

## Stack
The backend consists of an Express.js server, exposing API endpoints and serving the client-side Svelte app as a static bundle in production.

## Project Structure
This repository is structured as a monorepo, containing directories for both the [frontend](./frontend/) and [backend](./backend/), each with their own ``package.json`` files, defining each domain's dependencies and NPM scripts. The root-level ``package.json`` defines project-wide dev-dependencies, and NPM-scripts for building and running the project.