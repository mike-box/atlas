import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components'

const MenuBlock = styled.ul`
  padding: 1em 1em 1em 2em;

  & ul {
    padding: .5em 1em .5em 2em;
  }
`;
const MenuItem = styled.li`
  line-height: 1.5em;
`;

export const VerticalMenu = ({items}) => (
  !items.length ? null :
  <MenuBlock className="debugx">
  { items.map(item => (
    <MenuItem key={item.key}>
      { !item.linkTo ?
        <p>{item.title}</p>
        :
        <Link to={item.linkTo}>{item.title}</Link>
      }
      { !!item.items?.length && 
        <VerticalMenu items={item.items} />
      }
    </MenuItem>
  )) }
  </MenuBlock>
)
