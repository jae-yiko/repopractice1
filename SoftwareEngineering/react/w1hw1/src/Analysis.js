import React from 'react'

const Analysis = (props) => {
    return (
        <div >
            <div>
                <h3>Sentiment Analysis</h3>
                {props.analysisNum}<br/>
                {props.analysisNum1}<br/>
                {props.analysisNum2}<br/>

            </div>
        </div>
    )
}

export default Analysis
