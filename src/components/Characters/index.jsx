import './style.css'
import CharCard from '../CharCard'

const Characters = ({characterList}) =>{
    return(
        <>
            <h1>Meus Personagens</h1>
            <ul>
                {characterList.map(({name,image,status,id}) => <CharCard key={id} name={name} image={image} status={status}/>)}
            </ul>
        </>
    )
}

export default Characters