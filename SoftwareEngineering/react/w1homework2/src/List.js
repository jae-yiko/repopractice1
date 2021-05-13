import React, {Component} from 'react'


class List extends Component {
    constructor(){
        super()
        this.state ={
            newItem:'',
            newUnit:'',
            newQuantity:'',
            
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({[name]:value})
    }


    render()
    {
        console.log(this.props.arrayList)
        return(
            <div>
                
                <form onSubmit={(event)=> this.props.handleSubmit(this.state, event)}>
                    <label>
                        Item: <input text="text" placeholder="Item" onChange={this.handleChange} value={this.state.newItem} name ='newItem'/>
                        Units: <input text="text" placeholder="Units" onChange={this.handleChange} value={this.state.newUnit} name ='newUnit'/>
                        Quantity: <input text="text" placeholder="Quantity" onChange={this.handleChange} value={this.state.newQuantity} name ='newQuantity'/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
                
                <ul className="list">
                    {this.props.arrayList.map((val,key)=>{
                        return(
                            <li >
                                <div>{val.item}<br/>{val.units}<br/> {val.quantity}</div><button value={key} onClick={this.props.handlePurchase}>Remove</button>
                            
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List