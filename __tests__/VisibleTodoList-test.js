import React             from 'react';
import {getVisibleTodos} from '../containers/VisibleTodoList'

describe('VisibleTodoList tests', () => {
  it('getVisibleTodos test(SHOW_ALL)', () => {
    const todos = [{
      "text": "Create todo list via Arc.js + Redux",
      "completed": true,
      "id": 2
    }]
    const filter = 'SHOW_ALL'
    expect(getVisibleTodos(todos, filter)).toEqual([{
      "text": "Create todo list via Arc.js + Redux",
      "completed": true,
      "id": 2
    }])
  })

  it('getVisibleTodos test(SHOW_COMPLETED)', () => {
    const todos = [{
        "text": "Create todo list via Arc.js + Redux",
        "completed": false,
        "id": 2
      },
      {
        "text": "Create todo list with api",
        "completed": true,
        "id": 4
      }
    ]
    const filter = 'SHOW_COMPLETED'
    expect(getVisibleTodos(todos, filter)).toEqual([{
      "text": "Create todo list with api",
      "completed": true,
      "id": 4
    }])
  })

  it('getVisibleTodos test(SHOW_ACTIVE)', () => {
    const todos = [{
        "text": "Create todo list via Arc.js + Redux",
        "completed": false,
        "id": 2
      },
      {
        "text": "Create todo list with api",
        "completed": true,
        "id": 4
      }
    ]
    const filter = 'SHOW_ACTIVE'
    expect(getVisibleTodos(todos, filter)).toEqual([{
      "text": "Create todo list via Arc.js + Redux",
      "completed": false,
      "id": 2
    }])
  })

  it('getVisibleTodos test(SHOW_ACTIVE)', () => {
    const todos = [{
        "text": "Create todo list via Arc.js + Redux",
        "completed": false,
        "id": 2
      }]
    const filter = 'asdasd'
    expect(getVisibleTodos(todos, filter)).toEqual('Unknown filter: ' + filter)
  })
})
