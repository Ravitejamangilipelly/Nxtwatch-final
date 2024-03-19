import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  activeTab: 'Home',
  savedVideos: [],
  toggleTheme: () => {},
  changeActiveTabId: () => {},
  addVideo: () => {},
})
export default NxtWatchContext
