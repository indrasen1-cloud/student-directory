import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Card from './components/Card'
const App = () => {
 
  return (
    <div className='parent'>
      <Navbar />
      <Home />
      <div className='card-container'>
      <Card name="Sunil" image="https://plus.unsplash.com/premium_photo-1682091992663-2e4f4a5534ba?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" enrollment="25DTPH015" year="2nd Year" branch="Engineering Physics" motive="I am passionate about software development"/>
      <Card name="Shivalal" image="https://images.unsplash.com/photo-1601392561050-340745ba9c25?q=80&w=926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" enrollment="25DTPH016" year="2nd Year" branch="Engineering Physics" motive="I am passionate about Goverment Exams"/>
      <Card name="Tushar" image="https://plus.unsplash.com/premium_photo-1682089877310-b2308b0dc719?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" enrollment="25DTPH011" year="2nd Year" branch="Engineering Physics" motive="I am passionate about web development"/>
      </div>
    </div>
  )
}

export default App