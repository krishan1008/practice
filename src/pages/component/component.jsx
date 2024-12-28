import { Text, View } from "react-native"
import React from "react"
import UserData from "./component2"
const Component = ()=>{

    return (

<View>
<UserData/>

<Text style={{fontSize : 30}}>component</Text>
<User/>
</View>

    )
}

const User = ()=>{
    return (

        <View>
<Text style={{fontSize : 20}}>Name : anil</Text>
<Text style={{fontSize : 20}}>age : 30</Text>

<CompanyData/>
        </View>
    )
}

const CompanyData = ()=>{
    return (

        <View>
            <Text style={{fontSize : 20}}>Name :acil</Text>
            <Text style={{fontSize : 20}}>product : abc</Text>
            

        </View>
    )
}

export default Component