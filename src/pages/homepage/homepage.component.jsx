import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'

const HomePage = ({history, match}) => {
    return (<div className='homepage'>
        <Directory history={history}/>
    </div>

)}

export default HomePage;