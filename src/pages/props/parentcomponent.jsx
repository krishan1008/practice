import React, { useState } from "react"
import { View, Text, Button } from 'react-native'
import ChildComponent from "./childcomponent"

const ParentComponent = () => {

    let name = 'anil'
    const [data, setData] = useState('sumit')

    ""




    return (
        <View style={{ padding: 5 }}>

            <Text style={{ fontSize: 30 }}>parentcomponent in react native</Text>

            {/* <ChildComponent name = {name}/> */}
            <ChildComponent name={data} age={25} />
            <Button title="update props" onPress={() => setData('mohit')} />
        </View>

    )
}
export default ParentComponent