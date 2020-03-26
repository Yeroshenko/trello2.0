import React, { Component } from 'react'
import { connect } from 'react-redux'

import BoardsGroup from './BoardsGroup'

class BoardsGroupContainer extends Component {

  render() {
    return <BoardsGroup boardsGroup={this.props.boardsGroup}/>
  }
}

const mapStateToProps = (state, boardsGroupId) => {
  const id = Object.values(boardsGroupId)[0]
  return {
    boardsGroup: state.boardsReducer.allBoards[id]
  }
}

export default connect(mapStateToProps)(BoardsGroupContainer)
