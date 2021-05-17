import React, {Component} from 'react'
import './App.css'


class Answer extends Component {
    constructor()
    {
        super()
        // bind it so it will show on the browser
        this.showAnswer = this.showAnswer.bind(this)
    }

    // showAnswer is how to toggle the answer to show up using css
    showAnswer()
    {
        let showit = document.getElementsByClassName("answer2")[0]
        if(showit.style.display === "block")
        {
            showit.style.display = "none"
        }
        else
        {
            showit.style.display = "block"
        }
    }


    render()
    {
        return (
            // when you click the answer button it will toggle the answer
            <div className="answershowit">
                <div><button id="Answer" onClick = {this.showAnswer}>Answer</button></div>

                {/* this is getting the answer from Jep */}
                <div className="answer2">{this.props.answer1} </div>
            </div>
        )
    }
}

export default Answer
