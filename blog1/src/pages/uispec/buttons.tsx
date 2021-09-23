import React from "react"
// import styled from 'styled-components'
import { THEME } from '../../config'
import { WebPageHead, VerticalMenu, Button } from '../../components'
import GlobalStyle from "../../global.styled"
import { PageContainer, MenuArea, ContentArea, MENU_ITEMS } from '../modules/uispec'

const Buttons = () => (
  <div>
    <div style={{marginTop: '1em'}}><Button >Normal</Button></div>
    <div style={{marginTop: '1em'}}><Button color="white">White</Button></div>
    <div style={{marginTop: '1em'}}><Button color="gray">White</Button></div>
    <div style={{marginTop: '1em'}}><Button size="large">Button</Button></div>
    <div style={{marginTop: '1em'}}><Button size="small">Button</Button></div>
  </div>
)

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <WebPageHead context={{ title: '界面设计规格' }} />

      <PageContainer className="flex-between debugx">

        <MenuArea className="debugx">
          <VerticalMenu items={MENU_ITEMS} />
        </MenuArea>

        <ContentArea>
          <Buttons />
        </ContentArea>
        
      </PageContainer>
    </>
  )
}
