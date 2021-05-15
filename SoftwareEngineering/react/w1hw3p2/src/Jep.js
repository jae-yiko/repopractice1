import React, {Component} from 'react'
import Scores from './Scores'
import Answer from './Answer'

class Jep extends Component{
    constructor()
    {
        super()
        this.state = {
            question:"",
            answer:"",
            category:"",
            value: ""
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount()
    {//await fetch is used because await keyword is present, the asynchronous function is paused until the request completes
        //when request completes, response is assigned with the response object of the reuquest
        fetch("http://jservice.io/api/random")
            .then((dataset) => dataset.json())
            .then(triviaData => {
                this.setState({ question: triviaData[0].question})
                this.setState({ answer: triviaData[0].answer})
                this.setState({ category: triviaData[0].category.title})
        
    })
    }

    render()
    {
        return (
            <div>
                <button onClick={this.componentDidMount}>Get Question</button>
                <div>
                    <h3>Category: {this.state.category}</h3>
                </div>
                <div>
                    <h3>Question: {this.state.question}</h3>
                </div>
                <Scores/>
                <Answer answer1 = {this.state.answer}/>
            </div>

        )
    }
}

export default Jep
