import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {
  AppGamingContainer,
  GamingContainer,
  RightSection,
  LeftSection,
  LoaderContainer,
  Heading,
  Icon,
  HeadingSection,
  GamingList,
} from './styledComponents'

import FailureView from '../FailureView'
import Header from '../Header'
import GamingCard from '../GamingCard'
import Navigation from '../Navigation'
import NxtWatchContext from '../../context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}
export default class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingData: [],
  }

  componentDidMount() {
    this.getGamingData()
  }

  getGamingData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewsCount: eachVideo.view_count,
      }))
      this.setState({
        gamingData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderGamingSuccessView = () => (
    <NxtWatchContext>
      {value => {
        const {isDarkTheme} = value
        const {gamingData} = this.state
        const iconBg = isDarkTheme ? '#424242' : '#e2e8f0'
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        const headingSectionColor = isDarkTheme ? '#212121 ' : '#f4f4f4'
        return (
          <>
            <HeadingSection color={headingSectionColor}>
              <Icon color={iconBg}>
                <SiYoutubegaming size={30} color="red" />
              </Icon>

              <Heading color={headingColor}>Gaming</Heading>
            </HeadingSection>
            <GamingList>
              {gamingData.map(eachGame => (
                <GamingCard key={eachGame.id} gameDetails={eachGame} />
              ))}
            </GamingList>
          </>
        )
      }}
    </NxtWatchContext>
  )

  renderGamingFailureView = () => <FailureView onRetry={this.getGamingData} />

  renderLoader = () => (
    <LoaderContainer data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </LoaderContainer>
  )

  renderGamingView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingSuccessView()
      case apiStatusConstants.failure:
        return this.renderGamingFailureView()
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
            <AppGamingContainer bgColor={appBgColor}>
              <Header />
              <GamingContainer data-testid="gaming" bgColor={backgroundColor}>
                <LeftSection bgColor={backgroundColor}>
                  <Navigation />
                </LeftSection>
                <RightSection>{this.renderGamingView()}</RightSection>
              </GamingContainer>
            </AppGamingContainer>
          )
        }}
      </NxtWatchContext>
    )
  }
}
