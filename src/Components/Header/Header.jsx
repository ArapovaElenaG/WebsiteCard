import React from 'react';
import './Header.scss';
import {NavLink} from 'react-router-dom';
import {SettingsContext} from '../App';




function Header({changeTheme, changeLanguage}) {
    const settings = React.useContext(SettingsContext);

    const [clickedTheme, setClickedTheme] = React.useState(false);

    const handleChooseTheme = () => {
        setClickedTheme(!clickedTheme);
    }


    return (
        <header className='header'>
            <nav className='nav'>
                <ul className='ul'>
                    <li className='li'><NavLink className='navLink icon-user' to="/" end></NavLink></li>
                    <li className='li'><NavLink className='navLink icon-folder' to="/projects"></NavLink></li>
                    <li className='li'><NavLink className='navLink icon-education' to="/education"></NavLink></li>
                    <li className='li'><NavLink className='navLink icon-tools' to="/skills"></NavLink></li>
                    <li className='li'><NavLink className='navLink icon-briefcase' to="/experience"></NavLink></li>
                    <li className='li'><NavLink className='navLink icon-phone' to="/contacts"></NavLink></li>
                </ul>
            </nav>

            <div className='settings'>
                <div className='theme' 
                // onClick={changeTheme}
                >
                    {settings.theme === 'dark' && <i className='icon-moon'></i>}
                    {settings.theme === 'light' && <i className="icon-sun"></i>}
                    {settings.theme === 'pink' && <i className="icon-palette"></i>}
                    {settings.theme === 'green' && <i className="icon-palette"></i>}

                    <div className='dropdownTheme'>
                        {settings.theme !== 'dark' && <i className='icon-moon dDcontent' onClick={() => changeTheme('dark')}></i>}
                        {settings.theme !== 'light' && <i className="icon-sun dDcontent" onClick={() => changeTheme('light')}></i>}
                        {settings.theme !== 'pink' && <i className="icon-palette  dDcontent pink" onClick={() => changeTheme('pink')}></i>}
                        {settings.theme !== 'green' && <i className="icon-palette dDcontent green" onClick={() => changeTheme('green')}></i>}
                    </div>
                </div>
                

                {/* {clickedTheme &&
                    <div className='themeMenu'>
                        {settings.theme === 'dark' ? '' : <i className='icon-moon' onClick={() => handleTheme('dark')}></i>}
                        {settings.theme === 'light' ? '' : <i className="icon-sun" onClick={() => handleTheme('light')}></i>}
                        {settings.theme === 'pink' ? '' : <i className="icon-palette pink" onClick={() => handleTheme('pink')}></i>}
                        {settings.theme === 'green' ? '' : <i className="icon-palette green" onClick={() => handleTheme('green')}></i>}
                        {settings.theme === 'brown' ? '' : <i className="icon-palette brown" onClick={() => handleTheme('brown')}></i>}
                    </div>
                } */}
                
                <div className='language' onClick={changeLanguage}>
                    {settings.ruLanguage ? 'RU' : "EN"}
                </div>
            </div>
        </header>
    )
}



export default Header;