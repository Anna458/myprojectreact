import { useState } from 'react'
import { Form } from './components/classes/Form'
import { Form as FormFunc } from './components/func/Form'

export function App () {
  const [toggle, setToggle] = useState(true)
  
  return (
    <>
      <Form />
      <hr />
      
    </>
  )
}

// export default App