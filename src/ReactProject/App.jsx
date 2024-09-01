import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
function App(){
    return(
            <Router>
                <Routes>
                    <Route path="/" element={<Login></Login>}></Route>
                    <Route path="/register" element = {<Register></Register>}></Route>
                    <Route path="/login" element = {<Login></Login>}></Route>
                    <Route path="/home" element={<Home></Home>}></Route>
                </Routes>
            </Router>
    )
}
export default App;