import React from 'react';
import './Education.scss';
import {SettingsContext} from '../../App';



function Education() {
    const settings = React.useContext(SettingsContext);

    return (
        <div className='home'>
            <h1 className='h h1'>{settings.ruLanguage ? 'ОБРАЗОВАНИЕ' : 'EDUCATION'}</h1>
            <div className='wrapperInfo wrapperInfoEducation'>
                <p className='itemInfoEducation'>
                    {settings.ruLanguage ? '2022 - 2023 гг. \non-line школа SkillFactory, \nспециальность frontend developer, \nпереквалификация высшего образования' : '2022 - 2023 \non-line school SkillFactory, \nspecialty frontend developer, \nretraining of higher education'}
                </p>
                <p className='itemInfoEducation'>
                    {settings.ruLanguage ? '2005 - 2007 гг. \nИнститут повышения квалификации - РМЦПК, \nспециальность юрисконсульт, \nпереквалификация высшего образования' : '2005 - 2007 \nInstitute of Advanced Training - RMСPR, \nspecialty lawyer, \nretraining of higher education'}
                </p>
                <p className='itemInfoEducation'>
                    {settings.ruLanguage ? '2000 - 2005 гг. \nПермский государственный технический университет, \nквалификация инженер-строитель, \nвысшее образование' : '2000 - 2005 \nPerm State Technical University, \nqualification of engineer builder, \nhigher education'}
                </p>
            </div>
        </div>
    )
}



export default Education;