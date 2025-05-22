// utils/scale.ts
import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// Reference device dimensions (e.g., iPhone 12: 390 x 844)
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

/**
 * Scales a size horizontally based on screen width
 * @param size - the design size (in dp)
 */
export const scale = (size: number): number =>
  (SCREEN_WIDTH / BASE_WIDTH) * size;

/**
 * Scales a size vertically based on screen height
 * @param size - the design size (in dp)
 */
export const verticalScale = (size: number): number =>
  (SCREEN_HEIGHT / BASE_HEIGHT) * size;

/**
 * Moderately scales a size (e.g., for fonts, padding, etc.)
 * @param size - the design size (in dp)
 * @param factor - optional scaling factor (default: 0.5)
 */
export const moderateScale = (size: number, factor: number = 0.5): number =>
  size + (scale(size) - size) * factor;

/**
 * Scales font size and rounds it for crisp rendering
 * @param size - the design size (in dp)
 * @param factor - optional scaling factor (default: 0.5)
 */
export const scaleFont = (size: number, factor: number = 0.5): number =>
  PixelRatio.roundToNearestPixel(moderateScale(size, factor));

/*

React Native Scaling Guide (Using scale.ts)

Property                | Recommended Scale Function | Notes
------------------------|----------------------------|-----------------------------------------------
width                   | scale()                    | Scales horizontally based on screen width
minWidth / maxWidth     | scale()                    | Use same as width
height                  | verticalScale()            | Scales vertically based on screen height
minHeight / maxHeight   | verticalScale()            | Use same as height
padding                 | moderateScale()            | Scales evenly in all directions
paddingHorizontal       | scale()                    | Only horizontal padding
paddingVertical         | verticalScale()            | Only vertical padding
margin                  | moderateScale()            | Overall spacing
marginHorizontal        | scale()                    | Horizontal margin
marginVertical          | verticalScale()            | Vertical margin
fontSize                | moderateScale() or scaleFont() | Scales font size smoothly
lineHeight              | moderateScale()            | Keep proportional to font size
borderRadius            | moderateScale()            | Scales corner radius naturally
borderWidth             | moderateScale()            | Keeps visual weight consistent
top / bottom            | verticalScale()            | Positioning on vertical axis
left / right            | scale()                    | Positioning on horizontal axis
letterSpacing           | moderateScale()            | Keeps letter spacing readable
elevation (Android)     | No scale                   | Leave as is (no scaling)
zIndex                  | No scale                   | Logical layering, no scaling needed

*/
