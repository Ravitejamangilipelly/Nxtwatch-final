import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ListItem = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media screen and (max-width: 576px) {
    max-width: 576px;
    flex-direction: column;
    width: 100%;
  }
`

export const CardImage = styled.img`
  width: 350px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0px 20px 10px 20px;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-top: 15px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const Title = styled.p`
  font-size: 20px;
  margin-bottom: 0px;
  width: 350px;
  font-weight: bold;
  color: ${props => props.color};
  @media screen and (max-width: 576px) {
    width: 260px;
  }
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
