import React from 'react';
import './Experience.scss';
import {SettingsContext} from '../../App';



function Experience() {
    const settings = React.useContext(SettingsContext);

    return (
        <div className='home'>
            <h1 className='h h1'>{settings.ruLanguage ? 'ОПЫТ РАБОТЫ' : 'WORK EXPERIENCE'}</h1>
            <div className='wrapperInfo wrapperInfoExperience'>
                <p className='itemInfoExperience'>
                    {settings.ruLanguage ? '2007 - 2012 гг. \nв строительной организации ООО «Факел» я прошла путь от юрисконсульта до совмещения должностей юрисконсульта, экономиста и замещение сметчика' : '2007 - 2012 \nin the build company I went from lawyer to combining the positions of lawyer, economist and replacement of the estimator'}
                </p>
                <p className='itemInfoExperience'>
                    {settings.ruLanguage ? '2012 - 2014 гг. \nзаместитель директора АНО «Учебно-производственный центр». (С 2005 года была здесь преподавателем компьютерной графики)' : '2012 - 2014 \nDeputy Director of the educational organization. (Since 2005 I have been a computer graphics teacher here)'}
                </p>
                <p className='itemInfoExperience'>
                    {settings.ruLanguage ? '2014 - 2020 гг. \nв ГКУ ПК «Управление капитального строительства Пермского края» я сделала карьеру от специалиста по закупками до начальника отдела и далее до заместителя генерального директора' : '2014 - 2020 \nin the state organization "Management of Capital Construction of the Perm Region" I made a career from a public procurement specialist to the head of the department and then to the deputy general director'}
                </p>
                <p className='itemInfoExperience'>
                    {settings.ruLanguage ? '2018 - по н/в \nглавный редактор собственного детского журнала, который я разработала с нуля и продаю на маркетплейсе Ozon' : '2018 - present \nchief editor of my own children\'s magazine, which I developed from scratch and sell on the Ozon marketplace.'}
                </p>
            </div>
        </div>
    )
}



export default Experience;



