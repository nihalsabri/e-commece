import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { AuthProvider } from "./context/AuthContext.jsx";
import App from './App.jsx'
import store from "./redux/store";
import { Provider } from "react-redux";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
        <AuthProvider>
            <App />
      </AuthProvider>
      </Provider>
  </StrictMode>
);
