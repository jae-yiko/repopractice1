import React, {Component} from 'react'
import Jep from './Jep'
import './App.css'


class Answer extends Component {
    constructor()
    {
        super()


        this.showAnswer = this.showAnswer.bind(this)
    }
// showAnswer is how to toggle the answer to show up 
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
            <div className="answershowit">
                <div><button id="Answer" onClick = {this.showAnswer}>Answer</button></div>

                <div className="answer2">{this.props.answer1} </div>
            </div>
        )
    }
}
export default Answer
