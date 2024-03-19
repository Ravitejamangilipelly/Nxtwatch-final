import styled from 'styled-components'

export const AppHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`
export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1140px;
  min-height: 90vh;
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
  @media screen and(min-width:768px) {
    width: 75%;
  }
`

export const Banner = styled.div`
  display: ${props => (props.bannerDisplay === 'flex' ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-around;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 240px;
  padding-top: 20px;
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`
export const BannerLogo = styled.img`
  width: 150px;
  @media screen and(max-width:576px) {
    width: 100px;
  }
`
export const BannerDescription = styled.p`
  display: ${props => (props.bannerDisplay === 'flex' ? 'flex' : 'none')};
  font-size: 20px;
  width: 350px;
  @media screen and(max-width:576px) {
    width: 100px;
  }
`
export const GetNowButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  color: #181818;
  font-weight: bold;
  border: 1px solid #181818;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and(max-width:576px) {
    max-width: 576px;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 576px) {
    width: 300px;
    padding: 10px;
  }
`
export const Search = styled.input`
  padding: 8px;
  outline: none;
  border: 1px solid #909090;
  line-height: 20px;
  width: 300px;
  @media screen and (max-width: 576px) {
    width: 250px;
  }
`
export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  border: 1px solid #909090;
  padding: 8px;
  width: 50px;
  line-height: 20px;
`

export const Heading = styled.h1`
  font-size: 30px;
  color: ${props => props.color};
  @media screen and(min-width: 768px) {
    font-size: 24px;
  }
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
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`
export const NoVideosImage = styled.img`
  width: 350px;
`
export const VideosList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  @media screen and(max-width:576px) {
    padding-left: 10px;
    padding-right: 10px;
    max-width: 576px;
  }
`
export const ClosedButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
`
