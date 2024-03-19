import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 10px 30px 20px;
`

export const CardImage = styled.img`
  width: 250px;
`
export const GameDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 0px;
  font-weight: bold;
  color: ${props => props.color};
`

export const Views = styled.p`
  font-size: 14px;
  color: #909090;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`
