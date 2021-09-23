import styled from 'styled-components'

export const PageContainer = styled.div`
  height: 100vh;
  gap: 1em;
`
export const MenuArea = styled.div`
  flex: none;
`;
export const ContentArea = styled.div`
  flex: 1;
`;
export const MENU_ITEMS = [
  { key: '0', title: 'Home',        linkTo: '/'},
  { key: '1', title: 'Typography',  linkTo: '/uispec'},
  { key: '2', title: 'Shape',       linkTo: '/uispec/shape'},
  { key: '3', title: 'Color',       linkTo: '/uispec/color'},
]
