import React, { useMemo, useRef, useState } from 'react';
import { StyleSheet, ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import { Images, ScrollViews, Spacer, Text, TextInputs, Wrapper } from "../../components"
import { appImages, colors, responsiveHeight, responsiveWidth, responsiveFontSize, appStyles } from '../../services';
import BottomSheet, { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import { Icon } from '@rneui/base';
import { SummaryCard } from '../cards';





const ProjectSummary = ({
    onInputFocus,
    projectName,
    budget,
    timeline,
    stageOption,
    builderOption,
    selectedBuilder, setSelectedBuilder,
    selectedStageOption, setSelectedStageOption,
    onEditPress
}) => {


    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => [responsiveHeight(17), responsiveHeight(86)], []);

    const [currentIndex, setCurrentIndex] = useState('')
    const handleSheetChanges = (index) => {
        setCurrentIndex(index);
    };


    return (

        <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enableDynamicSizing={false}
            backgroundStyle={{
                backgroundColor: colors.appBgColor1,
                borderTopLeftRadius: responsiveWidth(8),
                borderTopRightRadius: responsiveWidth(8),
                borderTopWidth: responsiveWidth(0.5),
                borderColor: colors.appColor9,
            }}
            handleIndicatorStyle={{
                backgroundColor: colors.appBgColor5,
                width: responsiveWidth(20),
                marginTop: responsiveHeight(1),
            }}
        >
            <BottomSheetScrollView

                stickyHeaderIndices={[0]}
                contentContainerStyle={{
                    paddingBottom: responsiveHeight(8)
                }}
            >

                <Wrapper flexDirectionRow justifyContentCenter style={{ backgroundColor: colors.appBgColor1 }} >
                    <Text isSemiTextMed>Project Summary</Text>
                    <Icon
                        name={currentIndex === 0 ? 'chevron-down' : 'chevron-up'}
                        type='material-community'
                        color={colors.appColor2}

                    />

                </Wrapper>

                <Spacer isSmall />
                <Wrapper marginHorizontalBase style={appStyles.mainCard}>
                    <Spacer isTiny />
                    <Text isSemiTextReg>Project Idea</Text>
                    <Spacer isTiny />
                    <Text isRegTextSmall>A short 1-2 line description of the idea</Text>

                    <Text isSemiTextReg >What stage is your project in?</Text>
                    <Spacer isTiny />
                    <Wrapper  >
                        {stageOption.map((item) => {
                            const isSelected = selectedStageOption === item.value;
                            return (
                                <Pressable

                                    key={item.id}
                                    onPress={() => setSelectedStageOption(item.value)}
                                    style=
                                    {[
                                        appStyles.summaryOptions, {
                                            flexDirection: "row",
                                            justifyContent: "flex-start",
                                            alignItems: "center"
                                        }]}
                                >
                                    <Wrapper alignItemsCenter justifyContentCenter marginHorizontalSmall style={[appStyles.radioCircle, isSelected && { borderColor: colors.appBgColor2 }]}>
                                        {isSelected && <Wrapper style={[appStyles.radioDot, { backgroundColor: colors.appBgColor2 }]} />}
                                    </Wrapper>
                                    <Text isRegTextSmall style={{
                                         marginLeft: responsiveWidth(1),
                                        //  color:isSelected?colors.appBgColor2:colors.appColor2 
                                         }}>
                                        {item.label}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </Wrapper>
                    <Spacer isTiny />
                    <Text isWhite isMediumFont>Who's building this?</Text>
                    <Spacer isTiny />
                    <Wrapper  >
                        {builderOption.map((item) => {
                            const isSelected = selectedBuilder === item.value;
                            return (
                                <Pressable
                                    key={item.id}
                                    onPress={() => setSelectedBuilder(item.value)}
                                    style={appStyles.summaryOptions}
                                >
                                    <Wrapper marginHorizontalSmall flexDirectionRow alignItemsCenter>
                                        <Wrapper style={[
                                            appStyles.checkbox, isSelected && { borderColor: colors.appBgColor2, backgroundColor: colors.appBgColor1 }]}>
                                            {isSelected && <Icon name="check" type="feather" size={responsiveFontSize(14)} color={colors.appBgColor2} />}
                                        </Wrapper>
                                        <Text isRegTextSmall style={{ marginLeft: responsiveWidth(2)
                                            // ,color:isSelected?colors.appBgColor2:colors.appColor2 
                                             }} >
                                            {item.label}
                                        </Text>
                                    </Wrapper>
                                </Pressable>
                            );
                        })}
                    </Wrapper>
                </Wrapper>
                <Spacer isSmall />
                <Wrapper marginHorizontalBase >
                    <Wrapper flexDirectionRow justifyContentSpaceBetween>
                        <Text isSemiTextReg >Project Summary</Text>
                        <TouchableOpacity
                            onPress={onEditPress}
                        >
                            <Images.SqareRound
                                source={appImages.editIcon}
                                size={responsiveFontSize(20)}
                            />
                        </TouchableOpacity>
                    </Wrapper>
                    <Text isRegTextSmall>Your projects details will appear here.</Text>
                </Wrapper>
                <Spacer isSmall />
                <Wrapper marginHorizontalBase>
                    <Wrapper >
                        <SummaryCard
                            image={appImages.projectimage}
                            title={'Project Name'}
                            subtitle={projectName}
                        />
                        <SummaryCard
                            image={appImages.badgetimage}
                            title={'Budget'}
                            subtitle={budget}
                        />
                        <SummaryCard
                            image={appImages.timerimage}
                            title={'Timer'}
                            subtitle={timeline}
                        />
                    </Wrapper>
                </Wrapper>


            </BottomSheetScrollView>
        </BottomSheet>



    );
};



export default ProjectSummary;