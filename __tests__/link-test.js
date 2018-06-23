import Link                   from '../components/Link';
import React                  from 'react';
import {mount}                from 'enzyme';

describe('link tests', () => {
  it('Link returns test', () => {
    const props = {
      active: true,
      children: 'SHOW ALL',
      onClick: jest.fn()
    }
    const wrapper = mount(<Link {...props}/>)
    expect(wrapper.contains(
      <span>SHOW ALL</span>
    )).toBe(true)
  })

  it('Link a click test', () => {
    const props = {
      active: false,
      children: 'SHOW ALL',
      onClick: jest.fn()
    }
    const wrapper = mount(<Link {...props}/>)
    wrapper.find('a').simulate('click')
    expect(props.onClick.mock.calls.length).toEqual(1)
  })
})
