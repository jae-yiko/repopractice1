import React, {Component} from 'react'

class Scores extends Component {
    constructor(props)//pulling from jep
    {
        super(props)//pulling from react library
        this.state = 
        {
            score:0
        }
        this.increaseB = this.increaseB.bind(this)
        this.decreaseB = this.decreaseB.bind(this)
    }

    // using line 9 as the original score
    increaseB (){
        this.setState ({
            score: this.state.score + 1
        })
        console.log(this.state.score)
    }

    // using line 9 as the original score
    decreaseB(){
        this.setState ({
            score: this.state.score - 1
        })
        console.log(this.state.score)
    }

    render()
    {
        return (
            <div className = "scoreAndB" >
                {/* gives the increase button the increase method from line 14*/}
                <div>
                    <h2>
                        <button id="increase" onClick={this.increaseB} >Increase</button>
                    </h2>
                </div>

                {/* makes the score show up on the browser along with lines 18 and 26 */}
                <div id="showScore">
                    <h2>
                        {this.state.score}
                    </h2>
                </div>

                {/* gives the decrease button the decrease method from line 22 */}
                <div>
                    <h2>
                        <button id="decrease" onClick={this.decreaseB}>Decrease</button>
                    </h2>
                </div>
            </div>
        )
    }
}

export default Scores
