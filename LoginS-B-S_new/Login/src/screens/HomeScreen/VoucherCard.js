import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, Button, TouchableOpacity } from "react-native";
import IconLabel from "./Icon";
import {useAuth} from '../../../firebase'

import { useNavigation } from '@react-navigation/native'



const iconColor = '#008000';
const VoucherCard = ({ info }) => {

    const currentUser = useAuth();

    const navigation = useNavigation();

    const onSignInPressed = () => {
        if (currentUser==null) {
            navigation.navigate('SignIn')
        } else {
            alert('idUser: '+currentUser.uid + '\n' + 'email: ' + currentUser.email);
        }
    }
    
    const { Gia, Ten, TrangThai, imgUrl } = info;
    return (
        <TouchableOpacity onPress = {onSignInPressed}>
            <View style={styles.cardContainer}>
                {/* <Image style={styles.imageStyle} source={image} /> */}
                <Text style={{ marginLeft: 10 }}>{info.Ten}</Text>
                <Text style={styles.priceStyle}>{info.Gia}</Text>
                <Text>{info.TrangThai}</Text>
                <IconLabel />
            </View>
        </TouchableOpacity>


    )
};

const radius = 10;
const deviceWith = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWith - 25,
        backgroundColor: `#f5f5f5`,
        height: 210,
        borderRadius: radius,
        shadowColor: `#000000`,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 0.75,
        elevation: 9,
        marginTop: 10
    },
    imageStyle: {
        height: 140,
        width: deviceWith - 25,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800'
    },

    priceStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10

    },
    iconLabelStyle: {
        flexDirection: 'row',
        marginTop: 10
    },



})

export default VoucherCard;