import React from 'react'
import sections from './directory.data.js'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: sections
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSystemProps}) => (
                        <MenuItem key={id} {...otherSystemProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;