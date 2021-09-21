import React from "react"
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`
const Button = styled.button`
  padding: 1em 1.5em;
  font-weight: 700;
  cursor: pointer;
`

export default function Home() {
  return (
    <Container>
      <div>Hello world!</div>
      <Button>Click Me</Button>
    </Container>
  )
}
