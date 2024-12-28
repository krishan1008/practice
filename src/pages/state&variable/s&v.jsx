import React, { useState } from "react"
import {View,Text,Button} from 'react-native'

const Data = ()=>{

const [name,setName] = useState("anil")

let  number = 'rohit'

// diffrence between state and variable  state are change value because state change component rerender but variable value change component not rerender
const changename =()=>{
    setName('rahul')
    number = 'mohit'
}





return (

<View>
    <Text style={{fontSize:30}}>{name}</Text>
    <Text style={{fontSize:30}}>{number}</Text>
    <Button title="update name"  color={'red'} onPress={changename} />
</View>

)
}
export default Data