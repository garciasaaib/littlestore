// hooks
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from './context'

// components
import { Navbar } from './components/Navbar'

// pages
import { Home } from './pages/Home'
import { MyAccount } from './pages/MyAccount'
import { MyOrders } from './pages/MyOrders'
import { MyOrder } from './pages/MyOrder'
import { NotFound } from './pages/NotFound'
import { SignIn } from './pages/SignIn'

// css
import './App.css'
import { Layout } from './components/Layout'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}
function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter >
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App