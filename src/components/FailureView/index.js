import {
  FailureContainer,
  FailureImage,
  Heading,
  Description,
  RetryButton,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const FailureView = props => (
  <NxtWatchContext>
    {value => {
      const {isDarkTheme} = value
      const {onRetry} = props
      const textColor = isDarkTheme ? '#ffffff' : '#000000'

      const onClickRetry = () => {
        onRetry()
      }

      return (
        <FailureContainer>
          <FailureImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure view"
          />
          <Heading color={textColor}>Oops! Something Went Wrong</Heading>
          <Description>
            We are having some trouble to complete your request. Please try
            again.
          </Description>
          <RetryButton onClick={onClickRetry} type="button">
            Retry
          </RetryButton>
        </FailureContainer>
      )
    }}
  </NxtWatchContext>
)
export default FailureView
