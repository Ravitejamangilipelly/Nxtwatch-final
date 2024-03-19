import {Component} from 'react'
import {BiListPlus} from 'react-icons/bi'

import {
  AppSavedVideosContainer,
  SavedVideosContainer,
  RightSection,
  LeftSection,
  Heading,
  Icon,
  HeadingSection,
  SavedVideosList,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  Description,
} from './styledComponents'

import Header from '../Header'
import SavedVideosCard from '../SavedVideosCard'
import Navigation from '../Navigation'
import NxtWatchContext from '../../context/NxtWatchContext'

export default class SavedVideos extends Component {
  renderSavedVideosView = () => (
    <NxtWatchContext>
      {value => {
        const {isDarkTheme, savedVideos} = value
        const iconBg = isDarkTheme ? '#424242' : '#e2e8f0'
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        const headingSectionColor = isDarkTheme ? '#212121 ' : '#f4f4f4'
        return (
          <>
            <HeadingSection color={headingSectionColor}>
              <Icon color={iconBg}>
                <BiListPlus size={30} color="red" />
              </Icon>

              <Heading color={headingColor}>Saved Videos</Heading>
            </HeadingSection>
            <SavedVideosList>
              {savedVideos.map(eachVideo => (
                <SavedVideosCard
                  key={eachVideo.id}
                  savedVideosDetails={eachVideo}
                />
              ))}
            </SavedVideosList>
          </>
        )
      }}
    </NxtWatchContext>
  )

  renderNoSavedVideosView = () => (
    <NxtWatchContext>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        return (
          <NoSavedVideosContainer>
            <NoSavedVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading color={headingColor}>No saved videos found</Heading>
            <Description>
              You can save your videos while watching them
            </Description>
          </NoSavedVideosContainer>
        )
      }}
    </NxtWatchContext>
  )

  render() {
    return (
      <NxtWatchContext>
        {value => {
          const {isDarkTheme, savedVideos} = value
          const backgroundColor = isDarkTheme ? '#0f0f0f ' : '#f9f9f9'
          const appBgColor = isDarkTheme ? '#000000' : '#ffffff'
          console.log(savedVideos.length)
          return (
            <AppSavedVideosContainer bgColor={appBgColor}>
              <Header />
              <SavedVideosContainer
                data-testid="savedVideos"
                bgColor={backgroundColor}
              >
                <LeftSection bgColor={backgroundColor}>
                  <Navigation />
                </LeftSection>
                <RightSection>
                  {savedVideos.length > 0
                    ? this.renderSavedVideosView()
                    : this.renderNoSavedVideosView()}
                </RightSection>
              </SavedVideosContainer>
            </AppSavedVideosContainer>
          )
        }}
      </NxtWatchContext>
    )
  }
}
