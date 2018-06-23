import App   from '../components/App';
import React      from 'react';
import {mount}    from 'enzyme';
import {Provider} from 'react-redux'
import todoApp    from '../reducers/index'
import {createStore} from 'redux'


it('App test', () => {
  const store = createStore(todoApp);
  const wrapper = mount(
    <Provider store = {store}>
      <App />
    </Provider>
  )
})
