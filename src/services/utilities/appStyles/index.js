import { StyleSheet } from 'react-native'
import { sizes, fontSizes } from '../sizes'
import { colors } from '../colors'
import { appFonts } from '../assets'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from '../responsive'

export const appStyles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    height: null,
    width: null
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.appBgColor1
  },
  h1: {
    fontSize: fontSizes.h1,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextBold
  },
  h2: {
    fontSize: fontSizes.h2,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextBold
  },
  h3: {
    fontSize: fontSizes.h3,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextBold
  },
  h4: {
    fontSize: fontSizes.h4,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextBold
  },
  h5: {
    fontSize: fontSizes.h5,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextBold
  },
  h6: {
    fontSize: fontSizes.h6,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextBold
  },
  textLarge: {
    fontSize: fontSizes.large,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextRegular
  },
  textMedium: {
    fontSize: fontSizes.medium,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextRegular
  },
  textRegularPlus: {
    fontSize: fontSizes.regular_plus,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextRegular
  },
  textRegular: {
    fontSize: fontSizes.regular,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextRegular
  },
  textSmallPlus: {
    fontSize: fontSizes.small_plus,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextRegular
  },
  textSmall: {
    fontSize: fontSizes.small,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextRegular
  },
  textTiny: {
    fontSize: fontSizes.tiny,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextRegular
  },
  xTinyText: {
    fontSize: fontSizes.xTiny,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextRegular
  },
  xxTinyText: {
    fontSize: fontSizes.xxTiny,
    color: colors.appTextColor1,
    fontFamily: appFonts.appTextRegular
  },
  //Light Text
  lightTextTiny: {
    fontFamily: appFonts.appTextLight,
    fontSize: fontSizes.tiny,
    color: colors.appTextColor1

  },

  lightTextSmall: {
    fontFamily: appFonts.appTextLight,
    fontSize: fontSizes.small,
    color: colors.appTextColor1

  },

  lightTextRegular: {
    fontFamily: appFonts.appTextLight,
    fontSize: fontSizes.regular,
    color: colors.appTextColor1

  },

  lightTextMedium: {
    fontFamily: appFonts.appTextLight,
    fontSize: fontSizes.medium,
    color: colors.appTextColor1

  },

  // Regular Text
  regTextTiny: {
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.tiny,
    color: colors.appTextColor1

  },

  regTextSmall: {
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.small,
    color: colors.appTextColor1

  },

  regTextRegular: {
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.regular,
    color: colors.appTextColor1

  },

  regTextMedium: {
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.medium,
    color: colors.appTextColor1

  },
  regTextH1: {
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.h1,
    color: colors.appTextColor1

  },
  regTextH2: {
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.h2,
    color: colors.appTextColor1

  },
  regTextH3: {
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.h3,
    color: colors.appTextColor1

  },
  regTextH4: {
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.h4,
    color: colors.appTextColor1

  },
  regTextH5: {
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.h5,
    color: colors.appTextColor1

  },
  regTextH6: {
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.h6,
    color: colors.appTextColor1

  },
  //Medium Text
  medTextTiny: {
    fontFamily: appFonts.appTextMedium,
    fontSize: fontSizes.tiny,
    color: colors.appTextColor1

  },

  medTextSmall: {
    fontFamily: appFonts.appTextMedium,
    fontSize: fontSizes.small,
    color: colors.appTextColor1

  },

  medTextRegular: {
    fontFamily: appFonts.appTextMedium,
    fontSize: fontSizes.regular,
    color: colors.appTextColor1

  },

  medTextMedium: {
    fontFamily: appFonts.appTextMedium,
    fontSize: fontSizes.medium,
    color: colors.appTextColor1

  },
  medTextH1: {
    fontFamily: appFonts.appTextMedium,
    fontSize: fontSizes.h1,
    color: colors.appTextColor1

  },
  medTextH2: {
    fontFamily: appFonts.appTextMedium,
    fontSize: fontSizes.h2,
    color: colors.appTextColor1

  },
  medTextH3: {
    fontFamily: appFonts.appTextMedium,
    fontSize: fontSizes.h3,
    color: colors.appTextColor1

  },
  medTextH4: {
    fontFamily: appFonts.appTextMedium,
    fontSize: fontSizes.h4,
    color: colors.appTextColor1

  },
  medTextH5: {
    fontFamily: appFonts.appTextMedium,
    fontSize: fontSizes.h5,
    color: colors.appTextColor1

  },
  medTextH6: {
    fontFamily: appFonts.appTextMedium,
    fontSize: fontSizes.h6,
    color: colors.appTextColor1

  },
  //Semi Bold
  semiTextTiny: {
    fontFamily: appFonts.appTextSemiBold,
    fontSize: fontSizes.tiny,
    color: colors.appTextColor1

  },

  semiTextSmall: {
    fontFamily: appFonts.appTextSemiBold,
    fontSize: fontSizes.small,
    color: colors.appTextColor1

  },

  semiTextRegular: {
    fontFamily: appFonts.appTextSemiBold,
    fontSize: fontSizes.regular,
    color: colors.appTextColor1

  },

  semiTextMedium: {
    fontFamily: appFonts.appTextSemiBold,
    fontSize: fontSizes.medium,
    color: colors.appTextColor1

  },
  semiTextH1: {
    fontFamily: appFonts.appTextSemiBold,
    fontSize: fontSizes.h1,
    color: colors.appTextColor1

  },
  semiTextH2: {
    fontFamily: appFonts.appTextSemiBold,
    fontSize: fontSizes.h2,
    color: colors.appTextColor1

  },
  semiTextH3: {
    fontFamily: appFonts.appTextSemiBold,
    fontSize: fontSizes.h3,
    color: colors.appTextColor1

  },
  semiTextH4: {
    fontFamily: appFonts.appTextSemiBold,
    fontSize: fontSizes.h4,
    color: colors.appTextColor1

  },
  semiTextH5: {
    fontFamily: appFonts.appTextSemiBold,
    fontSize: fontSizes.h5,
    color: colors.appTextColor1

  },
  semiTextH6: {
    fontFamily: appFonts.appTextSemiBold,
    fontSize: fontSizes.h6,
    color: colors.appTextColor1

  },
  //Bold Text
  boldTextTiny: {
    fontFamily: appFonts.appTextBold,
    fontSize: fontSizes.tiny,
    color: colors.appTextColor1

  },

  boldTextSmall: {
    fontFamily: appFonts.appTextBold,
    fontSize: fontSizes.small,
    color: colors.appTextColor1

  },

  boldTextRegular: {
    fontFamily: appFonts.appTextBold,
    fontSize: fontSizes.regular,
    color: colors.appTextColor1

  },

  boldTextMedium: {
    fontFamily: appFonts.appTextBold,
    fontSize: fontSizes.medium,
    color: colors.appTextColor1

  },
  boldTextH1: {
    fontFamily: appFonts.appTextBold,
    fontSize: fontSizes.h1,
    color: colors.appTextColor1

  },
  boldTextH2: {
    fontFamily: appFonts.appTextBold,
    fontSize: fontSizes.h2,
    color: colors.appTextColor1

  },
  boldTextH3: {
    fontFamily: appFonts.appTextBold,
    fontSize: fontSizes.h3,
    color: colors.appTextColor1

  },
  boldTextH4: {
    fontFamily: appFonts.appTextBold,
    fontSize: fontSizes.h4,
    color: colors.appTextColor1

  },
  boldTextH5: {
    fontFamily: appFonts.appTextBold,
    fontSize: fontSizes.h5,
    color: colors.appTextColor1

  },
  boldTexth6: {
    fontFamily: appFonts.appTextBold,
    fontSize: fontSizes.h6,
    color: colors.appTextColor1

  },

  iconCard: {
    width: responsiveWidth(24),
    height: responsiveWidth(25),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
  },
  selectedIconCard: {
    borderColor: colors.appBgColor2, // Orange
    borderStyle: 'solid',
  },
  unselectedIconCard: {
    borderColor: colors.appColor11,
    borderStyle: 'dashed',
  },
  summaryOptions: {
    justifyContent: "center",
    marginRight: responsiveWidth(2),
    borderColor: colors.appColor9,
    borderWidth: 1,
    marginBottom: responsiveHeight(1),
    borderRadius: responsiveWidth(2),
    height: responsiveHeight(4)
  },
  summaryCardContainer: {
    borderWidth: 1,
    borderRadius: responsiveWidth(5),
    borderLeftWidth: 10,
    height: responsiveWidth(20),
    width: responsiveWidth(40),
    marginBottom: responsiveHeight(1.5)
  },
  milestoneCardContainer: {
    width: responsiveWidth(92),
    backgroundColor: colors.black,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.appColor9,
    borderTopWidth: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
    overflow: 'hidden'
  },
  featureChipStyle: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: 4,
  },

  inputContainerUnderLined: {
    marginHorizontal: responsiveWidth(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#FFFF'
  },
  inputContainerBorderd: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 0.5,
    borderColor: colors.appColor1
  },
  inputContainerColored: {
    marginHorizontal: responsiveWidth(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFF',
    borderRadius: 2.5
  },
  helpYouContainer: {
    width: responsiveWidth(88),
    height: responsiveHeight(5), // Thoda height barha di image ke mutabiq
    borderRadius: responsiveWidth(6),
    borderWidth: 1,
    borderColor: colors.appBgColor2,
    backgroundColor: colors.black,
    shadowColor: colors.appBgColor2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 10,
  },
  inputField: {
    height: sizes.inputHeight,
    //width: responsiveWidth(80),
    color: colors.appTextColor3,
    fontFamily: appFonts.appTextRegular,
    fontSize: fontSizes.medium
  },
  inputFieldBorderd: {
    marginHorizontal: responsiveWidth(5),
    height: responsiveHeight(7),
    borderWidth: 0.5,
    borderColor: colors.appColor1,
    fontSize: responsiveFontSize(1.75),
    fontFamily: appFonts.appTextRegular,
    borderRadius: 2.5
  },
  inputFieldColored: {
    marginHorizontal: responsiveWidth(5),
    height: responsiveHeight(7),
    fontSize: responsiveFontSize(1.75),
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5,
    backgroundColor: '#FFFF',
    borderRadius: 2.5,
  },
  modalContainer: {
    backgroundColor: colors.appBgColor1,
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(4),
    padding:12
  },
  modalbg: {
    margin: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.modalbg
  },
  buttonBorderd: {
    marginHorizontal: responsiveWidth(5),
    height: responsiveHeight(8),
    borderRadius: 2.5,
    borderWidth: 1,
    borderColor: colors.appColor1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonColord: {
    marginHorizontal: responsiveWidth(5),
    height: responsiveHeight(8),
    borderRadius: 2.5,
    backgroundColor: colors.buttonColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialBtn: {
    width: responsiveWidth(25),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(26),
    borderWidth: responsiveWidth(.5),
    borderColor: colors.appColor6,
    backgroundColor: colors.appBgColor6,
    justifyContent: 'center',
    alignItems: 'center',

  },
  SocialButtonColord: {
    height: responsiveHeight(8),
    marginHorizontal: responsiveWidth(5),
    borderRadius: 2.5,
    backgroundColor: colors.facebook,
    //  alignItems: 'center',
    //  justifyContent: 'center'
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    color: '#000000',
    fontFamily: appFonts.appTextMedium
  },
  compContainer: {
    marginHorizontal: responsiveWidth(5),
    marginVertical: responsiveHeight(2.5)
  },
  rowCompContainer: {
    marginHorizontal: responsiveWidth(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveHeight(2.5)
  },
  headerStyle: {
    backgroundColor: colors.appBgColor1,
    borderBottomWidth: 1,
    borderBottomColor: colors.appTextColor4,
    //height: sizes.headerHeight
  },
  headerTitleStyle: {
    fontSize: responsiveFontSize(2),
    color: colors.appTextColor3,
    fontFamily: appFonts.appTextBold
  },
  radioCircle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    borderRadius: responsiveWidth(4),
    borderWidth: 1.5,
    borderColor: colors.appColor2,
    marginRight: responsiveWidth(.8)

  },
  radioDot: {
    height: responsiveWidth(2),
    width: responsiveWidth(2),
    borderRadius: responsiveWidth(2),
  },


  mainCard: {
    backgroundColor: '#000',
    borderRadius: 15,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveWidth(2),
    borderWidth: 1,
    borderColor: '#1A1A1A',
  },
  checkbox: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    borderRadius: responsiveWidth(1),
    borderWidth: responsiveWidth(.3),
    borderColor: colors.appColor2,
  },

  cardContainer: {
    borderRadius: responsiveWidth(3),
    padding: responsiveWidth(4),
    width: responsiveWidth(92),
    borderWidth: 1,
    borderColor: colors.appColor9,
  },

  cardView: {
    marginHorizontal: responsiveWidth(5),
    borderRadius: sizes.cardRadius,
    backgroundColor: '#FFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 3,
  },
  shadowExtraLight: {
    shadowColor: "#00000080",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,

    elevation: 1.5,
  },
  shadowLight: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,

    elevation: 3,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  shadowColored: {
    shadowColor: colors.appColor1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  shadowDark: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.425,
    shadowRadius: 8.27,

    elevation: 10,
  },
  shadowExtraDark: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  textCenter: {
    textAlign: 'center'
  },
  alignTextRight: {
    textAlign: 'right'
  },
  textColor2: {
    color: colors.appTextColor2
  },
  textColor3: {
    color: colors.appTextColor3
  },
  textGray: {
    color: colors.appTextColor2
  },
  textDarkGray: {
    color: colors.appTextColor3
  },
  textLightGray: {
    color: colors.appTextColor8
  },
  textPrimaryColor: {
    color: colors.appTextColor4
  },
  textSecondaryColor: {
    color: colors.appColor2
  },
  textForthColor: {
    color: colors.appColor4
  },
  textWhite: {
    color: colors.appTextColor3
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontExtraBold: {
    fontFamily: appFonts.appTextBold
  },
  fontBold: {
    fontFamily: appFonts.appTextBold
  },
  fontMedium: {
    fontFamily: appFonts.appTextMedium
  },
  fontRegular: {
    fontFamily: appFonts.appTextRegular
  },
  fontLight: {
    fontFamily: appFonts.appTextLight
  },
  ButtonRegular: {
    fontSize: fontSizes.regular,
    color: '#000000',
    fontFamily: appFonts.appTextMedium
  },
  ButtonMedium: {
    fontSize: fontSizes.h6,
    color: '#000000',
    fontFamily: appFonts.appTextSemiBold
    //letterSpacing:responsiveFontSize(5)
  },
  ButtonTextLarge: {
    fontSize: responsiveFontSize(2.2),
    color: '#000000',
    fontFamily: appFonts.appTextMedium,
    letterSpacing: responsiveFontSize(0.25)
  },
  tabBarStyle: {
    height: sizes.tabBarHeight,
    borderTopWidth: 0,
    //justifyContent: 'center',
    borderTopLeftRadius: sizes.cardRadius,
    borderTopRightRadius: sizes.cardRadius,
    // paddingTop: responsiveHeight(1),
    //borderRadius: sizes.buttonRadius,
    backgroundColor: colors.appColor1,
    //paddingVertical:sizes.tabBarHeight/5,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    //marginHorizontal: sizes.marginHorizontal,
    //marginBottom: Platform.OS === 'ios' ? responsiveHeight(2.5) : responsiveHeight(1.5),
    //paddingTop: sizes.tabBarHeight / 7,
    paddingBottom: sizes.tabBarHeight / 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.425,
    shadowRadius: 8.27,

    elevation: 10,
  },
  coloredWrapper: {
    marginHorizontal: sizes.marginHorizontal,
    paddingHorizontal: sizes.marginHorizontal / 1.25,
    paddingVertical: sizes.marginVertical / 1.5,
    backgroundColor: colors.appBgColor3,
    borderRadius: sizes.cardRadius,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between'
  },
  borderedWrapper: {
    marginHorizontal: sizes.marginHorizontal,
    paddingHorizontal: sizes.marginHorizontal / 1.25,
    paddingVertical: sizes.marginVertical / 1.5,
    borderWidth: 1,
    borderColor: colors.appBgColor3,
    borderRadius: sizes.cardRadius,
  },
  marginHorizontalLarge: {
    marginHorizontal: sizes.marginHorizontal * 2
  },
  marginHorizontalMedium: {
    marginHorizontal: sizes.marginHorizontal * 1.5
  },
  marginHorizontalBase: {
    marginHorizontal: sizes.marginHorizontal
  },
  marginHorizontalSmall: {
    marginHorizontal: sizes.marginHorizontal / 1.5
  },
  marginHorizontalTiny: {
    marginHorizontal: sizes.marginHorizontal / 4
  },
  marginHorizontalZero: {
    marginHorizontal: 0
  },
  paddingHorizontalLarge: {
    paddingHorizontal: sizes.marginHorizontal * 2
  },
  paddingHorizontalBase: {
    paddingHorizontal: sizes.marginHorizontal
  },
  paddingHorizontalSmall: {
    paddingHorizontal: sizes.marginHorizontal / 2
  },
  paddingHorizontalMedium: {
    paddingHorizontal: sizes.marginHorizontal * 1.5
  },
  paddingHorizontalTiny: {
    paddingHorizontal: sizes.marginHorizontal / 4
  },
  paddingHorizontalZero: {
    paddingHorizontal: 0
  },
  marginVerticalBase: {
    marginVertical: sizes.marginVertical
  },
  marginVerticalSmall: {
    marginVertical: sizes.marginVertical / 2
  },
  marginVerticalTiny: {
    marginVertical: sizes.marginVertical / 4
  },
  marginVerticalMedium: {
    marginVertical: sizes.marginVertical * 1.5
  },
  marginVerticalLarge: {
    marginVertical: sizes.marginVertical * 2
  },
  marginVerticalZero: {
    marginVertical: 0
  },
  paddingVerticalLarge: {
    paddingVertical: sizes.marginVertical * 2
  },
  paddingVerticalMedium: {
    paddingVertical: sizes.marginVertical * 1.5
  },
  paddingVerticalBase: {
    paddingVertical: sizes.marginVertical
  },
  paddingVerticalSmall: {
    paddingVertical: sizes.marginVertical / 2
  },
  paddingVerticalTiny: {
    paddingVertical: sizes.marginVertical / 4
  },
  paddingVerticalZero: {
    paddingVertical: 0
  },
  flexDirectionRow: {
    flexDirection: 'row'
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between'
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyContentSpaceAround: {
    justifyContent: 'space-around'
  },
  justifyContentFlexend: {
    justifyContent: 'flex-end',
  },
  justifyContentFlexstart: {
    justifyContent: 'flex-start',
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end'
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start'
  },
  backgroundColorWhite: {
    backgroundColor: colors.appBgColor1
  },
  textUnderlined: {
    textDecorationLine: 'underline'
  },
  textError: {
    color: colors.error
  },
  textSuccess: {
    color: colors.success
  }
})
