import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import AboutThisSight from './AboutThisSight';
import LoginPage from './LoginPage'; 
import ContactUs from './ContactUs';
import User from './User';
import Navbar from './NavBar';
import PrivateRoute from './PrivateRoute';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = (from, navigation) => {
        setIsLoggedIn(true);
        navigation(from, { replace: true });
    }

    return (
        <>
            <BrowserRouter>
           
                <Navbar />
                <Routes>
                    <Route path='/' element={<RootElement />} />
                    <Route
                        path='/about'
                        element={
                            <PrivateRoute authorized={isLoggedIn}>
                                <AboutThisSight />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path='/contact'
                        element={
                            <PrivateRoute authorized={isLoggedIn}>
                                <ContactUs />
                            </PrivateRoute>
                        }
                    />
                    <Route path='/login' element={<LoginPage onClick={handleLogin} />} />
                    <Route path='user/:username' element={<User />} />
                </Routes>
                <h5>Frinldly Friends</h5>
                <ul>
                    <li>
                        <Link to='user/Mary'>Mary</Link>
                    </li>
                    <li>
                        <Link to='user/John'>John</Link>
                    </li>
                    <li>
                        <Link to='user/Jane'>Jane</Link>
                    </li>
                    <li>
                        <Link to='user/Bob'>Bob</Link>
                    </li>
                    <li>
                        <Link to='user/Steve'>Steve</Link>
                    </li>
                    <li>
                        <Link to='user/Dave'>Dave</Link>
                    </li>
                </ul>
            </BrowserRouter>
        </>
    );
}

const RootElement = () => <span></span>;

export default App;