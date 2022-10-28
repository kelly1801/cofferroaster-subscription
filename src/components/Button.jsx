import React from 'react'
import styled from 'styled-components'
const Button = ({children}) => {
  return (
    <Btn >
{children}
    </Btn>
  )
}

export default Button

const Btn = styled.button`
background-color: var(--primary);
color: var(--white);
border: none;
padding: 0.5rem 1rem;
border-radius: 0.5rem;
cursor: pointer;

:hover {
    background-color: #66D2CF;
}

:disabled {
    background-color: #E2DEDB;
}
`

