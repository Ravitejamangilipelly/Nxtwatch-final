import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import {MdClose} from 'react-icons/md'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  AppHomeContainer,
  HomeContainer,
  Search,
  SearchButton,
  SearchContainer,
  RightSection,
  LeftSection,
  Banner,
  BannerContent,
  BannerDescription,
  BannerLogo,
  GetNowButton,
  VideosContainer,
  Heading,
  Description,
  RetryButton,
  LoaderContainer,
  NoVideosContainer,
  NoVideosImage,
  VideosList,
  ClosedButton,
} from './styledComponents'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'
import Header from '../Header'
import Navigation from '../Navigation'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
  emptyResult: 'EMPTYRESULT',
}
export default class Home extends Component {
  state = {
    search: '',
    apiStatus: apiStatusConstants.initial,
    videosData: [],
    bannerDisplay: 'flex',
  }

  componentDidMount() {
    this.getHomeVideosData()
  }

  getHomeVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {search} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      if (fetchedData.videos.length > 0) {
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
          videosData: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({
          apiStatus: apiStatusConstants.emptyResult,
        })
      }
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  updateSearch = event => {
    this.setState({
      search: event.target.value,
    })
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getHomeVideosData()
    }
  }

  renderVideosSuccessView = () => {
    const {videosData} = this.state
    // console.log(videosData)
    return (
      <VideosList>
        {videosData.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosList>
    )
  }

  onRetry = () => {
    this.setState(
      {
        search: '',
      },
      this.getHomeVideosData,
    )
  }

  renderVideosFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoader = () => (
    <LoaderContainer data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </LoaderContainer>
  )

  renderNoVideosView = () => (
    <NxtWatchContext>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#ffffff' : '#000000'
        return (
          <NoVideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading color={textColor}>No Search results found</Heading>
            <Description>
              Try different key words or remove search filter
            </Description>
            <RetryButton onClick={this.onRetry}>Retry</RetryButton>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext>
  )

  close = () =>
    this.setState({
      bannerDisplay: 'none',
    })

  renderVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosSuccessView()
      case apiStatusConstants.failure:
        return this.renderVideosFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.emptyResult:
        return this.renderNoVideosView()
      default:
        return null
    }
  }

  render() {
    const {bannerDisplay, search} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const backgroundColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const appBgColor = isDarkTheme ? '#000000' : '#ffffff'
          return (
            <AppHomeContainer bgColor={appBgColor}>
              <Header />
              <HomeContainer data-testid="home" bgColor={backgroundColor}>
                <LeftSection bgColor={backgroundColor}>
                  <Navigation />
                </LeftSection>
                <RightSection>
                  <Banner
                    bgImage="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
                    bannerDisplay={bannerDisplay}
                    data-testid="banner"
                  >
                    <BannerContent>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerDescription bannerDisplay={bannerDisplay}>
                        Buy Nxt Watch Premium
                      </BannerDescription>
                      <GetNowButton>GET IT NOW</GetNowButton>
                    </BannerContent>
                    <ClosedButton onClick={this.close} data-testid="close">
                      <MdClose size={26} />
                    </ClosedButton>
                  </Banner>
                  <VideosContainer>
                    <SearchContainer>
                      <Search
                        type="search"
                        placeholder="Search"
                        onChange={this.updateSearch}
                        onKeyDown={this.onEnterSearchInput}
                        value={search}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        onClick={this.getHomeVideosData}
                      >
                        <BsSearch className="search-icon" />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderVideosView()}
                  </VideosContainer>
                </RightSection>
              </HomeContainer>
            </AppHomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
