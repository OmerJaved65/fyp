import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import TextView from '../../Components/TextBox/TextBox';

class Login extends Component {
    render() {
        return (
            <View>

                {/* <TextView/> */}
                <TextView />
                <Button
                    title="SignUp"
                    onPress={() => this.props.navigation.navigate('Signup')}
                >

                </Button>
            </View>
        )
    }
}
export default Login;