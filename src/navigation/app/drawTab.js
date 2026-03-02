import React from 'react';
import { View, StyleSheet, Pressable, Image, Alert } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Home, Chat, Messages, ClientRequest } from "../../screens/app"
import { Images, Spacer, Text, Wrapper } from '../../components';
import { appImages, colors, responsiveFontSize, responsiveHeight, responsiveWidth, routes, useReduxStore } from '../../services';
import { Icon } from '@rneui/base';
import { setIsLoggedIn, setSignedInUser } from '../../store/authSlice';
import auth from '@react-native-firebase/auth'; // ✅ Ye missing tha
import { useDispatch } from 'react-redux';

const Drawer = createDrawerNavigator();



function CustomDrawerContent(props) {
    const { state, navigation } = props;


    const menuItems = [
        { label: 'Client Requests', icon: 'file-document-outline', routeName: routes.clientrequest },
        { label: 'Home', icon: 'view-grid-outline', routeName: routes.home },
        { label: 'Chat', icon: 'message-outline', routeName: routes.chat },

    ];

    const { signedInUser } = useReduxStore()

    const dispatch = useDispatch()

    const handleLogout = () => {
        Alert.alert("Logout", "Are you sure you want to logout?", [
            { text: "Cancel", style: "cancel" },
            {
                text: "Logout",
                onPress: async () => {
                    console.log("---------- LOGOUT FLOW START ----------");
                    try {
                        // 1. Firebase SignOut
                        await auth().signOut();
                        console.log("1. ✅ Firebase Auth: Signed Out");

                        // 2. Redux Reset
                        dispatch(setSignedInUser(null));
                        dispatch(setIsLoggedIn(false));
                        console.log("2. ✅ Redux: State Cleared");

                        console.log("Step 3: 🚀 Navigating to Auth Flow...");
                        navigation.navigate(routes.auth, { screen: routes.signin });
                        console.log("---------- LOGOUT FLOW END ----------");

                        // Note: Agar aapka Navigation Main Stack ternary operator (isLoggedIn ? App : Auth) par hai, 
                        // toh ye khud hi Auth flow mein chala jayega.
                    } catch (error) {
                        console.log("❌ Logout Error:", error);
                    }
                },
                style: "destructive"
            }
        ]);
    };

    return (
        <Wrapper isMain>
            <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>

                <Wrapper marginHorizontalBase >
                    <Spacer isMedium />
                    <Images.SqareRound source={appImages.logo2} size={responsiveWidth(18)} />
                </Wrapper>

                <Spacer isBase />


                {menuItems.map((item, index) => {
                    const isFocused = state.routes[state.index].name === item.routeName;
                    return (
                        <Pressable
                            key={index}
                            onPress={() => navigation.navigate(item.routeName)}
                            style={[
                                styles.navItem,
                                { backgroundColor: isFocused ? colors.appBgColor2 : 'transparent' }
                            ]}
                        >
                            <Icon
                                name={item.icon}
                                type="material-community"
                                color={colors.appColor2}
                                size={responsiveFontSize(18)}
                            />
                            <Spacer horizontal isTiny />
                            <Text isSemiTextMed>
                                {item.label}
                            </Text>
                        </Pressable>
                    );
                })}
            </DrawerContentScrollView>


            <Wrapper flexDirectionRow marginHorizontalBase marginVerticalMedium >
                <Images.SqareRound
                    source={appImages.user1}
                    size={responsiveWidth(12)}
                />
                <Wrapper marginHorizontalSmall  >
                    <Wrapper flexDirectionRow >
                        <Text isSemiTextReg >
                            {signedInUser?.firstName ? signedInUser.firstName : "User"}
                        </Text>
                        <Spacer isTiny horizontal />
                        {
                            signedInUser?.lastName && (
                                <Text isSemiTextReg>{signedInUser.lastName}</Text>
                            )
                        }
                    </Wrapper>
                    <Text isGray isRegTextTiny>{signedInUser?.email ? signedInUser.email : "User"}</Text>
                </Wrapper>
            </Wrapper>
            <Pressable
                onPress={handleLogout}
              style={{
                flexDirection:"row",
                paddingBottom:responsiveHeight(2),
                paddingLeft:responsiveWidth(20)
              }}
            >
             
              
                <Text isSemiTextMed style={{ color: colors.appBgColor2 || 'red' }}>Logout</Text>
                   <Spacer horizontal isTiny />
                    <Icon
                    name="logout"
                    type="material-community"
                    color={colors.appBgColor2 || 'red'}
                    size={responsiveFontSize(18)}
                />
            </Pressable>
        </Wrapper>
    );
}


export default function AppDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    width: responsiveWidth(65),

                },

            }}
            initialRouteName={routes.home}
        >
            <Drawer.Screen name={routes.home} component={Home} />
            <Drawer.Screen name={routes.chat} component={Chat} />
            <Drawer.Screen name={routes.clientrequest} component={ClientRequest} />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(2),
        marginHorizontal: responsiveWidth(1),
        borderRadius: responsiveWidth(2),
        marginBottom: responsiveHeight(2)
    },

});