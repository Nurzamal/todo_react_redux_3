import visibilityFilter   from '../reducers/visibilityFilter';

describe('visibilityFilter tests', () => {
  it('default reducer test', () => {
    expect(visibilityFilter('SHOW_ALL', {type: 'lel', filter: 'kek'})).toEqual('SHOW_ALL')
  })

  it('set filter reducer test', () => {
    const state = 'SHOW_ALL'
    const action = {
      type:'SET_VISIBILITY_FILTER',
      filter:'SHOW_ALL'
    }
    expect(visibilityFilter(state, action)).toEqual(action.filter)
  }
})
