import React from "react"
// import styled from 'styled-components'
import { THEME } from '../../config'
import { WebPageHead, VerticalMenu, Container, Paper, Card } from '../../components'
import GlobalStyle from "../../global.styled"
import { PageContainer, MenuArea, ContentArea, MENU_ITEMS } from '../modules/uispec'

const Shape = () => (
  <div className="flex-center" style={{marginTop: '1em'}}>
    <Paper width="480px" height="720px" padding="1em">Paper</Paper>
    <Card width="360px" height="240px" padding="1em" bgColor={`rgba(${THEME.color.primary.RGB}, 0.2)`}>Card</Card>
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
          <Shape />
        </ContentArea>
        
      </PageContainer>
    </>
  )
}
