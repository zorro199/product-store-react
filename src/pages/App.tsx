import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './About'
import Home from '../components/home/Home'
import Favorites from '../components/favorites/Favorites'

function App() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/about' element={ <About/> }/>
                <Route path='/favorites' element={ <Favorites/> }/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App