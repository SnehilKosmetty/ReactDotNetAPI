import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Products } from './components/Products';
import './App.css';

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fetch-data" element={<FetchData />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Layout>
    );
}