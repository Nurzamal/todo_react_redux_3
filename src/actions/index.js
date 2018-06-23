import types from '../constants'
import axios from 'axios'

// Helper functions to dispatch actions, optionally with payloads

const apiUrl = 'http://localhost:3001/api/tasks/all';

export const fetchTodosSuccess = (todos) => {
    return {
        type: types.FETCH,
        todos
    }
};

export const createTodo = (todo) => {
    return {
        type: types.ADD,
        todo
    }
};

export const changeState = (todo) => {
    return {
        type: types.CROSS_OUT,
        todo
    }
};

export const updateTodo = (todo) => {
    return {
        type: types.SAVE,
        todo
    }
};

export const removeTodo = (todoId) => {
    return {
        type: types.REMOVE,
        todoId
    }
};

export const actionCreators = {
    fetch: (todos) => {
        return (dispatch) => {
            return axios.get(apiUrl)
                .then((todos) => {
                    dispatch(fetchTodosSuccess(todos.data));
                })
                .catch((error) => {
                    console.log('Cannot fetch', error)
                })
        }
    },
    add: (text) => {
        return (dispatch) => {
            return axios.post(`http://localhost:3001/api/tasks/`, {
                    text: text,
                    done: false
                })
                .then((todo) =>
                    dispatch(createTodo(todo.data))
                )
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    crossOut: index => {
        return (dispatch) => {
            return axios.put(`http://localhost:3001/api/tasks/${index}/changeState`)
                .then((todo) => {
                    dispatch(changeState(todo.data));
                    console.log('Successfully switched')
                })
                .catch((error) => {
                    console.log('Cannot switch', error)
                })
        }
    },
    save: (todoId, text) => {
        return (dispatch) => {
            return axios.put(`http://localhost:3001/api/tasks/${todoId}`, { text })
                .then((todo) => {
                    dispatch(updateTodo(todo.data));
                    console.log('Successfully updated')
                })
                .catch((error)=> {
                    console.log('Cannot update', error)
                })
        }
    },

    remove: (index) => dispatch => {
        axios.delete(`http://localhost:3001/api/tasks/${index}`)
            .then((msg) => {
                dispatch(removeTodo(index));
                console.log('Successfully deleted')
            })
            .catch((error) => {
                console.log('Cannot remove', error)
            })
    }

};