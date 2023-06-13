


type Props = {
    nome: string,
    avatar: string,
    roles: string[],
}

export const Person = ({nome, avatar, roles}: Props ) => {
    
    return (
        <div className="p-2">
            
            <h1 style={{color: 'red'}}>{nome}</h1>

            <img 
            src={avatar}
            alt={nome} 
           style={{
            width: '20rem'
           }}
           
            />

            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
                <li>{roles[2]}</li>
            </ul>
        </div>
    )
}