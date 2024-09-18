import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import store from './state/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar/>
        <div className='main-container d-flex flex-column align-items-center'>
          <Outlet />
        </div>
      </Provider>
    </>
  )
}

export default App
