import React from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import CustomInput from '../../components/CustomInput'
import { logout} from '../../../firebase'

const Header = ({ label }) => {

    async function handleLogout() {
        try {
            await logout();
        } catch {
            alert("Erro");
        }

    }

    console.log(label);
    return (
        <View style={styles.container}>
            <Text style={styles.labelStyle}>{label}</Text>
            <CustomInput style={styles.input}
                placeholder="Tìm kiếm"
            />
            <Button
                onPress={handleLogout}
                title="LogOut"
                color="#841584"
                accessibilityLabel="Learn more about this purple button."
            />
        </View>
    )
};

const deviceWith = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    container: {
        width: deviceWith,
        height: 90,
        backgroundColor: '#ff4500',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: "flex-end",
        paddingBottom: 20, 
        marginVertical: 40,

    },
    labelStyle: {
        fontSize: 24,
        fontWeight: '700'
    },
    input: {
        width: deviceWith - 50,
        height: 90,
    }
});
export default Header;