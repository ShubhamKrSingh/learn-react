import { useState } from 'react'
import "./App.css"
import  AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {

  return (
    <Provider store={store}>
      <div className=' bg-gray-600 text-white rounded-xl p-2'>
      <h1 className='text-3xl'>Learn about redux-toolkit</h1>
      <AddTodo/>
      <Todos/>
      </div>
    </Provider>
  )
}

export default App
