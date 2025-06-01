import logo from '/vite.svg'



export default function Header () {

  const now = new Date();  

  return (

      <header>
        <img src= { logo } alt="icon" />
      {/* <h3>Обучение</h3> */}
      <span>Время сейчас: { now.toLocaleTimeString() }</span>
    </header>
  )

}



