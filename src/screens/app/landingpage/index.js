import React from "react";
import { ImageBackground, View } from "react-native"
import { appImages, colors } from "../../../services";
import { Wrapper } from "../../../components";


export default function index({ }) {
    return (

   <Wrapper flex={1} style={{ backgroundColor: colors.black }}>
          <ImageBackground
            source={appImages.landingImage}
            resizeMode="cover"
            style={{flex:1}}
        >
            
        </ImageBackground>
   </Wrapper>

    )


}

