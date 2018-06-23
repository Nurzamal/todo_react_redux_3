import TodoList   from '../components/TodoList';
import React      from 'react';
import {mount}    from 'enzyme';

describe('TodoList tests', () => {
  it('btn click test', () => {
    const props = {
     todos: [
        {
          "text": "Create todo list via Arc.js + Redux with api ",
          "completed": true,
          "id": 1
        }
      ],
      onTodoClick: jest.fn(),
      onDeleteTodo: jest.fn(),
      onGet:jest.fn()
    }
    const wrapper = mount(<TodoList {...props}/>)
    wrapper.find('ul').find('button').simulate('click')
    expect(props.onDeleteTodo.mock.calls.length).toEqual(1)
    wrapper.find('button').findWhere(n => n.text() === 'Get Todos from API').simulate('click')
    expect(props.onGet).toBeCalled()
  })
})
