
import React, {Component} from 'react'
import List from './List'

class GroceriesList extends Component {
    constructor(){
        super()
        this.state ={
            list:
            [
                {
                    item: 'Corona',
                    units: '12 pack',
                    quantity: 1,
                    isPurchase:false
                },
                {
                    item: 'Mozzarella',
                    units: '2 pack',
                    quantity: 1,
                    isPurchase:false
                },
                {
                    item: 'Poland Spring Bottle',
                    units: '24 pack',
                    quantity: 1,
                    isPurchase:false
                }
            ]
        }
        this.handlePurchase = this.handlePurchase.bind(this)
    }
    


    handleSubmit = (listState, event) => {
        alert("Added to your grocery list!")
        event.preventDefault()
        let newItem = listState.newItem
        let newUnit = listState.newUnit
        let newQuantity = parseInt(listState.newQuantity)
        let isPurchase = false
        let obj = {item:newItem,units:newUnit,quantity:newQuantity,isPurchase}
        let array = this.state.list.slice()// copys the obj
        array.push(obj)
        this.setState({list:array})
    }

    handlePurchase = (event) =>{
        var keynum = event.target.getAttribute("value")//knowing what index it is by using key
        console.log(keynum)
        var keyval = this.state.list[keynum].isPurchase//is just getting the data of that specific isPurchase property
        
        if(keyval == "true")
        {
            this.state.list[keynum].isPurchase = 'false'
            event.target.innerText = 'Remove'            
        }
        else
        {
            this.state.list[keynum].isPurchase = 'true'
            event.target.innerText = 'Add'
        }
        console.log(this.state.list[keynum])

    }

    handleRemove = () =>{
        var removeIndex = this.state.list.map('');
        this.state.list.splice(removeIndex)
    }

    render(){
        return(
            <div>
                <List handleSubmit = {this.handleSubmit} 
                    arrayList = {this.state.list}
                    handlePurchase = {this.handlePurchase}
                    handleRemove = {this.handleRemove}
                />
                
            </div>
        )
    }
}
export default GroceriesList