import Todo       from '../components/Todo';
import React      from 'react';
import {mount}    from 'enzyme';

describe('Todo tests', () => {
  it('todo render test', () => {
    const todos = {
      "text": "Create todo list via Arc.js + Redux with api ",
      "completed": true,
      "id": 1
    }
    const props = {
      todo: todos,
      onClick:jest.fn()
    }
    const wrapper = mount(<Todo {...props} />);
    wrapper.find('li').simulate('click')
    expect(props.onClick.mock.calls.length).toEqual(1)
    expect(wrapper.find('li').props().style).toEqual({textDecoration: 'line-through'})
  })

  it('style logic tests', () => {
    const todos = {
      "text": "Create todo list via Arc.js + Redux with api ",
      "completed": false,
      "id": 1
    }
    const props = {
      todo: todos,
      onClick:jest.fn()
    }
    const wrapper = mount(<Todo {...props} />);
    expect(wrapper.find('li').props().style).toEqual({textDecoration: 'none'})
  })
})
