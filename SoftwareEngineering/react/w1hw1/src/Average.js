import React from 'react'

const Average = (props) => {
    return (
        <div >
            <div>
                <h3>Average Rating</h3>
                {props.ratingNum}
            </div>
        </div>
    )
}

export default Average
