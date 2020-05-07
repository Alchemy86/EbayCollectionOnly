import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const EbayItems = ({items}) => {
    return (
        <div style={userStyle}>
            {items.map(item => (
                <Item key={item.id} item={item}/>
                ))}
        </div>
    )
}

EbayItems.propTypes = {
    items: PropTypes.array.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(50px 1fr)',
    gridGap: '.5rem',
    width: '100%'
}

export default EbayItems
