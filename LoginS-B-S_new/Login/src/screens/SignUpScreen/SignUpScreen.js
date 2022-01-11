import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Alert
} from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton'
import { useNavigation } from '@react-navigation/native'
import { signupUser, useAuth, logout, AddUser, readData, auth } from '../../../firebase'
import { COLORS } from '../../constants/theme'
import { authen } from '../../firebase/firebaes-config';
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signInWithCredential,
    GoogleAuthProvider,
    FacebookAuthProvider,
    getRedirectResult,
} from 'firebase/auth';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const currentUser = useAuth();

    const handleSignUp = () => {
        if(email != '' && password !='' && passwordRepeat !=''){
            if(password == passwordRepeat){
                try {
                    createUserWithEmailAndPassword(auth, email, password);
                    alert(email);
                    // AddUser(username, email, '');
                } catch (error) {
                    alert(error);
                }
            }else{
                Alert.alert('password did not macth')
            }
        }
       
    }

    async function handleLogout() {
        try {
            await logout();
        } catch {
            alert("Erro");
        }

    }

    const navigation = useNavigation();


    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail')
    }
    const onSignInPressed = () => {
        navigation.navigate('SignIn')
    }
    const onTermsOfUsePressed = () => {

    }
    const onPrivacyPressed = () => {

    }
    return (
        <SafeAreaView
            style={styles.root}>
            {/* Header */}
            <Text style={styles.title}>Create an account</Text>
            {/* Email */}
            <CustomInput
                placeholder="Email"
                value={email}
                setvalue={setEmail}
            />
            {/* Password */}

            <CustomInput
                placeholder="Password"
                value={password}
                setvalue={setPassword}
                secureTextEntry={true}
            />

            <CustomInput
                placeholder="Repeat Password"
                value={passwordRepeat}
                setvalue={setPasswordRepeat}
                secureTextEntry={true}
            />
            {/* Submitbutton */}
            <CustomButton text="Register" onPress={handleSignUp} />
            {/* Footer */}
            <Text style={styles.text}>By registering, you confirm that you accept our
                <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and
                <Text style={styles.link} onPress={onPrivacyPressed}> Privacy Policy</Text>
            </Text>

            <SocialSignInButton />

            <CustomButton
                text="Have an account? Sign In"
                onPress={onSignInPressed}
                type="TERTIARY"
            />
            <CustomButton
                text="Logout"
                onPress={handleLogout}
                type="TERTIARY"
            />

        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB875',
    },
});

export default SignUpScreen