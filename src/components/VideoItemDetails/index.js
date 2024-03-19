import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import ReactPlayer from 'react-player/youtube'
import {
  VideoItemDetailsContainer,
  VideoItemDetailsBgContainer,
  LeftSection,
  RightSection,
  LoaderContainer,
  ViewsAndControllersContainer,
  LikeButtonContainer,
  DisLikeButtonContainer,
  SavedButtonContainer,
  ControllersSection,
  ButtonText,
  ChannelContainer,
  ChannelName,
  ChannelImage,
  ChannelDescription,
  ChannelInfo,
  ChannelSubscribers,
  VideoTitle,
} from './styledComponents'
import FailureView from '../FailureView'
import {ViewsAndDate, Dot} from '../VideoItem/styledComponents'
import Header from '../Header'
import Navigation from '../Navigation'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

export default class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoItemDetails: {},
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoItemData()
  }

  getVideoItemData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedData = {
        id: data.video_details.id,
        channelName: data.video_details.channel.name,
        description: data.video_details.description,
        channelProfileLogo: data.video_details.channel.profile_image_url,
        channelSubscriberCount: data.video_details.channel.subscriber_count,
        publishedDate: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewsCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
      }
      // console.log(updatedData)
      this.setState({
        videoItemDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.getVideoItemData()
  }

  likeVideo = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  dislikeVideo = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderVideoItemSuccessView = () => {
    const {isLiked, isDisLiked} = this.state
    const {videoItemDetails} = this.state

    return (
      <NxtWatchContext>
        {value => {
          const {isDarkTheme, addVideo, savedVideos} = value
          const themeColor = isDarkTheme ? '#ffffff' : '#000000'
          const {
            channelName,
            description,
            channelProfileLogo,
            publishedDate,
            title,
            viewsCount,
            videoUrl,
            channelSubscriberCount,
          } = videoItemDetails
          let isSaved

          const videoIndex = savedVideos.findIndex(
            eachVideo => eachVideo.id === videoItemDetails.id,
          )
          if (videoIndex === -1) {
            isSaved = false
          } else {
            isSaved = true
          }
          const savedText = isSaved ? 'Saved' : 'Save'

          const saveVideo = () => {
            addVideo(videoItemDetails)
          }

          const likeColor = isLiked ? '#2563eb' : '#64748b'
          const disLikeColor = isDisLiked ? '#2563eb' : '#64748b'

          return (
            <>
              <ReactPlayer url={videoUrl} controls width="100%" />

              <VideoTitle color={themeColor}>{title}</VideoTitle>
              <ViewsAndControllersContainer>
                <ViewsAndDate>
                  {viewsCount} views <Dot> &#8226;</Dot>
                  {publishedDate}
                </ViewsAndDate>
                <ControllersSection>
                  <LikeButtonContainer onClick={this.likeVideo}>
                    <BiLike size={20} color={likeColor} />
                    <ButtonText color={likeColor}>Like</ButtonText>
                  </LikeButtonContainer>

                  <DisLikeButtonContainer onClick={this.dislikeVideo}>
                    <BiDislike size={20} color={disLikeColor} />
                    <ButtonText color={disLikeColor}>Dislike</ButtonText>
                  </DisLikeButtonContainer>

                  <SavedButtonContainer saved={isSaved} onClick={saveVideo}>
                    <BiListPlus size={20} />
                    <ButtonText>{savedText}</ButtonText>
                  </SavedButtonContainer>
                </ControllersSection>
              </ViewsAndControllersContainer>

              <ChannelContainer>
                <ChannelImage src={channelProfileLogo} alt="channel logo" />
                <ChannelInfo>
                  <ChannelName color={themeColor}>{channelName}</ChannelName>
                  <ChannelSubscribers>
                    {channelSubscriberCount} Subscribers
                  </ChannelSubscribers>
                  <ChannelDescription color={themeColor}>
                    {description}
                  </ChannelDescription>
                </ChannelInfo>
              </ChannelContainer>
            </>
          )
        }}
      </NxtWatchContext>
    )
  }

  renderVideoItemFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoader = () => (
    <LoaderContainer data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </LoaderContainer>
  )

  renderVideoItemDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemSuccessView()
      case apiStatusConstants.failure:
        return this.renderVideoItemFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext>
        {value => {
          const {isDarkTheme} = value
          const backgroundColor = isDarkTheme ? '#0f0f0f ' : '#f9f9f9'
          const appBgColor = isDarkTheme ? '#000000' : '#ffffff'
          return (
            <VideoItemDetailsBgContainer bgColor={appBgColor}>
              <Header />
              <VideoItemDetailsContainer
                data-testid="videoItemDetails"
                bgColor={backgroundColor}
              >
                <LeftSection bgColor={backgroundColor}>
                  <Navigation />
                </LeftSection>
                <RightSection>{this.renderVideoItemDetailsView()}</RightSection>
              </VideoItemDetailsContainer>
            </VideoItemDetailsBgContainer>
          )
        }}
      </NxtWatchContext>
    )
  }
}
