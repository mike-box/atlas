import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components'
import { WebPageHead, VerticalMenu } from '../components'
import GlobalStyle from "../global.styled";

const Container = styled.div`
  height: 100vh;
  gap: 1em;
`
const MenuArea = styled.div`
  flex: none;
`;
const ContentArea = styled.div`
  flex: 1;
`;

const MENU_ITEMS = [
  { key: 'spec',  title: 'UI Spec', linkTo: '/uispec'},
  { key: 'a',     title: 'Menu 1', },
  { key: 'b',     title: 'Menu 2', items: [
    { key: '2.1', title: '2.1', },
    { key: '2.2', title: '2.2', },
  ]},
  { key: '4',     title: 'Menu 4', items: [
    { key: '4.1', title: '4.1', },
    { key: '4.2', title: '4.2', },
    { key: '4.3', title: '4.3', },
  ]},
]

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <WebPageHead context={{ title: '首页' }} />

      <Container className="flex-between debugx">

        <MenuArea className="debugx">
          <VerticalMenu items={MENU_ITEMS} />
        </MenuArea>

        <ContentArea>
        </ContentArea>
        
      </Container>
    </>
  )
}
