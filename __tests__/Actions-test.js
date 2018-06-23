import React                  from 'react';
import {addTodo, deleteTodo, toggleTodo, getTodos}  from '../actions/index';
import moxios                 from 'moxios';
import configureMockStore     from 'redux-mock-store'
import thunk                  from 'redux-thunk';

const middlware = [thunk];
const mockStore = configureMockStore(middlware)
describe('Actions tests', () => {
  beforeEach(function(){
    moxios.install()
  })
  afterEach(function(){
    moxios.uninstall()
  })

  it('addTodo creates new Task', (done) => {
      const text = "Rachel Green ";
      const store = mockStore({todos:[]});
      store.dispatch(addTodo(text));
      moxios.wait(()=>{
        let request = moxios.requests.mostRecent()
        request.respondWith({
         status: 200
       }).then((response) =>{
         expect(store.getActions()).toEqual([{type:'ADD_TODO', payload:response,text}])
         done()
       })
      })
    });

  it('deletes another task', (done) => {
      const id = 123
      const store = mockStore({todos:[]});
      const expectedStore = [{type:'DELETE_TODO', id:123}]
      store.dispatch(deleteTodo(id));
      moxios.wait(()=>{
        let request = moxios.requests.mostRecent()
        request.respondWith({
         status: 200
       }).then(() =>{
         expect(store.getActions()).toEqual(expectedStore)
         done()
       })
      })
   });

   it('toggles', (done) => {
       const id = 123;
       const todo = [{type:'TOGGLE_TODO', id}]
       const store = mockStore({todos:[]});
       store.dispatch(toggleTodo(todo));
       moxios.wait(()=>{
         let request = moxios.requests.mostRecent()
         request.respondWith({
          status: 200,
          id,
        }).then((response) =>{
          expect(store.getActions()).toEqual([{type:'TOGGLE_TODO', id: response.id}])
          done()
        })
       })
     });

   it('gets from api', (done) => {
     const store = mockStore({todos:[]});
     store.dispatch(getTodos());
     moxios.wait(()=>{
       let request = moxios.requests.mostRecent()
       request.respondWith({
        status: 200,
      }).then((response) =>{
        expect(store.getActions()).toEqual([{type:'GET_TODOS', payload: response}])
        done()
      })
     })
   });
})
