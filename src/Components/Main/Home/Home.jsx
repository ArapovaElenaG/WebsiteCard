import React from 'react';
import './Home.scss';
import {SettingsContext} from '../../App';

// import axios from 'axios';
// import {Link, useNavigate} from 'react-router-dom';
// import {useSelector, useDispatch} from 'react-redux';
// import {displayRegistration, displayAuthorization, getResponseAccountSettings, getErrorAccountSettings, logOutAccount} from '../store/actions';



function Home() {
    const settings = React.useContext(SettingsContext);

    return (
        <div className='home'>
            <h1 className='h h1'>{settings.ruLanguage ? 'О СЕБЕ' : 'ABOUT ME'}</h1>
            <div className='wrapperInfo'>
                <p className='itemInfoHome'>{settings.ruLanguage ? 'Я junior frontend разработчик. Весь объем знаний, который потребовался мне, чтобы создать проекты для моего портфолио - всего лишь капля в безграничном море frontend-а. И это не может не вдохновлять, потому что необходимым условием в работе для меня является постоянное развитие. Мне неоднократно приходилось кардинально менять профессию и каждый раз в короткие сроки я охватывала максимум информации, что позволяло мне достаточно быстро двигаться по карьерной лестнице.\n \nЕщё одной важной деталью для меня, как для человека предпочитающего воспринимать информацию через зрительные образы, является визуальное представление результата моей работы. Именно поэтому я выбрала frontend. Я обожаю создавать и постоянно совершенствовать свое творение. Однако красивая обёртка, это не единственная цель, которую я ставлю перед собой. Сайт должен запоминаться не только внешним видом, но также удобством использования и какими-то новыми прикольными фишками.' : 'I am a junior frontend developer. All the knowledge that I needed to create projects for my portfolio is just a drop in the limitless sea of frontend. And this cannot but inspire, because a necessary condition in my work is constant growth. I repeatedly had to radically change my profession and each time in a short time I covered as much information as possible, which allowed me to move up the career ladder quickly enough.\n \nAnother important detail for me, as a person who prefers to perceive information through visual images, is the visual representation of the result of my work. That\'s why I chose frontend. I love creating and constantly improving my creation. However, a beautiful wrapper is not the only goal I set for myself. The site should be remembered not only for its appearance, but also for its ease of use and some new cool features.'}</p>
            </div>
        </div>
    )
}



export default Home;