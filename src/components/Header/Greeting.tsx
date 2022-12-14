import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components/native'
import type { StyleProp, TextStyle } from 'react-native'

// custom components
import SmallText from '../Texts/SmallText'
import RegularText from '../Texts/RegularText'
import { Colors } from 'react-native-paper'

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`
interface GreetingProps {
  mainText: string
  subText: string
  mainTextStyles?: StyleProp<TextStyle>
  subTextStyles?: StyleProp<TextStyle>
}

/**
 * Greeting view display at first lunched the APP
 * @param props don't need props properties
 * @returns {React.component} Welcome texts in StyleView
 */
const Greeting: FC<GreetingProps> = (props) => {
  return (
    <StyledView>
      <RegularText
        textStyles={[
          {
            color: Colors.grey100,
            fontSize: 22,
          },
          props.mainTextStyles,
        ]}
      >
        {props.mainText}
      </RegularText>
      <SmallText
        textStyles={[
          {
            color: Colors.grey400,
          },
          props.subTextStyles,
        ]}
      >
        {props.subText}
      </SmallText>
    </StyledView>
  )
}

export default Greeting
