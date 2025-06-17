# Vite + React App

This project was bootstrapped with Vite and uses React.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js) or yarn

### Installing

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run preview` or `yarn preview`

Serves the production build locally. This is a good way to check if the production build is working correctly before deploying.

## Project Structure (Simplified)

```
.
├── public/              # Static assets
├── src/                 # Source files
│   ├── components/      # Reusable components
│   ├── assets/          # Images, fonts, etc.
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Entry point of the application
├── .eslintrc.cjs        # ESLint configuration
├── .gitignore           # Git ignore file
├── index.html           # Main HTML file
├── package.json         # Project metadata and dependencies
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## Learn More

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

This is a minimal setup to get React working in Vite with HMR and some ESLint rules.
