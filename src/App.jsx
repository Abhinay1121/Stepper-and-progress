import { useState, useEffect } from 'react'
import './App.css'
import CheckoutStepper from './components/CheckoutStepper'
import Progressbar from './components/Progressbar'

const CHECKOUT_STEPS = [
  { id: 1, name: 'User Info', component: () => <div>Provide your contact details</div> },
  { id: 2, name: 'Shipping Info', component: () => <div>Provide shipping details</div> },
  { id: 3, name: 'Payment Info', component: () => <div>Provide payment details</div> },
  { id: 4, name: 'Delivered', component: () => <div>Your order has been delivered. Thank you for shopping with us!</div> },
]

function App() {
  const[value, setValue] =useState(0)
  useEffect(() =>{
let timerId;
timerId = setInterval(() =>{
  setValue((value) =>value+1)
},100)
return(
() => clearInterval(timerId)
)
  },[])

  return (
    <>
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
      <Progressbar value={value}/>
    </>
  )
}

export default App
