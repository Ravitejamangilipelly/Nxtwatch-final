import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`
export const FailureImage = styled.img`
  width: 350px;
  margin-top: 20px;
`
export const Heading = styled.h1`
  font-size: 24px;
  color: ${props => props.color};
`
export const Description = styled.p`
  font-size: 18px;
  width: 400px;
  text-align: center;
  color: #616e7c;
`
export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  padding: 10px;
  border: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 100px;
  margin-bottom: 20px;
`
