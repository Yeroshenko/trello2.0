import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setNewBoardGroup } from '../../../redux/all-boards-reducer'
import CreateBoardGroup from './CreateBoardGroup'

class CreateBoardGroupContainer extends Component {
  render() {
    return <CreateBoardGroup setNewBoardGroup={this.props.setNewBoardGroup} />
  }
}

export default connect(null, { setNewBoardGroup })(CreateBoardGroupContainer)
