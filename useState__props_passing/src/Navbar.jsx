import './Navbar.css'

const Navbar =(props)=>{
    return(
        <>
        <nav>
            <h1>{props.name} </h1>
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Portfolio</a></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar 