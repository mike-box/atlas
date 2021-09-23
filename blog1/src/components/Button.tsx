import React from "react"
import styled from 'styled-components'
import { THEME } from '../config'

const ButtonContainer = styled.button`
  background-color: ${(props) => props.bgColor};
  color           : ${(props) => props.ftColor};
  font-size       : ${(props) => props.ftSize};
  font-weight     : 700;
  padding         : .8em 1.4em;
  border          : none;
`;

const COLOR = {
  primary : { bgColor : THEME.color.primary.HEX,                ftColor : THEME.color.white.HEX },
  white   : { bgColor : THEME.color.white.HEX,                  ftColor : THEME.color.primary.HEX },
  gray    : { bgColor : `rgba(${THEME.color.black.RGB}, 0.2)`,  ftColor : THEME.color.white.HEX },
}
const SIZE = {
  small : { ftSize: '14px' },
  medium: { ftSize: '16px' },
  large : { ftSize: '20px' },
}

interface ButtonProps {
  children: any;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'white' | 'gray';
}
export const Button: Ract.FC<ButtonProps> = ({children, size, color, ...restProps}) => {
  const props = { ...SIZE[size || 'medium'], ...COLOR[color || 'primary'] };
  return (
    <ButtonContainer className="shadow01 radius-025" { ...props } >
    {children}
    </ButtonContainer>
  )
}
