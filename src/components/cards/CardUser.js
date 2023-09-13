import'./CardUser.css'

const CardUser = ({user}) => {
  return (
        <div className="card-user">
        <img src={user.photo} width="70px" height="70px" alt={user.name}></img>
    <div>
        <h4>{user.name}</h4>
        <p>{user.email}</p>
    </div>
    </div>
  )
}

export default CardUser