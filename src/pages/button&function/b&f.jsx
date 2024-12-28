
import React from "react"
import { View, Text, Button } from "react-native"
const UserData = () => {


    const Data = () => {
        console.log('apple')
    }


    const User = (val) => {
        console.log(val)
    }

    let number = 10
    const Number = () => {
        number = 20

        console.log(number)



    }






    return (
        <View>

            <Text style={{ fontSize: 30 }}>{number}</Text>
            <Button title="on press" color={'red'} onPress={Data} />
            <Button title="on press" color={'green'} onPress={() => User('hello')} />
            <Button title="on press" color={'black'} onPress={() => Number('hello')} />
            <Button title="on submit" color={'black'}  />
        </View>

    )
}

export default UserData