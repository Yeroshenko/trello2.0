import { boardsApi } from "../api/api"

const SET_ALL_BOARDS_SUCCESS = 'boards/SET_ALL_BOARDS_SUCCESS' 

const initialState = { }

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_BOARDS_SUCCESS:
      return {
        ...state,
        allBoards: action.allBoards
      }

    default:
      return state
  }
}

// Action creaters
export const setAllBoardsSuccess = (allBoards) => ({ type: SET_ALL_BOARDS_SUCCESS, allBoards })


// Thank creators
export const setAllBoards = () => async (dispatch) => {
  const response = await boardsApi.getAllBoards()

  if (response.status === 200) dispatch(setAllBoardsSuccess(response.data))
}

// export const setBoardsGroup = () => async (dispatch) => {
//   const response = await boardsApi.getBoardsGroup()

//   if (response.status === 200) dispatch(setBoardsGroupSuccess(response.data))
// }


export default boardsReducer