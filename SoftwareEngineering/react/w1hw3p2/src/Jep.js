import React, {Component} from 'react'
import Scores from './Scores'
// import Answer from './Answer'

class Jep extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            question:"",
            answer:"",
            category:"",
            tada: false,
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.showAnswer = this.showAnswer.bind(this)
    }

    componentDidMount()
    {//await fetch is used because await keyword is present, the asynchronous function is paused until the request completes
        //when request completes, response is assigned with the response object of the reuquest
        fetch("http://jservice.io/api/random")
            .then((dataset) => dataset.json())
            .then(triviaData => {
                // gets that specific data from fetch linl
                this.setState({ question: triviaData[0].question})
                this.setState({ answer: triviaData[0].answer})
                this.setState({ category: triviaData[0].category.title})
                }
            )
    }

    // contional renders the answer to show and hide
    showAnswer()
    {
        if(this.state.showanswer) {
            this.setState({showanswer:false})
        }
        else{
            
            this.setState({showanswer:true})
        }
    }

    render()
    {
        return (
            <div className="everything">

                {/* where I am storing the image from css */}
                <div className="img"></div>
                <div className="trivaContent">

                    {/* gets a new question without restarting the current score */}
                    <div className="getQbtn">
                        <button className="getQ" onClick={this.componentDidMount}>Get Question</button>
                    </div>

                    {/* shows the category in browser */}
                    <div className="category!">
                        <h3>Category: {this.state.category}</h3>
                    </div>

                    {/* shows the question in browser */}
                    <div className="question!">
                        <h3>Question: {this.state.question}</h3>
                    </div>

                    {/* shows the answer in browser */}
                    <div>
                        <h3> <button onClick={this.showAnswer}>Show Answer</button></h3>
                        {/* hides and shows the answer in the browser */}
                        <div id="answer" className="QA" >{this.state.showanswer? this.state.answer:" "}</div>
                    </div>

                    {/* recieves information on the methods for increase, score, and decrease */}
                    <Scores/>

                    {/* restarts or refreshes the whole browser so the score will also go back to zero */}
                    <div className="resTartbtn">
                        <button className="resTart" onClick={()=> window.location.reload(false)}>Restart</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Jep
