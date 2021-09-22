import React from "react"
import styled from 'styled-components'
import { THEME } from '../config'
import { WebPageHead, Paper, Card } from '../components'
import GlobalStyle from "../global.styled";

const Container = styled.div`
  height: 100vh;
  gap: 1em;
`

export default function UISpec () {
  return (
    <>
      <GlobalStyle />
      <Container className="flex-center align-center direction-col">
        <WebPageHead context={{ title: '界面规格' }} />
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <p className="">p</p>
        <p className="ft-regular">regular</p>
        <p className="ft-medium">medium</p>
        <p className="ft-bold">bold</p>
        <p className="ft-09">09</p>
        <p className="ft-08">08</p>
        <p className="ft-07">07</p>
        <p className="ft-06">06</p>
        <Paper width="200px" height="400px" padding="1em">Paper</Paper>
        <Card width="200px" height="400px" padding="1em" bgColor={`rgba(${THEME.color.primary.RGB}, 0.2)`}>Card</Card>
      </Container>
    </>
  )
}
