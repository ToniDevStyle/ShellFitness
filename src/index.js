// Import the React library, which is necessary for working with React components.
import React from 'react';

// Import the 'createRoot' function from the 'react-dom/client' library, which is used to render the app into the DOM.
import ReactDOM from 'react-dom/client';

// Import the main component of the application, named 'App'.
import App from './App';

// Import the 'BrowserRouter' component from 'react-router-dom', which is used to enable routing in the app.
import { BrowserRouter } from 'react-router-dom';

// Create a React root using 'createRoot' and pass it the DOM element with the id 'root'.
// This is the entry point where the React app will be rendered in the DOM.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the component tree into the created root.
// Wrap the 'App' component with 'BrowserRouter' to enable routing with react-router.
root.render(
    // 'BrowserRouter' provides the routing context for the application.
    <BrowserRouter>
        {/* 'App' is the main component of the application where the UI structure and routes are defined. */}
        <App />
    </BrowserRouter>
);
