import React, { useState } from 'react'
import Wrapper from '../wrapper';
import { Pressable, StyleSheet, View } from 'react-native';
import { appImages, appStyles, colors, responsiveFontSize, responsiveHeight, responsiveWidth, sizes } from '../../services';
import * as Icons from '../icons';
import Text from '../text';
import { Icon } from '@rneui/base';
import { Images, Spacer } from '..';

export function IconTitleArrow({ iconImage, iconName, iconType, iconSvg, title, onPress, left, right, invertColors, titleStyle, containerStyle, disableIconColor, arrowColor, iconContainerColor, ...props }) {
    const defaulTintColor = !invertColors ? colors.appTextColor2 : colors.appTextColor6
    const defaulArrowColor = arrowColor || (!invertColors ? colors.appTextColor4 : colors.appTextColor6)
    const defaulBackgroundColor = iconContainerColor || (!invertColors ? colors.appBgColor1 : colors.appBgColor6)
    return (
        <Pressable
            activeOpacity={1}
            onPress={onPress}
        >
            <Wrapper flexDirectionRow justifyContentSpaceBetween marginHorizontalBase alignItemsCenter style={containerStyle} {...props}>
                <Wrapper flexDirectionRow alignItemsCenter>
                    {
                        left ? left :
                            iconImage || iconName || iconSvg ?
                                <Icons.Button
                                    customIcon={iconImage}
                                    iconName={iconName}
                                    iconType={iconType}
                                    svgIcon={iconSvg}
                                    iconColor={!disableIconColor && defaulTintColor}
                                    iconSize={responsiveWidth(5)}
                                    buttonColor={defaulBackgroundColor}
                                    buttonSize={responsiveWidth(10)}
                                    isRound
                                //buttonStyle={{ marginRight: sizes.marginHorizontal }}
                                />
                                :
                                null
                    }
                    <Text isMedium style={[{ color: defaulTintColor }, titleStyle]}>{title}</Text>
                </Wrapper>
                {
                    right ?
                        right :
                        <Icon
                            name='chevron-right'
                            type='feather'
                            color={defaulArrowColor}
                            size={sizes.icons.medium}
                        />
                }
            </Wrapper>
        </Pressable>
    )
}

export function SummaryCard({ image, title, subtitle }) {
    return (
        <Wrapper flexDirectionRow alignItemsCenter paddingHorizontalSmall paddingVerticalTiny>
            <Wrapper style={{ marginLeft: responsiveWidth(2) }}>
                <Images.Round
                    source={image}
                    size={responsiveWidth(8)}
                />
            </Wrapper>
            <Wrapper marginHorizontalSmall>
                <Text isSemiTextSmall  style={{color:colors.appBgColor2}}>{title ? title : "...."}</Text>

                <Text isSemiTextSmall>{subtitle ? subtitle : "...."}</Text>
            </Wrapper>
        </Wrapper>
    );
}

export function FeatureCards({
    data,
    onPressEdit,
    onPressTrash,
    trash,
    edit,
    rightIcons,
    borderColor

}) {

    const BulletPoint = ({ text }) => (
        <Wrapper flexDirectionRow style={{ marginVertical: 2, paddingRight: 10 }}>
            <Text isWhite>{''}•{' '}</Text>
            <Text isRegTextReg>
                {text}
            </Text>
        </Wrapper>
    );
    return (
        <Wrapper alignItemsCenter>
            {
                data && data.map((item, index) => {
                    return (
                        <Wrapper key={item.id}
                        marginHorizontalSmall
                        marginVerticalSmall
                        paddingVerticalTiny
                            style={appStyles.cardContainer}
                        >
                            <Spacer isBasic />
                            <Wrapper flexDirectionRow justifyContentSpaceBetween marginHorizontalSmall>


                                <Images.SqareRound
                                    source={item.image}
                                    size={responsiveFontSize(70)}


                                />
                                {
                                    rightIcons && (
                                        <Wrapper flexDirectionRow >
                                            {
                                                edit && (
                                                    <Pressable onPress={() => onPressEdit(item)}>
                                                        <Images.SqareRound
                                                            source={appImages.editImage}
                                                            size={responsiveFontSize(30)}


                                                        />
                                                    </Pressable>
                                                )
                                            }
                                            <Spacer horizontal isSmall />
                                            {
                                                trash && (
                                                    <Pressable
                                                        onPress={() => onPressTrash(item)}
                                                    >
                                                        <Images.SqareRound
                                                            source={appImages.trashImage}
                                                            size={responsiveFontSize(30)}


                                                        />
                                                    </Pressable>
                                                )
                                            }
                                        </Wrapper>
                                    )
                                }
                            </Wrapper>
                            <Spacer isTiny />
                            <Wrapper marginHorizontalSmall>
                                <Text isSemiTextMed>{item.heading}</Text>
                                <Wrapper>
                                    {
                                        item.points?.map((point, index) => {
                                            return (
                                                <BulletPoint
                                                    key={index}
                                                    text={point}
                                                />
                                            )
                                        })
                                    }
                                </Wrapper>
                            </Wrapper>
                            <Spacer isSmall />
                        </Wrapper>
                    )
                })
            }
        </Wrapper>
    );
}

