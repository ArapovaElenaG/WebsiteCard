import React from 'react';
import './App.scss';
import Header from './Header/Header';
import Main from './Main/Main';

export const SettingsContext = React.createContext();


function App() {
  const [settings, setSettings] = React.useState({
    theme: 'dark',
    ruLanguage: true
  })

  // смотрим сторадж есть ли там тема
  let lastTheme = localStorage.getItem('lastTheme');
  lastTheme= JSON.parse(lastTheme);
  if (lastTheme !== settings.theme) {setSettings({...settings, theme: lastTheme})};

  // устанавливаем тему на html
  document.documentElement.setAttribute('datatheme', settings.theme);


  const changeTheme = (color) => {
    localStorage.setItem('lastTheme', JSON.stringify(color));
    document.documentElement.setAttribute('datatheme', color);
    setSettings({...settings, theme: color});
  };

  const changeLanguage = () => {setSettings({...settings, ruLanguage: !settings.ruLanguage})};

  let arrGrid = [];
  for (let i = 0; i < 150; i++) {
     arrGrid.push('.')
  }

  return (
    <SettingsContext.Provider value={settings}>
      <div className="App" datatheme={settings.theme}>
        <Header changeTheme={changeTheme} changeLanguage={changeLanguage}/>
        <div className='wrapperPhoto'>
          {/* <div className={`photo ${settings.theme === 'light' ? 'photoLight' : ''} ${settings.theme === 'dark' ? 'photoDark' : ''}`}></div> */}
          <div className='photo'></div>
          <div className='wrapperContent'>
            <div className='layoutGrid'>
              {arrGrid.map(item => {
                return <div className='itemLayoutGrid'>{item}</div>
              })}
            </div>
            <div className='layoutName'>
              <h1 className='h h1'>{settings.ruLanguage ? 'ЕЛЕНА АРАПОВА' : 'ELENA ARAPOVA'}</h1>
              <p>{settings.ruLanguage ? 'frontend разработчик' : 'frontend developer'}</p>
            </div>
          </div>
        </div>
        <Main/>
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
