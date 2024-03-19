import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) {
    width: 270px;
    margin-right: 10px;
    margin-left: 10px;
  }
`

export const CardImage = styled.img`
  width: 100%;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-top: 15px;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const Title = styled.p`
  font-size: 16px;
  margin-bottom: 0px;
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-size: 16px;
  margin-bottom: 0px;
  color: #909090;
`

export const ViewsAndDate = styled.p`
  font-size: 14px;
  color: #909090;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
