# ej2-react-webpack-externals

Repository Description: Demo showing how to use Syncfusion EJ2 React with webpack externals to reduce bundle size.

## Project Overview

This sample demonstrates configuring webpack to treat Syncfusion libraries as externals so that the application bundle excludes large library code and instead references those resources at runtime. The project contains a simple React entry under `src/` and a `webpack.config.js` that shows the externals configuration.

## Features

- Example webpack externals setup for Syncfusion EJ2 React
- Minimal React sample files in `src/` demonstrating component rendering
- Scripts for install, run, and production build

## Prerequisites

- Node.js and npm installed (verify with `node -v` and `npm -v`)

## Installation

Install project dependencies:

```bash
npm install
```

## Run (development)

Start the development server which serves the example:

```bash
npm start
```

## Build (production)

```bash
npm run build
```

## How it works

Webpack is configured to mark Syncfusion packages as externals so the generated `bundle.js` contains only your application code. The sample `src/index.html` loads the required external scripts or CDN-hosted packages at runtime as shown in the `src/` folder.

For more details, see the Syncfusion docs: https://ej2.syncfusion.com/react/documentation/getting-started/webpack-externals/
