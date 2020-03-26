import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://trello-new.firebaseio.com/'
})

export const boardsApi = {
  getAllBoards() {
    return(
      instance
        .get('allBoards.json')
        // .then((response) =>console.log(response))
        .catch(response => console.log(response))
    )
  },
  getBoardsGroup(groupName) {
    return(
      instance.get(`allBoards/${groupName}.json`)
    )
  } 
}