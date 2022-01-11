import React from 'react'
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native'

const CustomInput = ({value, setvalue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
            value={value}
            onChangeText={setvalue} 
            placeholder = {placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            native:{
                backgroundColor: 'white',
                width: '100%',
                marginVertical: 5,
            },
            default: {
                backgroundColor: 'white',
                width: '60%',
                paddingHorizontal: 10,
                marginVertical: 5,
            }
          })
       
    },
    input: {
        ...Platform.select({
            native:{
                borderRadius: 5,
                borderWidth: 1,
                padding: 8,
            },
            default: {
                borderRadius: 5,
                borderWidth: 1,
                padding: 8,
            }
          })
    },
})

export default CustomInput