export function EstimateCards({

    data,
    costHeader,
    description,
    keyHeader,
    keyTextmarginBottom,
    timerHeader


}) {




    const BulletPoint = ({ text }) => (
        <Wrapper flexDirectionRow style={{ marginVertical: keyTextmarginBottom ? keyTextmarginBottom : 0, paddingRight: responsiveWidth(4) }}>
            <Text isWhite>{''}•{' '}</Text>
            <Text isRegTextSmall>
                {text}
            </Text>
        </Wrapper>
    );

    return (

        <Wrapper alignItemsCenter>
            {
                data && data.map((item, index) => {
                    return (
                        <Wrapper key={item.id}
                        marginHorizontalSmall
                        paddingHorizontalTiny
                        marginVerticalSmall
                            style={[appStyles.cardContainer,{
                              
                                borderColor: index === 0 ? colors.parrot : index === 1 ? colors.yellow : index === 2 ? colors.purple : 'red',
                            }]}
                        >
                            <Spacer isBasic />
                            {
                                costHeader && (
                                    <Wrapper marginHorizontalSmall flexDirectionRow justifyContentSpaceBetween>
                                        <Wrapper>
                                            <Text isSemiTextMed>
                                                {index === 0 ? "Lower Estimate" : index === 1 ? "Mid Estimate" : index === 2 ? "Highest Estimate" : 'Estimate'}
                                            </Text>
                                        </Wrapper>
                                        <Wrapper
                                            alignItemsCenter
                                            justifyContentCenter
                                            style={{
                                                backgroundColor: index === 0 ? colors.parrot : index === 1 ? colors.yellow : index === 2 ? colors.purple : 'red',
                                                borderRadius: responsiveWidth(4),
                                                height: 20,


                                            }}>
                                            <Wrapper paddingHorizontalSmall>
                                                <Text isSemiTextTiny style={{ color: colors.black }}  >{item.cost}</Text>
                                            </Wrapper>
                                        </Wrapper>
                                    </Wrapper>
                                )
                            }
                            {
                                timerHeader && (
                                    <Wrapper flexDirectionRow alignItemsCenter marginHorizontalSmall>
                                        <Images.SqareRound
                                            source={index === 0 ? appImages.flashimage : index === 1 ? appImages.yellowTimerImage : index === 2 ? appImages.calenderImage : appImages.starimage}
                                            size={responsiveFontSize(45)}
                                        />
                                        <Spacer horizontal isSmall />
                                        <Wrapper>
                                            <Text isRegTextReg>
                                                {index === 0 ? "Lower Estimate" : index === 1 ? "Mid Estimate" : index === 2 ? "Highest Estimate" : 'Estimate'}
                                            </Text>

                                            {
                                                item.time &&
                                                <Text isSemiTextMed>{item.time}  </Text>
                                            }
                                        </Wrapper>

                                    </Wrapper>
                                )
                            }


                            {
                                description ? (
                                    <Wrapper marginHorizontalSmall>
                                        <Spacer isTiny />
                                        <Text isRegTextSmall>
                                            {item.description}
                                        </Text>
                                        <Spacer isSmall />
                                    </Wrapper>
                                ) : <Spacer isSmall />
                            }

                            {
                                keyHeader && (
                                    <Wrapper flexDirectionRow alignItemsCenter marginHorizontalSmall>
                                        <Icon
                                            name='zap'
                                            type='feather'
                                            size={responsiveFontSize(20)}
                                            color={colors.appColor2}
                                        />
                                        <Spacer isTiny horizontal />
                                        <Text isSemiTextMed>
                                            Key features
                                        </Text>
                                    </Wrapper>
                                )
                            }
                            <Spacer isTiny />
                            <Wrapper marginHorizontalBase>
                                {
                                    item.points?.map((point, index) => {
                                        return (
                                            <BulletPoint
                                                key={index}
                                                text={point}
                                            />
                                        )
                                    })
                                }
                            </Wrapper>
                            <Spacer isSmall />


                        </Wrapper>
                    )
                })
            }

        </Wrapper>
    )
}
export function MilestoneCard({ data, onPressEdit, onPressTrash }) {
    // Colors ki array jo repeat hogi
    const cardColors = ['#4FD1C5', '#A855F7', '#3B82F6'];
    const featureColors = ['#F7C81D', '#46AEC7', '#B90DDC']

    const grey = colors.appTextColor9

    const [expandedItems, setExpandedItems] = useState({});


    return (
        <Wrapper alignItemsCenter>
            {data && data.map((item, index) => {

                const dynamicColor = cardColors[index % cardColors.length];

                const isExpanded = expandedItems[index] || false;

                const visibleFeatures = isExpanded
                    ? item.features
                    : item.features?.slice(0, 3);

                return (
                    <Wrapper
                        key={item.id || index}
                        style={[
                            appStyles.milestoneCardContainer,
                            { borderTopColor: dynamicColor }
                        ]}
                    >

                        <Spacer isBasic />


                        <Wrapper flexDirectionRow justifyContentSpaceBetween marginHorizontalSmall>
                            <Wrapper flex={1}>
                                <Text isSemiTextH6 >{item.title}</Text>
                            </Wrapper>
                            <Wrapper flexDirectionRow>
                                <Pressable onPress={() => onPressEdit(item)}>
                                    <Images.SqareRound source={appImages.yellowEdit} size={responsiveFontSize(30)} />
                                </Pressable>
                                <Spacer horizontal isSmall />
                                <Pressable onPress={() => onPressTrash(item)}>
                                    <Images.SqareRound source={appImages.trashImage} size={responsiveFontSize(30)} />
                                </Pressable>
                            </Wrapper>
                        </Wrapper>

                        <Spacer isSmall />

                        {/* Description */}
                        <Wrapper marginHorizontalSmall>
                            <Text isRegTextSmall >{item.description}</Text>
                        </Wrapper>

                        <Spacer isSmall />

                        {/* Features Label */}
                        <Wrapper flexDirectionRow alignItemsCenter marginHorizontalSmall>
                            <Icon name='zap' type='feather' size={responsiveFontSize(18)} color={colors.appColor2} />
                            <Spacer isTiny horizontal />
                            <Text isSemiTextMed style={{ color: 'white' }}>
                                Features ({item.features ? item.features.length : 0})
                            </Text>
                        </Wrapper>

                        <Spacer isTiny />

                        {/* Chips */}
                        <Wrapper flexDirectionRow marginHorizontalSmall style={{ gap: 8, flexWrap: "wrap" }}>
                            {visibleFeatures && visibleFeatures.map((feature, i) => {

                                const dynamicFeatureColor =
                                    featureColors[i % featureColors.length];

                                return (
                                    <View
                                        key={i}
                                        style={[
                                            appStyles.featureChipStyle,
                                            { borderColor: dynamicFeatureColor }
                                        ]}
                                    >
                                        <Text isRegTextSmall style={{ color: dynamicFeatureColor }}>
                                            {feature}</Text>
                                    </View>
                                );
                            })}

                            {/* More / Less Toggle */}
                            {item.features && item.features.length > 3 && (
                                <Pressable
                                    onPress={() =>
                                        setExpandedItems(prev => ({
                                            ...prev,
                                            [index]: !prev[index]
                                        }))
                                    }
                                >
                                    <View
                                        style={[
                                            appStyles.featureChipStyle,
                                            { borderColor: '#4FD1C5' }
                                        ]}
                                    >
                                        <Text isRegTextSmall style={{ color: '#4FD1C5' }}>
                                            {isExpanded
                                                ? 'Show Less'
                                                : `+${item.features.length - 3} more`}
                                        </Text>
                                    </View>
                                </Pressable>
                            )}
                        </Wrapper>


                        <Spacer isBasic />


                        <Wrapper flexDirectionRow justifyContentSpaceBetween marginHorizontalBase>

                            <Wrapper>
                                <Wrapper flexDirectionRow alignItemsCenter>
                                    <Icon name='calendar' type='feather' size={14} color={grey} />
                                    <Spacer horizontal isTiny />
                                    <Text isRegTextSmall style={{ color: grey }}>Duration</Text>
                                </Wrapper>
                                <Text isSemiTextSmall >{item.duration}{' '}weeks</Text>
                                <Spacer isTiny />
                                <Text isRegTextSmall style={{ color: grey }}  >{item.startDate} - {item.endDate}</Text>
                            </Wrapper>


                            <Wrapper style={{ marginRight: responsiveWidth(18) }}>
                                <Wrapper flexDirectionRow alignItemsCenter >
                                    <Icon name='dollar-sign' type='feather' size={14} color={grey} />

                                    <Text isRegTextSmall style={{ color: grey }}>Cost</Text>
                                </Wrapper>
                                <Text isSemiTextSmall>${' '}{item.cost}</Text>
                            </Wrapper>
                        </Wrapper>

                        <Spacer isBasic />
                    </Wrapper>
                )
            })}
        </Wrapper>
    );
}


