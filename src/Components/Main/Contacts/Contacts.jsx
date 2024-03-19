import React from 'react';
import {SettingsContext} from '../../App';






function Contacts() {
    const settings = React.useContext(SettingsContext);

    const contacts = [
        {icon: 'icon-location', value: `${settings.ruLanguage ? 'место нахождения: г. Пермь' : 'location: Perm'}`},
        {icon: 'icon-phone', value: '+7 (912) 88-192-85'},
        {icon: 'icon-email', value: 't9128819285@gmail.com'},
        {icon: 'icon-telegram', value: '@Leenete'}
        
    ]

    return (
        <div className='home'>
            <h1 className='h h1'>{settings.ruLanguage ? 'КОНТАКТЫ' : 'CONTACTS'}</h1>
            <div className='wrapperInfo'>
                <table>
                    <tbody>
                        {contacts.map(item => {
                            return (
                                <tr key={item.value} className='tr'>
                                    <td className={`td ${item.icon}`}></td>
                                    <td className='td'>{item.value}</td>
                                </tr>
                            )
                        })}
                        {/* <tr>
                            <td className='icon-location'></td>
                            <td>{settings.ruLanguage ? 'место нахождения: г. Пермь' : 'location: Perm'}</td>
                        </tr>
                        <tr>
                            <td className='icon-phone'></td>
                            <td>+7 (912) 88-192-85</td>
                        </tr>
                        <tr>
                            <td className='icon-email'></td>
                            <td>t9128819285@gmail.com</td>
                        </tr>
                        <tr>
                            <td className='icon-telegram'></td>
                            <td>@Leenete</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}



export default Contacts;