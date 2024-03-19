import React from 'react';
import './Main.scss';
import {Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';
import Contacts from './Contacts/Contacts';
import {SettingsContext} from '../App.js';
// import {SettingsContext} from '../Header/Header';

// import axios from 'axios';
// import {Link, useNavigate} from 'react-router-dom';
// import {useSelector, useDispatch} from 'react-redux';
// import {displayRegistration, displayAuthorization, getResponseAccountSettings, getErrorAccountSettings, logOutAccount} from '../store/actions';


function Main() {
    return (
        <main className='main'>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path='*' element={<Home />}/>
                <Route exact path="/projects" element={<Projects/>}/>
                <Route exact path="/education" element={<Education/>}/>
                <Route exact path="/skills" element={<Skills/>}/>
                <Route exact path="/experience" element={<Experience/>}/>
                <Route exact path="/contacts" element={<Contacts/>}/>
                {/* <Route exact path="/objectsearch" element={<Projects/>}/>
                <Route exact path="/tariffs" element={<Contacts/>}/>
                <Route path="/task/:id" element={<Home/>}></Route>
                <Route path="*" element=
                {<Error/>}/> */}
            </Routes>


        </main>
    )
}



export default Main;