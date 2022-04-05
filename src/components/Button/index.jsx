import './style.css'

const Button = ({children, mudaPage}) =>{
    return(
        <>
            <button onClick={mudaPage}>{children}</button>
        </>
    )
}

export default Button