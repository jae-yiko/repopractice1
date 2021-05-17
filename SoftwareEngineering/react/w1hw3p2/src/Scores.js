import React, {Component} from 'react'

// makes the original score 0
window.score= 0

class Scores extends Component {
    constructor(props)//pulling from jep
    {
        super(props)//pulling from react library

    }

    // using line 3 to add score
    increaseB (){
        window.score= window.score+1
        console.log(window.score)
        // displays the score on browser along with line 41
        document.getElementById("showScore").innerHTML = window.score
    }

    // using line 3 to deduct score
    decreaseB(){
        window.score= window.score-1
        console.log(window.score)
        // displays the score on browser along with line 41
        document.getElementById("showScore").innerHTML = window.score
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
                        {window.score}
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
