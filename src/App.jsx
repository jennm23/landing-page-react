import Navbar from './Components/Navbar'
import Jumbotron from './Components/Jumbotron'
import Card from './Components/Card'
import Footer from './Components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <div className='m-5'>
        <Jumbotron/>
        <div className='d-flex flex-column flex-md-row gap-3'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
