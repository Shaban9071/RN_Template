import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { ScrollViews } from "../../components"
import { appImages, colors, responsiveHeight, responsiveWidth } from '../../services';
import Wrapper from '../wrapper';




const AuthLayout = ({ children }) => {
  return (
    <Wrapper style={styles.mainContainer}>

      <ScrollViews.KeyboardAvoiding>
        <ImageBackground
          source={appImages.bgImage}
          resizeMode="cover"

        > 
        <Wrapper style={styles.centerWrapper}>
          <Wrapper style={styles.glassCard}>
            {children}
          </Wrapper>
        </Wrapper>
      </ImageBackground>
    </ScrollViews.KeyboardAvoiding>
      
    </Wrapper >
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.black
  },
  centerWrapper: {
    minHeight: responsiveHeight(100),
    justifyContent: 'center',
    alignItems: 'center',

  },
  glassCard: {
    width: responsiveWidth(92),
    paddingVertical: responsiveHeight(2),
    backgroundColor: colors.appBgColor8,
    borderRadius: responsiveHeight(3),
    borderWidth: responsiveWidth(.2),
    borderColor: colors.appBgColor7

  },
});

export default AuthLayout;