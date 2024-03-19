import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  AppTrendingContainer,
  TrendingContainer,
  RightSection,
  LeftSection,
  LoaderContainer,
  Heading,
  Icon,
  HeadingSection,
  TrendingList,
} from './styledComponents'

import FailureView from '../FailureView'
import Header from '../Header'
import TrendingCard from '../TrendingCard'
import Navigation from '../Navigation'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}
export default class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingData: [],
  }

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        channelName: eachVideo.channel.name,
        channelProfileLogo: eachVideo.channel.profile_image_url,
        publishedDate: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewsCount: eachVideo.view_count,
      }))
      this.setState({
        trendingData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderTrendingSuccessView = () => {
    const {trendingData} = this.state
    return (
      <NxtWatchContext>
        {value => {
          const {isDarkTheme} = value
          const iconBg = isDarkTheme ? '#424242' : '#e2e8f0'
          const headingColor = isDarkTheme ? '#ffffff' : '#000000'
          const headingSectionColor = isDarkTheme ? '#212121 ' : '#f4f4f4'
          return (
            <>
              <HeadingSection color={headingSectionColor}>
                <Icon color={iconBg}>
                  <HiFire size={30} color="red" />
                </Icon>

                <Heading color={headingColor}>Trending</Heading>
              </HeadingSection>
              <TrendingList>
                {trendingData.map(eachVideo => (
                  <TrendingCard
                    key={eachVideo.id}
                    trendingVideoDetails={eachVideo}
                  />
                ))}
              </TrendingList>
            </>
          )
        }}
      </NxtWatchContext>
    )
  }

  renderTrendingFailureView = () => (
    <FailureView onRetry={this.getTrendingData} />
  )

  renderLoader = () => (
    <LoaderContainer data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </LoaderContainer>
  )

  renderTrendingView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingSuccessView()
      case apiStatusConstants.failure:
        return this.renderTrendingFailureView()
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
            <AppTrendingContainer bgColor={appBgColor}>
              <Header />
              <TrendingContainer
                data-testid="trending"
                bgColor={backgroundColor}
              >
                <LeftSection bgColor={backgroundColor}>
                  <Navigation />
                </LeftSection>
                <RightSection>{this.renderTrendingView()}</RightSection>
              </TrendingContainer>
            </AppTrendingContainer>
          )
        }}
      </NxtWatchContext>
    )
  }
}
