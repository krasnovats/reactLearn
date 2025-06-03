import './Button.css'

export default function Button({ children, handleClick }) {


    return (
    <button className='button active' onClick={ handleClick } >
        { children 
        }</button> )
}