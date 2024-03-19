import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 80px;
  min-height: 90vh;
  background-color: ${props => props.color};
  padding-left: 10px;
  padding-right: 15px;
  position: fixed;
`
export const NavItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0px;
`

export const NavItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 10px;
  background-color: ${props => props.bgColor};
`
export const NavName = styled.p`
  font-size: 14px;
  font-weight: ${props => props.bold};
  color: ${props => props.color};
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`
export const ContactHeading = styled.p`
  font-size: 18px;
  color: ${props => props.color};
  font-weight: bold;
`

export const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const Image = styled.img`
  width: 30px;
  border-radius: 100%;
`
export const Description = styled.p`
  font-size: 16px;
  width: 200px;
  font-weight: bold;
  color: ${props => props.color};
  margin-bottom: 25px;
`
