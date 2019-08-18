import React from 'react'
import SHOP_DATA from './shop.data.js'
import PreviewCollection from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor() {
        // call super class constructor
        super()
        this.state = {
            collections: SHOP_DATA
        }

    }

    render() {
        return (
            <React.Fragment>
                <h1>Collections</h1>
                {
                    this.state.collections.map(({id, ...otherCollectionProps}) => (
                            <PreviewCollection key={id} {...otherCollectionProps} />
                        )
                    )
                }
            </React.Fragment>
        )
    }
    
}

export default ShopPage