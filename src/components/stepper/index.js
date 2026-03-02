import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Wrapper, Text, Spacer } from '../index';
import { Icon } from '@rneui/base';
import { colors, responsiveFontSize, responsiveHeight, responsiveWidth } from '../../services';

const Stepper = ({ activeStep }) => {


    
    const steps = [
        { title: 'Features' },
        { title: 'Estimates' },
        { title: 'Milestones' },
        { title: 'Test Cases' },
    ];
    return (
        <Wrapper flexDirectionRow alignItemsCenter style={styles.container}>
            {steps.map((item, index) => {
                const isCompleted = index < activeStep;
                const isActive = index === activeStep;

                return (
                    <View key={index} style={styles.stepWrapper}>
                        <View style={styles.circleAndLineContainer}>

                            {/* Left Line */}
                            <View style={[
                                styles.line,
                                { backgroundColor: index <= activeStep && index !== 0 ? colors.appBgColor2 : index === 0 ? 'transparent' : colors.appColor9 }
                            ]} />

                            {/* Step Circle */}
                            {/* Step Circle Content */}
                            <View style={[
                                styles.circle,
                                (isActive || isCompleted) ? styles.activeCircle : styles.inactiveCircle
                            ]}>
                                {/* Yahan change kiya hai: isActive par bhi ab tick dikhega */}
                                {(isActive || isCompleted) ? (
                                    <Icon
                                        name="check"
                                        type="feather"
                                        color={colors.appColor2}
                                        size={responsiveFontSize(14)}
                                    />
                                ) : (
                                    <Text isGray isSmall>
                                        {index + 1}
                                    </Text>
                                )}
                            </View>

                            {/* Right Line */}
                            <View style={[
                                styles.line,
                                { backgroundColor: index < activeStep ? colors.appBgColor2 : index === steps.length - 1 ? 'transparent' : colors.appColor9 }
                            ]} />
                        </View>

                        {/* Label */}
                        <Spacer isTiny />
                        <Text isRegTextSmall  isWhite={isActive || isCompleted}
                            style={[styles.label, !isActive && !isCompleted && { color: colors.appColor9 }]}>
                            {item.title}
                        </Text>
                    </View>
                );
            })}
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: responsiveWidth(10),
        marginTop: responsiveHeight(2),
        width: '100%',
    },
    stepWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    circleAndLineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    circle: {
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        borderRadius: responsiveWidth(5),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        zIndex: 1, // Circle line ke upar rahe
    },
    activeCircle: {
        backgroundColor: colors.appBgColor2,
        borderColor: colors.appBgColor2,
    },
    inactiveCircle: {
        backgroundColor: colors.black, // Background color match with your theme
        borderColor: colors.appColor9,
    },
    stepNumber: {
        fontSize: responsiveFontSize(10),
        color: colors.appColor9,
    },
   
    line: {
        flex: 1,
        height: 1,
    },
});

export default Stepper;