import React from "react"
// import styled from 'styled-components'
import { THEME } from '../../config'
import { WebPageHead, VerticalMenu, Card } from '../../components'
import GlobalStyle from "../../global.styled"
import { PageContainer, MenuArea, ContentArea, MENU_ITEMS } from '../modules/uispec'

const Color = () => (
  <div className="flex-center flex-wrap" style={{marginTop: '1em', gap: '1em', lineHeight: '1.6em'}}>
    <Card width="160px" height="160px" padding="1em" color="#fff" bgColor={`rgba(${THEME.color.primary.RGB}, 1)`}>
      <p>primary</p>
      <p>{THEME.color.primary.HEX}</p>
      <p>{THEME.color.primary.RGB}</p>
      <p>{THEME.color.primary.HSL}</p>
    </Card>
    
    <Card width="160px" height="160px" padding="1em" color="#fff" bgColor={`rgba(${THEME.color.secondary.RGB}, 1)`}>
      <p>secondary</p>
      <p>{THEME.color.secondary.HEX}</p>
      <p>{THEME.color.secondary.RGB}</p>
      <p>{THEME.color.secondary.HSL}</p>
    </Card>
    
    <Card width="160px" height="160px" padding="1em" bgColor={`rgba(${THEME.color.white.RGB}, 1)`}>
      <p>white</p>
      <p>{THEME.color.white.HEX}</p>
      <p>{THEME.color.white.RGB}</p>
      <p>{THEME.color.white.HSL}</p>
    </Card>
    
    <Card width="160px" height="160px" padding="1em" color="#fff" bgColor={`rgba(${THEME.color.black.RGB}, 1)`}>
      <p>black</p>
      <p>{THEME.color.black.HEX}</p>
      <p>{THEME.color.black.RGB}</p>
      <p>{THEME.color.black.HSL}</p>
    </Card>
    
    <Card width="160px" height="160px" padding="1em" color="#fff" bgColor={`rgba(${THEME.color.link.RGB}, 1)`}>
      <p>link</p>
      <p>{THEME.color.link.HEX}</p>
      <p>{THEME.color.link.RGB}</p>
      <p>{THEME.color.link.HSL}</p>
    </Card>

    <Card width="160px" height="160px" padding="1em" bgColor={`rgba(${THEME.color.black.RGB}, .1)`}>
      <p>gray .1</p>
    </Card>
    
    <Card width="160px" height="160px" padding="1em" color="#fff" bgColor={`rgba(${THEME.color.black.RGB}, .2)`}>
      <p>gray .2</p>
    </Card>
    
    <Card width="160px" height="160px" padding="1em" color="#fff" bgColor={`rgba(${THEME.color.black.RGB}, .3)`}>
      <p>gray .3</p>
    </Card>
    
    <Card width="160px" height="160px" padding="1em" color="#fff" bgColor={`rgba(${THEME.color.black.RGB}, .4)`}>
      <p>gray .4</p>
    </Card>
    
    <Card width="160px" height="160px" padding="1em" color="#fff" bgColor={`rgba(${THEME.color.black.RGB}, .5)`}>
      <p>gray .5</p>
    </Card>
    
    <Card width="160px" height="160px" padding="1em" color="#fff" bgColor={`rgba(${THEME.color.black.RGB}, .6)`}>
      <p>gray .6</p>
    </Card>
    
    <Card width="160px" height="160px" padding="1em" color="#fff" bgColor={`rgba(${THEME.color.black.RGB}, .7)`}>
      <p>gray .7</p>
    </Card>
  </
  div>
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
          <Color />
        </ContentArea>
        
      </PageContainer>
    </>
  )
}
