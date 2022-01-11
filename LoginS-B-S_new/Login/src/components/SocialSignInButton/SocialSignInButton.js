import React from 'react'
import CustomButton from '../CustomButton'
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import { useNavigation } from '@react-navigation/native'
import { useAuth, loginFacebook} from '../../../firebase'


const SocialSignInButton = () => {

  const navigation = useNavigation();
  const currentUser = useAuth();
  
  async function loginFacebook() {
    try {
      await Facebook.initializeAsync({
        appId: '618739862646321',
      });
        const {
          type,
          token
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });
        if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);
        alert(`Hi ${(await response.json()).id}!`);
        setTimeout(() => navigation.navigate('Home'),1000);
      } else {
        // type === 'cancel'
      }
    } catch (error) {
      alert(error);
    }
  }

  async function loginwithfb(){
   await loginFacebook();
  }

  const handelGoogleSignin = () => {
    const config = {
      iosClientId: `758046595510-kid1ctdmslbab5bb467tvvaqa7no36mv.apps.googleusercontent.com`,
      androidClientId: `758046595510-p58qk589m4a9k4jtfl6fruf4tfeufcib.apps.googleusercontent.com`,
      scopes: ['profile', 'email']
    };
    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type == 'success') {
          const { email, name, photoUrl } = user;
          alert(name, 'SUCCESS');
          setTimeout(() => navigation.navigate('Home', {email, name, photoUrl}),1000);
        } else {
          alert('Google signin was canceled!');
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      })
  };

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={loginwithfb}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={handelGoogleSignin}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
    </>
  )
}

export default SocialSignInButton
