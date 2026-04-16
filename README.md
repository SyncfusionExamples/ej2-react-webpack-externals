# ej2-react-webpack-externals

This sample demonstrates configuring webpack to treat Syncfusion libraries as externals so that the application bundle excludes large library code and instead references those resources at runtime. The project contains a simple React entry under `src/` and a `webpack.config.js` that shows the externals configuration.


# Features

- Example Webpack externals setup for Syncfusion EJ2 React components  
- Demonstrates excluding large Syncfusion libraries from the application bundle  
- Minimal React sample files in `src/` illustrating component rendering and usage  
- Webpack configuration showing how to map Syncfusion packages as externals  
- Reduced bundle size by loading Syncfusion resources at runtime (e.g., via CDN or external scripts)  
- Suitable for optimizing performance and improving caching in React applications  
- npm scripts included for dependency installation, development run, and production build  


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
