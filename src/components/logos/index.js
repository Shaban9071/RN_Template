import React from 'react'
import {  appIcons ,appImages,appSvgs, responsiveWidth} from '../../services';
import * as Icons  from '../icons';
import { Images } from '..';

export const Primary = ({ size }) => {
  return (
    <Images.SqareRound
    source={appImages.logoimage}
    size={size||responsiveWidth(50)}
    />
  );
}

export const PrimaryWhite = ({ size }) => {
  return (
    <Icons.Svg
    svg={appSvgs.logo_white}
    size={size||responsiveWidth(50)}
    />
  );
}