export function TestCasesCard({
    data,
 



}) {


    return (
        <Wrapper alignItemsCenter>
            {
                data && data.map((item, index) => {
                    const [expanded, setExpanded] = useState(item.id === "001"); // Pehla wala open rakhein image ki tarah

                    const toggleExpand = () => {
                        setExpanded(!expanded);
                    };
                    return (
                        <Wrapper marginHorizontalBase
                            style={{
                                marginVertical: responsiveHeight(1),
                                width: responsiveWidth(92),
                                borderRadius: responsiveWidth(2),
                                borderWidth: responsiveWidth(.2),
                                borderColor:colors.appColor10,
                            }}
                            marginVerticalTiny
                        >
                            <Pressable onPress={toggleExpand}   style={{padding:15}}>
                                <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
                                    <Wrapper flexDirectionRow alignItemsCenter>
                                        <Text isSemiTextH6>Test Case - {item.id}  </Text>
                                        {item.tags.map((tag, index) => (
                                            <Wrapper marginHorizontalTiny key={index}

                                                style={{
                                                    borderWidth: 1,
                                                    borderRadius: responsiveWidth(3),
                                                    paddingHorizontal: responsiveWidth(1.5),
                                                    paddingVertical: responsiveWidth(.1),
                                                    minWidth: responsiveWidth(8),
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderColor: tag.color
                                                }}
                                            >
                                                <Text isTiny style={{ color: tag.color }}>{tag.label}</Text>
                                            </Wrapper>
                                        ))}
                                    </Wrapper>
                                    <Icon name={expanded ? "chevron-up" : "chevron-down"} type='material-community' size={20} color={colors.appColor2} />
                                </Wrapper>
                                {/* {!expanded && <Text isSemiTextH6 style={{ marginTop: 5 }}>{item.title}</Text>} */}
                            </Pressable>

                            {expanded && (
                                <Wrapper  >
                                    <Wrapper marginHorizontalSmall>
                                        <Text isBoldTextH6 >{item.title}</Text>
                                        <Spacer isTiny />
                                        <Text isGray isRegTextSmall>OBJECTIVE</Text>
                                        <Spacer isTiny />
                                        <Text isRegTextSmall >{item.objective}</Text>
                                    </Wrapper>
                                    <Spacer isSmall />
                                    <Wrapper style={{ width: responsiveWidth(100), height: responsiveHeight(.1), backgroundColor: '#353535' }} />
                                    <Spacer isSmall />
                                    <Wrapper marginHorizontalSmall>
                                        <Text isGray isRegTextSmall>TEST STEPS</Text>
                                        <Spacer isSmall />
                                        {item.steps.map((step, index) => (
                                            <Text key={index} isRegTextSmall  >
                                                <Text isRegTextSmall style={{ color: colors.green }}>{index + 1}   </Text>{step}
                                            </Text>
                                        ))}
                                    </Wrapper>
                                    <Spacer isSmall />
                                    <Wrapper style={{ width: responsiveWidth(100), height: responsiveHeight(.1), backgroundColor: '#353535' }} />
                                    <Spacer isSmall />
                                    <Wrapper marginHorizontalSmall>
                                        <Text isRegTextSmall isGray>EXPECTED RESULT</Text>
                                        <Text isRegTextSmall >{item.expected}</Text>

                                        <Spacer isSmall />
                                        <Text isRegTextSmall isGray>PASS/FAIL CRITERIA</Text>
                                        <Text isRegTextSmall >{item.criteria}</Text>
                                    </Wrapper>
                                    <Spacer isSmall />
                                </Wrapper>
                            )}
                        </Wrapper>
                    )
                })
            }
        </Wrapper>

    );
}