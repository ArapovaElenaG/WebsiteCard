import React from 'react';
import './Projects.scss';
import {SettingsContext} from '../../App';
import landingMonitor from '../../../images/landingMonitor.jpg';
import landingPhone from '../../../images/landingPhone.jpg';

import serviseScanMonitor from '../../../images/serviseScanMonitor.jpg';
import serviseScanPhone from '../../../images/serviseScanPhone.jpg';

import canbanBoardMonitor from '../../../images/canbanBoardMonitor.jpg';
import canbanBoardPhone from '../../../images/canbanBoardPhone.jpg';

import messengerMonitor from '../../../images/messengerMonitor.jpg';
import messengerPhone from '../../../images/messengerPhone.jpg';




function Projects() {
    const settings = React.useContext(SettingsContext);

    const progecrts = [
        {
            ruTitle: 'Сервис Скан',
            ruDescription: '- сервис для поиска в сети интернет упоминаний об организации по её ИНН. После авторизации сайт позволяет сделать запрос по заданным параметрам и отображает найденные статьи. Макет в Figma. (API - https://gateway.scan-interfax.ru). Стек: react, redux.',
            enTitle: 'Servise Scan',
            enDescription: '- a service for searching the Internet for mentions of an organization by its INN. After authorization, the site allows you to make a request for the specified parameters and displays the found articles. Layout in Figma. (API - https://gateway.scan-interfax.ru ). Stack: react, redux.',
            url: 'https://arapovaelenag.github.io/ServiseScan_production',
            monitorImg: serviseScanMonitor,
            phoneImg: serviseScanPhone,
        },
        {
            ruTitle: 'Канбан доска',
            ruDescription: '- инструмент для управления задачами. Макет в Figma. Стек: react.',
            enTitle: 'Canban Board',
            enDescription: '- a task management tool. Layout in Figma. Stack: react.',
            url: 'https://arapovaelenag.github.io/CanbanBoard',
            monitorImg: canbanBoardMonitor,
            phoneImg: canbanBoardPhone,
        },
        {
            ruTitle: 'Одностраничный сайт',
            ruDescription: 'сайт на нативном JS.',
            enTitle: 'Single-page website',
            enDescription: 'the site is in native JS.',
            url: 'https://arapovaelenag.github.io/Landing-module-5',
            monitorImg: landingMonitor,
            phoneImg: landingPhone,
        },
        {
            ruTitle: 'Мессенджер',
            ruDescription: ' - приложение для обмена сообщениями с пользователями мессенджера WhatsApp. Стек: react, redux. (API - https://green-api.com). Интрефейс по примеру web.whatsapp.',
            enTitle: 'Messenger',
            enDescription: '- an application for messaging with WhatsApp messenger users. Stack: react, redux. (API - https://green-api.com). The interface is based on the example of web.whatsapp.',
            url: 'https://arapovaelenag.github.io/Messenger',
            monitorImg: messengerMonitor,
            phoneImg: messengerPhone,
        },

    ]

    return (
        <div className='home'>
            <h1 className='h h1'>{settings.ruLanguage ? 'РЕАЛИЗОВАННЫЕ ПРОЕКТЫ' : 'IMPLEMENTED PROJECTS'}</h1>
            <div className='wrapperInfo'>
                {progecrts.map(item => {
                    return (
                        <div key={item.url} className='wrapperProject'>
                            <div className='wrapperDevises'>
                                <div className='monitor'>
                                    <div className='imgMonitor'>
                                        <img src={item.monitorImg} alt="" className='img'/>
                                    </div>
                                </div>
                                <div className='phone'>
                                    <div className='imgPhone'>
                                        <img src={item.phoneImg} alt="" className='img'/>
                                    </div>
                                </div>
                            </div>
                            <h2 className='h h2'>{settings.ruLanguage ? item.ruTitle : item.enTitle}</h2>
                            <p className='description'>
                                <a href={item.url} target='_blank' className='a'>{settings.ruLanguage ? "Сайт" : "Site"}</a>
                                &ensp;
                                {settings.ruLanguage ? item.ruDescription : item.enDescription}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



export default Projects;