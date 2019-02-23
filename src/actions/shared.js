import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { getInitialData, getUsers } from '../utils/api'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}