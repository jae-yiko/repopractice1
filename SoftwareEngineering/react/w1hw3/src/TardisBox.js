import React, {Component} from 'react'
//component is used so that we can use states
//we can use functions instead of classes but in this examples we are using functions
//if I wanted to use functions instead of classes I would need to use useState from the react library instead of component from the react library
//line below is connecting the component from the react library to our line 5
class TardisBox1 extends Component {
    //class TardisBox1 is inheriting from component react library
    constructor(props)
    {
        super(props);
        //line above is needed because we are using inheritence in line 6
                this.state = //here we are declaring/initializing the state object
                {//everything in tardis is JSON (recall the API hw where you pulled complaints and police response. that is what we are doing here!)
                    tardis: {//this is object tardis that has two properties (name and caps) and the values are ("Time an.." and false)
                        name: 'Time and Relative Dimension in Space',
                        caps: false,
                      }
                };
                this.changeIt1 = this.changeIt.bind(this);
                //line above is binding the method changeIt to the "this instance"= this.changeIt1 referring to the this instance of the object tardis in line 14
    };

    changeIt = () =>{
        //the if statement below in line 25 is saying if this.state in .tardis .caps is true then go to lines 26-30 to check to see if the initial caps is true.
        //if the initial caps is false then in the if statement it will move down to the else part of the if statement in line 35
        if (this.state.tardis.caps) {
          this.setState({
            tardis: 
            {
              name: this.state.tardis.name.toLowerCase(),
              caps: false,
            }
          });
          //once it is clicked and the string is all uppercased the .tardis.caps is now turned into true so when you click when the string that is all uppercased it will go back to the 
          //if statement, to check to see if the .tardis.caps is true which it will be and then it will make everything lowercase and make the caps back to false
        } else {
          this.setState({
            tardis: {
              name: this.state.tardis.name.toUpperCase(),
              caps: true,
            }
          });
        }
      };

    render()
    {
        return(
            //the onclick is referring to line 19 
            //every time I click, the changeIt1 will direct it to the changeIt method in line 23
            <div onClick = {this.changeIt1}>
                <h3>{this.state.tardis.name}</h3>
                {/* code above is saying this.state referring to line 7 .tardis is from line 9 and .name is from line 10
                this basically like an instruction on how to find what you want to change when its clicked */}
            </div>

        );
    }
}

export default TardisBox1
