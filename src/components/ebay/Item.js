import React from 'react'

const Item = ({ item: { title, image, url, endsString, price }}) => {

    return (
        <div className="border border-secondary">
            <h3>£{price.toFixed(2)}</h3>
            <img
                src={image}
                alt=''
                className='img-thumbnail pull-left mr-2'
                style={{ 
                    height: '100px',
                    minHeight: '118px',
                    width: '100px',
                    marginBottom: '10px'}}
            />
            <div className="text-center">
                <h2>{title}</h2>
                <h5>{endsString}</h5>
                <a href={url} rel="noopener noreferrer" className='btn btn-dark btn-sm my-1 float-right' target='_blank'>
                    More
                </a>
            </div>
        </div>
    )
}

export default Item
