import {mapDispatchToProps}   from '../containers/FilterLink';

describe('FilterLink tests', () => {
  it('testing onClick from mapDispatchToProps', () => {
    const ownProps = {
      filter: 'SHOW_ALL'
    }
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch, ownProps).onClick()
    expect(dispatch.mock.calls.length).toEqual(1)
  })
})
