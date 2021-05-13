
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
                    isPurchase:false,
                    id:0//giving each object in this array its own unique id
                },
                {
                    item: 'Mozzarella',
                    units: '2 pack',
                    quantity: 1,
                    isPurchase:false,
                    id:1
                },
                {
                    item: 'Poland Spring Bottle',
                    units: '24 pack',
                    quantity: 1,
                    isPurchase:false,
                    id:2
                }

            ]
        }
        this.handlePurchase = this.handlePurchase.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }
    


    handleSubmit = (listState, event) => {
        alert("Added to your grocery list!")
        event.preventDefault()
        //we are creating new variables 
        let newItem = listState.newItem
        let newUnit = listState.newUnit
        let newQuantity = parseInt(listState.newQuantity)
        let isPurchase = false
        //
        let obj = {item:newItem,units:newUnit,quantity:newQuantity,isPurchase, id:this.state.list.length}
        let array = this.state.list.slice()// copys the entire array. it does not mutate the original array
        array.push(obj)
        this.setState({list:array})
    }

    handlePurchase = (event) =>{
        console.log(keynum)
        var array1 = this.state.list.slice()
        //item below is to represent the current propertiy and id is the object
        //==is comparing
        var keynum = array1.findIndex((item) => item.id == event.target.value ? true:false)//knowing what index it is by using key
        array1[keynum].isPurchase =  !array1[keynum].isPurchase
        this.setState({list: array1})

    }

    handleRemove = (event) =>{
        var keynum = event.target.getAttribute("value")
        var currentList = this.state.list.slice()

        var spliceit = currentList.splice(keynum, 1)//1 is more the amount of items in the array that we want to remove
        console.log(spliceit)
        // this.state.list.splice(removeIndex)
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