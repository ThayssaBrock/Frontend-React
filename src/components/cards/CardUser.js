'use client'

import'./CardUser.css'

const handleDelete = async (idUser) =>{

  const objUser = {
    id: idUser
  }
// url, metodo, o tipo de dado, e os dados
  const response = await fetch(
  'http://localhost:3333/user', {
  cache: 'no-store',
  method:"DELETE",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(objUser)
})
  return console.log(await response.json())
  //return await response.json()
}

const CardUser = ({user}) => {
  return (
        <div className="card-user">
        <img src={user.photo} width="70px" height="70px" alt={user.name}></img>
    <div>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
        <p>
          <span className='delete' onClick={() => handleDelete(user.id)}>Excluir</span>
          <span>Editar</span>
        </p>
    </div>
    </div>
  )
}

export default CardUser