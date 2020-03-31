import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://trello-new.firebaseio.com/'
})

export const boardsApi = {
  getAllBoards() {
    return (
      instance
        .get('allBoards.json')
        .catch(response => console.log(response))
    )
  },
  getBoardsGroup(groupName) {
    return (
      instance
        .get(`allBoards/${groupName}.json`)
        .catch(response => console.log(response))
    )
  },
  createNewBoardGroup(newGroup) {
    return (
      instance
        .post(`allBoards.json`, newGroup)
        .catch(response => console.log(response))
    )
  },
  editBoardGroupName(boardGroupId, newName) {
    return (
      instance
        .patch(`allBoards/${boardGroupId}.json`, {title: newName}) 
        .catch(response => console.log(response))
    )
  },
  removeBoardGroup(boardGroupId) {
    return (
      instance
        .delete(`allBoards/${boardGroupId}.json`)
        .catch(response => console.log(response))
    )
  },
  createBoard(boardGroupId, boardData) {
    return (
      instance
        .post(`allBoards/${boardGroupId}/boards.json`, boardData)
        .catch(response => console.log(response))
    )
  },
  removeBoard(boardGroupId, boardId) {
    return (
      instance
        .delete(`allBoards/${boardGroupId}/boards/${boardId}.json`)
        .catch(response => console.log(response))
    )
  },
  getBoard(boardGroupId, boardId){
    return (
      instance
        .get(`allBoards/${boardGroupId}/boards/${boardId}.json`) 
        .catch(response => console.log(response))
    )
  }
}