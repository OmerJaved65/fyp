import React from "react";
import { View, Text, TextInput } from "react-native";

const TextView = () => {
    return (
        <View>
            <TextInput
                placeholder="Enter the Email"
            />
            <TextInput
                placeholder="Enter the Password"
            />    
            </View>
    )
}
export default TextView