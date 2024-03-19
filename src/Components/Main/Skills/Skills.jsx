import React from 'react';
import './Skills.scss';
import {SettingsContext} from '../../App';




function Skills() {
    const settings = React.useContext(SettingsContext);

    return (
        <div className='skills'>
            <h1 className='h h1 hSkills'>{settings.ruLanguage ? 'НАВЫКИ' : 'SKILLS'}</h1>
            <div className='wrapperInfo wrapperInfoSkills'>
                <div className='grid'>
                    <div className='itemGrid'><i class="iconGrid icon-html5"/></div>
                    <div className='itemGrid'><i class="iconGrid icon-css3"/></div>
                    <div className='itemGrid'><i class="iconGrid icon-js"/></div>
                    <div className='itemGrid'><i class="iconGrid icon-react"/></div>
                    <div className='itemGrid'><i class="iconGrid icon-redux"/></div>
                    <div className='itemGrid'><i class="iconGrid icon-vue"/></div>
                    <div className='itemGrid'><i class="iconGrid icon-sass"/></div>
                    <div className='itemGrid'><i class="iconGrid icon-figma"/></div>
                    <div className='itemGrid'><i class="iconGrid icon-git"/></div>
                    {/* <div className='itemGrid'><i class="iconGrid icon-github"/></div> */}
                </div>
            </div>
        </div>
    )
}



export default Skills;