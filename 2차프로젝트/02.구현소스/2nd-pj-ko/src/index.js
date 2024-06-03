import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from'react-router-dom';
import Layout from './components/layout/Layout';

export default function MainComponent() {
    return(
        //라우터 루트로 브라우저 라우트 시작
        <BrowserRouter>
            <Routes>
               <Route path='/' element={<Layout/>}/>
            </Routes>
        </BrowserRouter>
    );    
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<MainComponent></MainComponent>);
