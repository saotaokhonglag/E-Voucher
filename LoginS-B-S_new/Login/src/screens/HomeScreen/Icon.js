import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Icon } from 'react-native-elements'

const IconLabel = (name,label,color) => {
    return (
        <View style={styles.container}>
            <Icon name="location-outline"
                type="ionicon"
                size={15}
                style={styles.iconStyle}></Icon>
            <Text style={styles.iconLabel}>Đà Nẵng</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    iconLabel: {
        fontSize: 13
    },
    container: {
        flexDirection: 'row',
        marginLeft:10

    },
    iconStyle: {
        marginRight: 2
    }

})
export default IconLabel;