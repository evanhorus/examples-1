import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
    useParams,
} from "react-router-dom";
import { App} from './components';

import './styles/index.css';

const UserId = () => {
    const { userId } = useParams();

    return (<h1>{userId}</h1>)
};


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>HELLO!!!!!!!</div>}/>
                <Route path="/examples-1" element={<App />}/>
                <Route path="/examples-2" element={<h1> hello0 </h1>}/>
                <Route path="/:userId" element={<UserId/>}/>
            </Routes>
        </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
