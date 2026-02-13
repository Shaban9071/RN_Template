import React from 'react';
import {  StyleSheet, ImageBackground} from 'react-native';
import { ScrollViews } from  "../../components"
import { appImages, responsiveHeight, responsiveWidth } from '../../services';
import Wrapper from '../wrapper';


 

const AuthLayout = ({ children }) => {
  return (
    <Wrapper style={styles.mainContainer}>
      <ImageBackground 
        source={appImages.bgImage} 
        resizeMode="cover"
      >
        <ScrollViews.KeyboardAvoiding>
          <Wrapper style={styles.centerWrapper}>
            <Wrapper style={styles.glassCard}>
              {children}
            </Wrapper>
          </Wrapper>
        </ScrollViews.KeyboardAvoiding>
      </ImageBackground>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  centerWrapper: {
    minHeight:  responsiveHeight(100),
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  glassCard: {
    width: responsiveWidth(90), 
    paddingVertical: responsiveHeight(2),
    backgroundColor: "#43434326", 
    borderRadius: responsiveHeight(3),
    borderWidth: responsiveWidth(.2),
    borderColor:  "#A0A0A057",
  
  },
});

export default AuthLayout;