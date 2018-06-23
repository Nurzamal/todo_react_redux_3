import AddTodo    from '../components/AddTodo';
import React      from 'react';
import {mount}    from 'enzyme';

describe('Add todo tests', () => {
  it('Button submit test', () => {
    const props = {
      addTodo: jest.fn()
    }
    const wrapper = mount(<AddTodo onAddTodo = {props.addTodo}/>)
    wrapper.find('input').node.value = 'dummy'
    wrapper.find('form').simulate('submit');
    expect(props.addTodo.mock.calls.length).toEqual(1)
  });
})
