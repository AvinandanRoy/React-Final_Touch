import { useState } from "react"


function Events(props) {

    const [message , setMessage] = useState("")
    const [ color , setColor] = useState("red")
    const [name , setName] = useState("......")
    const [text , setText] = useState('Click here')

    const forOnclick =()=> {
        setMessage("This is onclick button..And this is Avinandan Roy")
    }

    const changeColor =()=>{
        setColor('green')
    }

    const newOwnerName =()=>{
        setName(props.name )
    }
    
    const forSetText =()=>{
        setText("Please Login Now")
    }

    const changeColorAgain =()=>{
        setColor("violet")
    }

    return (
        <div style={{backgroundColor: color}}>
            <button onClick={forOnclick}>Click</button>
            <h1>{message}</h1>

            <button onClick={changeColor}>Change Background Color</button>

            {
                changeColor? <br /> : null
            }

            <button onClick={newOwnerName}>Click for owner name </button>
            <h1>{name}</h1>

            <button onClick={forSetText}>{text}</button>

            {forSetText? <br />: null}

            <button onDoubleClick={changeColorAgain}>Change Color Again </button>
        </div>
    )
}

export default Events