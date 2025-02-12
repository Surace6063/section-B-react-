import { Routes, Route } from 'react-router-dom'
import './App.css'
import Counter from './components/Counter'
import Form from './components/Form'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'


const App = () => {
  const username = "John Doe"
  const a = 10
  const b = 20
  const isVerified = true

  const fruits = ['apple', 'mango', 'banana']
  return (
    // <div className='border border-gray-600 m-4 p-4 rounded-md bg-slate-700 text-white'>
    //   <p className="text-green-700 text-2xl">Welcome to react app.</p>
    //   <p>The username is {username}.</p>
    //   <p>the sum of a and b is {a + b} </p>
    //   {
    //     isVerified ? <span>You can access this page</span> :
    //       <span>You cannot access this page.</span>
    //   }

    //   <h1>list of fruits</h1>
    //   <ul>
    //     {
    //       fruits.map((item, index) => (
    //         <li key={index}>{item}</li>
    //       ))
    //     }
    //   </ul>
    // </div>

    <div>
      {/* <UserProfile id={101} name='john' age={23} />
      <UserProfile id={102} name='Ram' age={24} />
      <UserProfile id={103} name='Hari' age={25} /> */}

      {/* <Counter /> */}

      {/* <Form /> */}

      {/* <UserList /> */}

      {/* <ProductList /> */}

      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />

      </Routes>
    </div>
  )
}
export default App