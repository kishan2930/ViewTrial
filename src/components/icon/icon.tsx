// src/components/Icon/index.tsx
import React from 'react';
import {SvgXml} from 'react-native-svg';
import Icons from '@constants/iconPaths';
import {IconName} from '@constants/iconName';

type IconProps = {
  name: IconName;
  size?: number;
  width?: number;
  height?: number;
  svgWidth?: number;
  svgHeight?: number;
  color?: string;
};

const Icon: React.FC<IconProps> = props => {
  const {
    name,
    size = 16,
    width,
    height,
    color = 'black',
    svgWidth,
    svgHeight,
  } = props;
  const rawXml = Icons[name];

  if (!rawXml) {
    return null;
  }

  const updatedXml = rawXml.replace(/(stroke|fill)="black"/g, `$1="${color}"`);

  const svgCode = `<svg width="${width ?? size}" height="${
    height ?? size
  }" viewBox="0 0 ${width ?? size} ${
    height ?? size
  }" fill="none" xmlns="http://www.w3.org/2000/svg">${updatedXml}</svg>`;

  return (
    <SvgXml xml={svgCode} width={svgWidth ?? 28} height={svgHeight ?? 28} />
  );
};

export default Icon;
