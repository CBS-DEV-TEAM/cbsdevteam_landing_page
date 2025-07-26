import { Routes, Route } from 'react-router-dom'
import './index.css'
import IndexPage from './pages/IndexPage'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'

function App(){
    return(
        <Routes>
            <Route path="/" element={<IndexPage />}/>
            <Route path="/products" element={<ProductsPage />}/>
            <Route path="/about" element={<AboutPage />}/>
        </Routes>
    )
}

export default App