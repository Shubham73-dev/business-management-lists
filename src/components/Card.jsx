import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Card = ({ data }) => {
    return (
        <div className='card'>
                    <div className="slugsContainer">
                        <div className="slug_left">
                            <h5>{data.name}</h5>
                            <span>{data.no_of_doc} documents</span>
                        </div>
                        <div className="slug_right"><ArrowRightAltIcon /></div>
                    </div>
        </div>
    )
}

export default Card