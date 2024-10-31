# Flipbook Website

This is a React project using Vite as the build tool.

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```

3. **Create the Missing `index.css` File:**
   - If the development server fails to start due to a missing `index.css` file, create the file in the `src` directory:
     ```bash
     touch src/index.css
     ```
   - Add your CSS styles to `src/index.css`.

4. **Restart the Development Server:**
   ```bash
   npm run dev
   ```

## Project Structure

- `index.html`: The main HTML file.
- `src/main.jsx`: The main entry point for the React application.
- `src/App.jsx`: The main React component.
- `src/index.css`: The main CSS file for the project.

## Available Scripts

- `dev`: Start the development server.
- `build`: Build the project for production.
- `preview`: Preview the built project.

## Dependencies

- React
- ReactDOM
- Vite
- react-flip-page

## Dev Dependencies

- @types/react
- @types/react-dom
- @vitejs/plugin-react
- vite
