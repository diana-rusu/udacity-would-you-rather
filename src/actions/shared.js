import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { getInitialData, getUsers } from '../utils/api'
import { setAuthedUser } from '../actions/authedUser'

// const AUTHED_ID = 'johndoe'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            // dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}

export function getInitialUsers() {
    return (dispatch) => {
        return getUsers()
        .then(({users}) => {
            dispatch(receiveUsers(users))
        })
    }
}