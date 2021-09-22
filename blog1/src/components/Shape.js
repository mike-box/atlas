import React from "react"
import styled from 'styled-components'

const Container = styled.div`
  margin  : ${props => props.margin || 'auto'};
  padding : ${props => props.padding || 'auto'};
  width   : ${props => props.width || 'auto'};
  height  : ${props => props.height || 'auto'};
  color   : ${props => props.color || 'inherit'};
  background-color : ${props => props.bgColor || 'transparent'};
`;
const PaperContainer = styled(Container)``;
const CardContainer = styled(Container)``;

export const Paper = ({children, ...restProps}) => (
  <PaperContainer className="shadow02" {...restProps}>
  {children}
  </PaperContainer>
)

export const Card = ({children, ...restProps}) => (
  <CardContainer className="shadow06 radius-05" {...restProps}>
  {children}
  </CardContainer>
)
