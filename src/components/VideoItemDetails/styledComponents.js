import styled from 'styled-components'

export const VideoItemDetailsBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  max-width: 1140px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 576px) {
    max-width: 576px;
  }
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
  padding: 20px;
  overflow-y: auto;
  @media screen and(min-width: 768px) {
    width: 75%;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  width: 100%;
`
export const VideoTitle = styled.p`
  font-size: 16px;
  margin-bottom: 0px;
  font-weight: bold;
  margin-top: 20px;
  color: ${props => props.color};
`
export const ViewsAndDate = styled.p`
  font-size: 14px;
  color: #1e293b;
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
export const ViewsAndControllersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #cccccc;
  margin-top: 10px;
  padding-bottom: 20px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const ControllersSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: #1e293b;
`
export const LikeButtonContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`
export const DisLikeButtonContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
`
export const SavedButtonContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.saved === true ? '#4f46e5' : '#64748b')};
`

export const ButtonText = styled.p`
  border: none;
  font-weight: 500;
  color: ${props => props.color};
`

export const ChannelContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 15px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelSubscribers = styled.p`
  font-size: 14px;
  color: #616e7c;
`
export const ChannelName = styled.p`
  font-size: 16px;
  margin-bottom: 0px;
  color: ${props => props.color};
`
export const ChannelDescription = styled.p`
  font-size: 14px;
  color: ${props => props.color};
`
