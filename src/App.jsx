import React from 'react'
import { Provider } from 'react-redux'

import store from './redux/store'
import { Header, BoardsPageContainer } from './components'
import './App.sass'

const App = () => {

  return (
    <Provider store={store}>
      <div className='app'>
        <Header />
        <BoardsPageContainer />
      </div>
    </Provider>
  )
}

export default App
