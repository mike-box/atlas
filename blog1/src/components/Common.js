import React from "react"
import styled from 'styled-components'

export const Container = styled.div`
  margin  : ${props => props.margin || 'auto'};
  padding : ${props => props.padding || 'auto'};
  width   : ${props => props.width || 'auto'};
  height  : ${props => props.height || 'auto'};
  color   : ${props => props.color || 'inherit'};
  background-color : ${props => props.bgColor || 'transparent'};
`;
