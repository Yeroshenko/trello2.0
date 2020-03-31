import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createBoard } from '../../../redux/all-boards-reducer'
import CreateBoard from './CreateBoard'

class CreateBoardContainer extends Component {
  render() {
    return (
      <CreateBoard
        boardsGroupId={this.props.boardsGroupId}
        createBoard={this.props.createBoard}
      />
    )
  }
}

// const mapStateToProps = state => {}
export default connect(null, { createBoard })(CreateBoardContainer)
