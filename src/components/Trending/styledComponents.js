import styled from 'styled-components'

export const AppTrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`
export const TrendingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1140px;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
  overflow-y: auto;
  @media screen and(min-width: 768px) {
    width: 75%;
  }
`
export const Heading = styled.h1`
  font-size: 30px;
  color: ${props => props.color};
  @media screen and(min-width: 768px) {
    font-size: 24px;
  }
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
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  width: 100%;
`
export const HeadingSection = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
  height: 150px;
  gap: 10px;
  background-color: ${props => props.color};
  @media screen and (max-width: 576px) {
    padding: 30px;
    height: 100px;
  }
`
export const Icon = styled.div`
  border-radius: 100%;
  padding: 20px;
  background-color: ${props => props.color};
`
export const TrendingList = styled.ul`
  padding: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
