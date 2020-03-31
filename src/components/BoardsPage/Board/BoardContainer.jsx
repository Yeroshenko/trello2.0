import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeBoard } from '../../../redux/all-boards-reducer'
import Board from './Board'

class BoardContainer extends Component {
  render() {
    return (
      <Board
        board={this.props.board}
        groupId={this.props.groupId}
        boardId={this.props.boardId}
        removeBoard={this.props.removeBoard}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const boardId = ownProps['boardId']
  const groupId = ownProps['groupId']

  return {
    board: state.allBoardsReducer[groupId].boards[boardId]
  }
}

export default connect(mapStateToProps, { removeBoard })(
  BoardContainer
)
