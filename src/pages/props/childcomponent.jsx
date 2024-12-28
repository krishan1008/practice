

import React from "react"
import {View,Text} from 'react-native'

const ChildComponent = (props)=>{

    
    return (
<View style={{backgroundColor:'green',padding:5}}>
    <Text style={{fontSize:30}}>{props.name}</Text>
    <Text style={{fontSize:30}}>{props.age}</Text>
</View>

    )
}
export default ChildComponent