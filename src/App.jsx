import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Inbox from './components/Inbox.jsx'
import Mail from './components/Mail.jsx'
import Body from './components/Body.jsx'
import SendMail from './components/SendMail.jsx'
import Login from './components/Login.jsx'
import { useSelector } from 'react-redux'

const router = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <Inbox />
    }, {
      path: "/mail/:id",
      element: <Mail />
    }
  ]
}])


function App() {
  const { authUser } = useSelector((store) => store.appSlice)
  return (
    <>
      <div className='bg-[#F6F8FC] h-screen w-screen overflow-hidden '>
        {
          !authUser ? (
            <Login />
          ) : (
            <>
              <Navbar />
              <RouterProvider router={router} />
              <div className='absolute bottom-0 right-20 z-10'>
                <SendMail />
              </div>
            </>
          )
        }

      </div>

    </>
  )
}

export default App
