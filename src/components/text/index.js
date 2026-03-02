import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { appStyles, } from '../../services';

export default function ({
    style,
    children,
    isXXLTitle,
    isXLTitle,
    isLargeTitle,
    isMediumTitle,
    isSmallTitle,
    isTinyTitle,
    isLarge,
    isMedium,
    isRegular,
    isSmall,
    isTiny,
    isXTiny,
    isInputTitle,
    isButtonRegular,
    isButtonMedium,
    isButtonLarge,
    //light Text
    islightTextTiny,
    islightTextSmall,
    islightTextReg,
    islightTextMed,
    //Regular Text
    isRegTextTiny,
    isRegTextSmall,
    isRegTextReg,
    isRegTextMed,
    isRegTextH1,
    isRegTextH2,
    isRegTextH3,
    isRegTextH4,
    isRegTextH5,
    isRegTextH6,
    //Med Text
    isMedTextTiny,
    isMedTextSmall,
    isMedTextReg,
    isMedTextMed,
    isMedTextH1,
    isMedTextH2,
    isMedTextH3,
    isMedTextH4,
    isMedTextH5,
    isMedTextH6,
    //Semi-Bold Text
    isSemiTextTiny,
    isSemiTextSmall,
    isSemiTextReg,
    isSemiTextMed,
    isSemiTextH1,
    isSemiTextH2,
    isSemiTextH3,
    isSemiTextH4,
    isSemiTextH5,
    isSemiTextH6,

    //Bold Text
    isBoldTextTiny,
    isBoldTextSmall,
    isBoldTextReg,
    isBoldTextMed,
    isBoldTextH1,
    isBoldTextH2,
    isBoldTextH3,
    isBoldTextH4,
    isBoldTextH5,
    isBoldTextH6,



    //align text
    alignTextCenter,
    alignTextRight,
    //colors
    isTextColor2,
    isDarkGray,
    isGray,
    isLightGray,
    isWhite,
    isPrimaryColor,
    isSecondaryColor,
    isForthColor,
    //others
    isUnderlined,
    isBoldFont,
    isMediumFont,
    isRegularFont,
    isLightFont,
    ...props }) {
    return (
        <Text
            style={[
                //titles
                isXXLTitle && styles.xxlTitleStyle,
                isXLTitle && styles.xlTitleStyle,
                isLargeTitle && styles.largeTitleStyle,
                isMediumTitle && styles.mediumTitleStyle,
                isSmallTitle && styles.smallTitleStyle,
                isTinyTitle && styles.tinyTitleStyle,
                //normal text
                isLarge && styles.largeTextStyle,
                isMedium && styles.mediumTextStyle,
                isRegular && styles.regularTextStyle,
                isSmall && styles.smallTextStyle,
                isTiny && styles.tinyTextStyle,
                isXTiny && appStyles.xTinyText,

                //light Text
                islightTextTiny && appStyles.lightTextTiny,
                islightTextSmall && appStyles.lightTextSmall,
                islightTextReg && appStyles.lightTextRegular,
                islightTextMed && appStyles.lightTextMedium,
                //Regular Text
                isRegTextTiny && appStyles.regTextTiny,
                isRegTextSmall && appStyles.regTextSmall,
                isRegTextReg && appStyles.regTextRegular,
                isRegTextMed && appStyles.regTextMedium,
                isRegTextH1 && appStyles.regTextH1,
                isRegTextH2 && appStyles.regTextH2,
                isRegTextH3 && appStyles.regTextH3,
                isRegTextH4 && appStyles.regTextH4,
                isRegTextH5 && appStyles.regTextH5,
                isRegTextH6 && appStyles.regTextH6,
                //Regular Text
                isMedTextTiny && appStyles.medTextTiny,
                isMedTextSmall && appStyles.medTextSmall,
                isMedTextReg && appStyles.medTextRegular,
                isMedTextMed && appStyles.medTextMedium,
                isMedTextH1 && appStyles.medTextH1,
                isMedTextH2 && appStyles.medTextH2,
                isMedTextH3 && appStyles.medTextH3,
                isMedTextH4 && appStyles.medTextH4,
                isMedTextH5 && appStyles.medTextH5,
                isMedTextH6 && appStyles.medTextH6,
                //Semi-Bold Text
                isSemiTextTiny && appStyles.semiTextTiny,
                isSemiTextSmall && appStyles.semiTextSmall,
                isSemiTextReg && appStyles.semiTextRegular,
                isSemiTextMed && appStyles.semiTextMedium,
                isSemiTextH1 && appStyles.semiTextH1,
                isSemiTextH2 && appStyles.semiTextH2,
                isSemiTextH3 && appStyles.semiTextH3,
                isSemiTextH4 && appStyles.semiTextH4,
                isSemiTextH5 && appStyles.semiTextH5,
                isSemiTextH6 && appStyles.semiTextH6,
                //Bold Text
                isBoldTextTiny && appStyles.boldTextTiny,
                isBoldTextSmall && appStyles.boldTextSmall,
                isBoldTextReg && appStyles.boldTextRegular,
                isBoldTextMed && appStyles.boldTextMedium,
                isBoldTextH1 && appStyles.boldTextH1,
                isBoldTextH2 && appStyles.boldTextH2,
                isBoldTextH3 && appStyles.boldTextH3,
                isBoldTextH4 && appStyles.boldTextH4,
                isBoldTextH5 && appStyles.boldTextH5,
                isBoldTextH6 && appStyles.boldTexth6,




                isInputTitle && styles.inputTitleStyle,
                isButtonRegular && styles.ButtonTextRegularStyle,
                isButtonMedium && styles.ButtonTextMediumStyle,
                isButtonLarge && appStyles.ButtonTextLarge,
                //align text
                alignTextCenter && appStyles.textCenter,
                alignTextRight && appStyles.alignTextRight,
                //text colors
                isTextColor2 && appStyles.textColor2,
                isDarkGray && appStyles.textDarkGray,
                isGray && appStyles.textGray,
                isLightGray && appStyles.textLightGray,
                isWhite && appStyles.textWhite,
                isPrimaryColor && appStyles.textPrimaryColor,
                isSecondaryColor && appStyles.textSecondaryColor,
                isForthColor && appStyles.textForthColor,

                //others
                isUnderlined && appStyles.textUnderlined,
                isBoldFont && appStyles.fontBold,
                isMediumFont && appStyles.fontMedium,
                isRegularFont && appStyles.fontRegular,
                isLightFont && appStyles.fontLight,
                style,]}
            {...props}
        >
            {children}
        </Text>
    );
}




const styles = StyleSheet.create({
    xxlTitleStyle: {
        ...appStyles.h1
    },
    xlTitleStyle: {
        ...appStyles.h2
    },
    largeTitleStyle: {
        ...appStyles.h3
    },
    mediumTitleStyle: {
        ...appStyles.h4
    },
    smallTitleStyle: {
        ...appStyles.h5
    },
    tinyTitleStyle: {
        ...appStyles.h6,
    },
    largeTextStyle: {
        ...appStyles.textLarge
    },
    mediumTextStyle: {
        ...appStyles.textMedium
    },
    regularTextStyle: {
        ...appStyles.textRegular
    },
    smallTextStyle: {
        ...appStyles.textSmall
    },
    tinyTextStyle: {
        ...appStyles.textTiny
    },
    inputTitleStyle: {
        ...appStyles.medTextSmall
        //...appStyles.tex
    },
    ButtonTextRegularStyle: {
        ...appStyles.ButtonRegular,
    },
    ButtonTextMediumStyle: {
        ...appStyles.ButtonMedium,
    },

});

