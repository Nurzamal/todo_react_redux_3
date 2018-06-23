import todos   from '../reducers/todos';
import React        from 'react';

describe('Todo reducer tests', () => {
  const state = [{
    "text": "Redux with api ",
    "completed": false,
    "id": 123123
  }];

  it('ADD_TODO test', () => {
    const action = {
      type:'ADD_TODO',
      payload:{
        data:{
          "text": "Redux with api ",
          "completed": false,
          "id": 123123
        },
      }
    }
    expect(todos(undefined, {})).toEqual([])
    expect(todos(state, action)).toEqual([{
        "text": "Redux with api ",
        "completed": false,
        "id": 123123
      },
      {
        "text": "Redux with api ",
        "completed": false,
        "id": 123123
      }
    ])
  })

  it('DELETE_TODO test', () => {
    const action = {
      type:'DELETE_TODO',
      id:123123
    }
    expect(todos(state, action)).toEqual([])
  })

  it('TOGGLE_TODO test', () => {
    const state = [{
        "text": "Redux with api ",
        "completed": false,
        "id": 123123
    }]
    const action = {
      type: 'TOGGLE_TODO',
      id: 123123
    }
    expect(todos(state, action)).toEqual([{
        "text": "Redux with api ",
        "completed": true,
        "id": 123123
      }
    ])
  })

  it('TOGGLE_TODO test', () => {
    const state = [{
        "text": "Redux with api ",
        "completed": false,
        "id": 12313
    }]
    const action = {
      type: 'TOGGLE_TODO',
      id: 123123
    }
    expect(todos(state, action)).toEqual([{
        "text": "Redux with api ",
        "completed": false,
        "id": 12313
      }
    ])
  })

  it('GET_TODOS test', () => {
    const action = {
      type:'GET_TODOS',
      payload:{
        data:{
          "text": "Redux with api ",
          "completed": false,
          "id": 123123
        }
      }
    }
    expect(todos(state, action)).toEqual([{
        "text": "Redux with api ",
        "completed": false,
        "id": 123123
      },
      {
        "text": "Redux with api ",
        "completed": false,
        "id": 123123
      }
    ])
  })

  it('default action test', () => {
    const action = {
      type:'KEK'
    }
    expect(todos(state, action)).toEqual([{
        "text": "Redux with api ",
        "completed": false,
        "id": 123123
      }
    ])
  })
})
