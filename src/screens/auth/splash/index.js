import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Wrapper, Text, Logos } from '../../../components';
import { appFonts, appImages, colors, fontSizes, responsiveHeight, responsiveWidth, routes, useReduxStore } from '../../../services';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

function Splash() {

  const [showSecondPart, setShowSecondPart] = useState(false);
  const { isLoggedIn, signedInUser } = useReduxStore();
  const navigation = useNavigation();

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const user = auth().currentUser; // Humne iska naam 'user' rakha hai

        if (user) {
          // 2. Firestore mein check karo
          const userDoc = await firestore().collection('users').doc(user.uid).get();

          // Debugging ke liye consoles
          console.log("---------- VALIDATION ----------");
          console.log("Auth User:", !!user);
          console.log("Redux LoggedIn:", isLoggedIn);
          console.log("Firestore Doc:", userDoc.exists);

          // 3. Agar Firestore mein user hai AUR Redux mein login true hai
          if (userDoc.exists() && isLoggedIn && signedInUser) {
            console.log("✅ Sab theek hai. Going to APP.");
         navigation.replace(routes.app);
          } else {
            console.log("❌ Data missing. Going to AUTH.");
            navigation.replace(routes.auth);
          }
        } else {
          // Agar Firebase Auth mein hi user nahi hai
          console.log("❌ No Auth User. Going to AUTH.");
          navigation.replace(routes.auth);
        }
      } catch (error) {
        console.log("Splash Error:", error);
        navigation.replace(routes.auth);
      }
    };

    const timer = setTimeout(() => {
      checkUserStatus();
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoggedIn, signedInUser]); // Dependency sahi kar di

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSecondPart(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper isMain isCenter style={{ backgroundColor: colors.black }}>
      {!showSecondPart && (
        <Wrapper animation={'slideInLeft'}>
          <Logos.Primary />
        </Wrapper>
      )}
      {showSecondPart && (
        <ImageBackground
          source={appImages.splash2image}
          resizeMode="cover"
        >
          <Wrapper justifyContentFlexend style={{ flex: 1 }}>

            <Wrapper animation={'fadeIn'} marginHorizontalBase paddingVerticalMedium>
              <Text
                isSemiTextH2
              >
                Join Us & Experience Innovation Like Never Before.
              </Text>
            </Wrapper>
          </Wrapper>
        </ImageBackground>
      )}

    </Wrapper>
  );
}

export default Splash;