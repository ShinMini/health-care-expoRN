import { Dimensions } from 'react-native'
/** constance variable */
// 아래서 부터의 버튼 높이
export const BTN_MARGIN = 30
export const IMG_RATIO = 0.85

// screen 사이즈
export const SCREEN_WIDTH = Dimensions.get('screen').width
export const SCREEN_HEIGHT = Dimensions.get('screen').height

// canvas에 그려줄 canvas 마진값
export const X_SIZE = (SCREEN_WIDTH - SCREEN_WIDTH * IMG_RATIO) / 2
// export const Y_Size = (SCREEN_HEIGHT - SCREEN_HEIGHT * IMG_RATIO) / 2
export const Y_SIZE = 0

// canvas 높낮이
export const CANVAS_WIDTH = Math.round(SCREEN_WIDTH * IMG_RATIO)
export const CANVAS_HEIGHT = Math.round(SCREEN_HEIGHT * IMG_RATIO)

// canvas 높이 조절
export const CIRCLE_MARGIN_WIDTH = -92
export const CIRCLE_MARGIN_HEIGHT = 180
