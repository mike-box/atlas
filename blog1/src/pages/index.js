import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components'
import { WebPageHead } from '../components'
import GlobalStyle from "../global.styled";

const Container = styled.div`
  height: 100vh;
  gap: 1em;
`

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Container className="flex-center align-center direction-col debug">

        <WebPageHead context={{ title: '首页' }} />
        <Link to="uispec">UI Spec</Link>
      </Container>
    </>
  )
}
