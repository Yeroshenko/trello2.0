import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setAllBoards } from '../../redux/all-boards-reducer'
import BoardsPage from './BoardsPage'

class BoardsPageContainer extends Component {
  componentDidMount() {
    this.props.setAllBoards()
  }
  render() {
    return <BoardsPage allBoards={this.props.allBoards} />
  }
}

const mapStateToProps = state => {
  return {
    allBoards: state.allBoardsReducer
  }
}

export default connect(mapStateToProps, { setAllBoards })(BoardsPageContainer)
