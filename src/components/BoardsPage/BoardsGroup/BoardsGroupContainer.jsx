import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeBoardGroup, editBoardGroupName } from '../../../redux/all-boards-reducer'
import BoardsGroup from './BoardsGroup'

class BoardsGroupContainer extends Component {
  render() {
    return (
      <BoardsGroup
        boardsGroup={this.props.boardsGroup}
        boardsGroupId={this.props.boardsGroupId}
        edit={this.props.editBoardGroupName}
        remove={this.props.removeBoardGroup}
      />
    )
  }
}

const mapStateToProps = (state, boardsGroupId) => {
  const id = Object.values(boardsGroupId)[0]
  return {
    boardsGroup: state.allBoardsReducer[id]
  }
}

export default connect(mapStateToProps, { removeBoardGroup, editBoardGroupName })(
  BoardsGroupContainer
)
