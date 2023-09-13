import Header from "@/components/layout/Header"
import'./Membros.css'
    
// a função tem que ser aqui
const getMembers = async () => {
    const response = await fetch('http://localhost:3333/user/list', {cache: 'no-store'})
    return await response.json()
}
const Membros = async () => {
    const users = await getMembers()

return(
<>

        <Header />
        <h1>Membros</h1>
        <h2>Lista de Emails: </h2>
        {
            users.map((user) =>{
                return (
                    <div key={user.id} className="card-user">
                        <img src={user.photo} width="70px" height="70px" alt={user.name}></img>
                    <div>
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                    </div>
                    </div>
                )
            })
        }
      </>
    )
  }
  
  export default Membros