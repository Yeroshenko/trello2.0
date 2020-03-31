import { boardsApi } from "../api/api"

const SET_ALL_BOARDS_SUCCESS = 'boards/SET_ALL_BOARDS_SUCCESS' 
const SET_BOARD_GROUP_SUCCESS = 'boards/SET_BOARD_GROUP_SUCCESS' 
const SET_BOARD_GROUP_TITLE = 'boards/SET_BOARD_GROUP_TITLE' 
const SET_BOARD = 'boards/SET_BOARD' 

const initialState = { }

const allBoardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_BOARDS_SUCCESS:
      return {
        ...action.allBoards,
      }

    case SET_BOARD_GROUP_SUCCESS: 
      return {
        ...state,
        ...action.newGroup
      }

    case SET_BOARD_GROUP_TITLE: 
      const boardGroup = {...state[action.groupId]}
      boardGroup.title = action.newName

      return {
        ...state,
        ...{[action.groupId]: {...boardGroup} }
      }

    case SET_BOARD: 
      const newGroup = {...state[action.boardGroupId]}
      newGroup.boards = {...newGroup.boards, ...{[action.boardId]: {...action.boardData}}}
      return {
        ...state,
        ...{[action.boardGroupId]: {...newGroup} }
      }

    default:
      return state
  }
}

// Action creaters
export const setAllBoardsSuccess = (allBoards) => ({ type: SET_ALL_BOARDS_SUCCESS, allBoards })
export const setBoardGroupSuccess = (newGroup) => ({ type: SET_BOARD_GROUP_SUCCESS, newGroup })
export const setBoardGroupTitle = (groupId, newName) => ({ type: SET_BOARD_GROUP_TITLE, groupId, newName })
export const setBoard = (boardGroupId, boardId, boardData) => ({ type: SET_BOARD, boardGroupId, boardId, boardData })


// Thank creators
export const setAllBoards = () => async (dispatch) => {
  const response = await boardsApi.getAllBoards()
  
  if (response.status === 200) dispatch(setAllBoardsSuccess({...response.data}))
} // done

export const setNewBoardGroup = (groupTitle) => async (dispatch) => {
  const newObj = {title: groupTitle}
  const response = await boardsApi.createNewBoardGroup(newObj)

  if (response.status === 200) {
    const newGroupId = response.data.name
    const newGroup = {[newGroupId]: {...newObj}}

    dispatch(setBoardGroupSuccess(newGroup))
  }
} // done


export const removeBoardGroup = (boardGroupId) => async (dispatch) => {
  const response = await boardsApi.removeBoardGroup(boardGroupId)
  
  if (response.status === 200) dispatch(setAllBoards())
} // not done


export const editBoardGroupName = (boardGroupId, newName) => async (dispatch) => {
  const response = await boardsApi.editBoardGroupName(boardGroupId, newName)

  if (response.status === 200) {
    dispatch(setBoardGroupTitle(boardGroupId, newName))
  }
} // done


export const createBoard = (boardGroupId, boardData) => async (dispatch) => {
  const response = await boardsApi.createBoard(boardGroupId, boardData)
  
  if (response.status === 200) {
    dispatch(setBoard(boardGroupId, response.data.name, boardData))
  }
} // done

export const removeBoard = (boardGroupId, boardId) => async (dispatch) => {
  const response = await boardsApi.removeBoard(boardGroupId, boardId)

  if (response.status === 200) dispatch(setAllBoards())
}

export const getBoard = (boardGroupId, boardId) => async (dispatch) => {
  
  const response = await boardsApi.getBoard(boardGroupId, boardId)

  if (response.status === 200) dispatch(setAllBoards())
}



export default allBoardsReducer