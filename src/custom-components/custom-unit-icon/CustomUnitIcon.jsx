import React from 'react';
import VideoIcon from './video.svg';
import UnitIcon from './unit.svg';

// eslint-disable-next-line react/prop-types
const CustomUnitIcon = ({ type }) => {
  let icon = null;
  switch (type) {
    case 'video':
      icon = VideoIcon;
      break;
    case 'other':
      icon = UnitIcon;
      break;
    case 'vertical':
      icon = UnitIcon;
      break;
    case 'problem':
      icon = UnitIcon;
      break;
    case 'lock':
      icon = UnitIcon;
      break;
    default:
      icon = UnitIcon;
  }
  return (
    <img src={icon} alt="icon" />
  );
};

export default CustomUnitIcon;
