import React from "react"
import styled from 'styled-components'
import { Container } from './Common'

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
