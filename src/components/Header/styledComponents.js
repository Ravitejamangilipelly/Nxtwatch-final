import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  width: 100%;
  padding: 20px;
  font-family: 'Roboto';
  position: fixed;
  top: 0;
  height: 80px;
  background-color: ${props => props.color};
`

export const HeaderOptions = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`
export const Logo = styled.img`
  width: 120px;
  height: 30px;
`
export const ProfileImageContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const MenuButton = styled.button`
  display: flex;
  cursor: pointer;
  background-color: transparent;
  border: none;
  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  width: 30px;
`
export const LogoutButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: 5px 10px 5px 10px;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-weight: bold;
  width: 100px;
  font-size: 16px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
`
export const LogoutIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    display: none;
    border: none;
  }
`
export const PopupBgContainer = styled.div`
  background-color: #cccccc;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color};
  padding: 40px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
`
export const ControllerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 30px;
`
export const Text = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-weight: 500;
`
export const ConfirmButton = styled.button`
  color: white;
  background-color: #3b82f6;
  border: none;
  padding: 10px;
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
`
export const CancelButton = styled.button`
  color: #475569;
  background-color: transparent;
  border: 1px solid #475569;
  padding: 10px;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
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
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 576px;
  background-color: ${props => props.bgColor};
`
export const NavItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0px;
  width: 350px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const MenuPopUpBgContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
