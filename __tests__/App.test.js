import ConnectedApp, { App } from '../src/containers/app'
import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'

describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)',()=> {
    const initialState = {output: 100};
    const mockStore = configureStore();
    let store, container, wrapper;

    beforeEach(()=>{
        store = mockStore(initialState);
        wrapper = mount( <Provider store={store}><ConnectedApp /></Provider> );
    })


    it('+++ render the connected(SMART) component', () => {
        expect(wrapper.find(ConnectedApp).length).toEqual(1);
    });

    it('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(App).prop('output')).toEqual(initialState.output);
    });

    it('+++ check action on dispatching ', () => {
        let action;
        store.dispatch(addInputs(500));
        store.dispatch(subtractInputs(100));
        action = store.getActions();
        expect(action[0].type).toBe("ADD_INPUTS");
        expect(action[1].type).toBe("SUBTRACT_INPUTS");
    });
});import ConnectedApp, { App } from '../src/containers/app'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

describe('>>>H O M E --- REACT-REDUX (Shallow + passing the {store} directly)',()=> {
    const initialState = {output: 100};
    const mockStore = configureStore();
    let store, container, wrapper;

    beforeEach(()=>{
        store = mockStore(initialState);
        wrapper = shallow( <Provider store={store}><ConnectedApp /></Provider> );
    })


    it('+++ render the connected(SMART) component', () => {
        expect(wrapper.find(ConnectedApp).length).toEqual(1);
    });

    it('+++ check Prop matches with initialState', () => {
        expect(wrapper.find(App).prop('output')).toEqual(initialState.output);
    });

    it('+++ check action on dispatching ', () => {
        let action;
        store.dispatch(addInputs(500));
        store.dispatch(subtractInputs(100));
        action = store.getActions();
        expect(action[0].type).toBe("ADD_INPUTS");
        expect(action[1].type).toBe("SUBTRACT_INPUTS");
    });
});