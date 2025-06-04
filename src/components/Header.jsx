import logo from '/vite.svg'
import { useState } from 'react'; // импортируем useState



export default function Header () {
  const [now, setNow] = useState(new Date())

setInterval( () => setNow(new Date()), 1000)



  return (

      <header>
        <img src= { logo } alt="icon" />
      {/* <h3>Обучение</h3> */}
      <span>Время сейчас: { now.toLocaleTimeString() }</span>
    </header>
  )

}



