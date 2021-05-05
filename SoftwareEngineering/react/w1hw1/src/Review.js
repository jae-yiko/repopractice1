import React from 'react'

const Review = (props) => {
    return (
        <div >
            <div>
                <h3>Reviews</h3>
                {props.reviewNum}
            </div>
        </div>
    )
}

export default Review
