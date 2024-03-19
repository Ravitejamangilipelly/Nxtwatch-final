import {
  ListItem,
  CardImage,
  GameDetailsContainer,
  Title,
  Views,
  NavLink,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const GamingCard = props => (
  <NxtWatchContext>
    {value => {
      const {isDarkTheme} = value
      const {gameDetails} = props
      const titleColor = isDarkTheme ? '#ffffff' : '#000000'
      const {id, thumbnailUrl, title, viewsCount} = gameDetails
      return (
        <NavLink to={`/videos/${id}`}>
          <ListItem>
            <CardImage src={thumbnailUrl} alt="video thumbnail" />
            <GameDetailsContainer>
              <Title color={titleColor}>{title}</Title>

              <Views>{viewsCount} Watching WorldWide</Views>
            </GameDetailsContainer>
          </ListItem>
        </NavLink>
      )
    }}
  </NxtWatchContext>
)
export default GamingCard
