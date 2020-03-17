import React from 'react'
import styled from 'styled-components'

export const NavigationSpan = styled.span`
    font-weight: 500;
    font-size: 16px;
    color: ${ ({isActive}) => isActive ? '#2bc253 !important' : 'white'};
    
`
