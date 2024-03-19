import styled from 'styled-components'

export const LoginAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
`
export const LoginCardForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  max-width: 350px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px 20px 30px 20px;
  border-radius: 5px;
`
export const Logo = styled.img`
  width: 150px;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 600;
  color: ${props => (props.theme === 'true' ? ' #606060' : '#ffffff')};
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`
export const ShowPassword = styled.input`
  font-size: 14px;
  margin-bottom: 10px;
`
export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px 10px 8px 10px;
  outline: none;
  border: 1px solid #cccccc;
  border-radius: 5px;
  color: #606060;
`
export const LoginButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  border: 2px solid #3b82f6;
  color: #ffffff;
  font-weight: bold;
  background-color: #3b82f6;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 14px;
  margin-top: 5px;
`
