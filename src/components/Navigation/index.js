import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {AiFillHome} from 'react-icons/ai'
import {
  NavLink,
  NavBar,
  NavItem,
  NavName,
  NavItemsContainer,
  ContactContainer,
  SocialContainer,
  Image,
  Description,
  ContactHeading,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const Navigation = () => (
  <NxtWatchContext>
    {value => {
      const {isDarkTheme, changeActiveTab, activeTab} = value
      const themeColor = isDarkTheme ? '#000000' : '#ffffff'
      const textColor = isDarkTheme ? '#ffffff' : '#000000'
      const activeTabBg = isDarkTheme ? '#424242' : '#e2e8f0'

      const changeTabHome = () => {
        changeActiveTab('Home')
      }

      const changeTabTrending = () => {
        changeActiveTab('Trending')
      }

      const changeTabGaming = () => {
        changeActiveTab('Gaming')
      }

      const changeTabSavedVideos = () => {
        changeActiveTab('Saved')
      }

      return (
        <>
          <NavBar color={themeColor}>
            <NavItemsContainer>
              <NavLink to="/">
                <NavItem
                  key="home"
                  onClick={changeTabHome}
                  bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                >
                  <AiFillHome
                    size={20}
                    color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  />
                  <NavName
                    color={textColor}
                    bold={activeTab === 'Home' ? 'bold' : 'none'}
                  >
                    Home
                  </NavName>
                </NavItem>
              </NavLink>
              <NavLink to="/trending">
                <NavItem
                  key="trending"
                  onClick={changeTabTrending}
                  bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                >
                  <HiFire
                    size={20}
                    color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  />
                  <NavName
                    color={textColor}
                    bold={activeTab === 'Trending' ? 'bold' : 'none'}
                  >
                    Trending
                  </NavName>
                </NavItem>
              </NavLink>

              <NavLink to="/gaming">
                <NavItem
                  key="gaming"
                  onClick={changeTabGaming}
                  bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                >
                  <SiYoutubegaming
                    size={20}
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  />
                  <NavName
                    color={textColor}
                    bold={activeTab === 'Gaming' ? 'bold' : 'none'}
                  >
                    Gaming
                  </NavName>
                </NavItem>
              </NavLink>

              <NavLink to="/saved-videos">
                <NavItem
                  key="saved"
                  onClick={changeTabSavedVideos}
                  bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                >
                  <BiListPlus
                    size={20}
                    color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
                  />
                  <NavName
                    color={textColor}
                    bold={activeTab === 'Saved' ? 'bold' : 'none'}
                  >
                    Saved videos
                  </NavName>
                </NavItem>
              </NavLink>
            </NavItemsContainer>
            <ContactContainer>
              <ContactHeading color={textColor}>CONTACT US</ContactHeading>
              <SocialContainer>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />

                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />

                <Image
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialContainer>
              <Description color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </Description>
            </ContactContainer>
          </NavBar>
        </>
      )
    }}
  </NxtWatchContext>
)
export default Navigation
