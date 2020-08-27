import { createStore } from 'redux'

const add_user = (nam) => {
    return {
        type: ADD_USER
    }
}

const fetch_user = () => {
    return {
        type: FETCH_USER
    }
}

const user = ['sahil']



let store = createStore (nameChanger)

store.subscribe(() => console.log(store.GetState()));

store.dispatch(add_user("sahil"))