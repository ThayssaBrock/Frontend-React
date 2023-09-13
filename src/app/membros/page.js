import Header from "@/components/layout/Header"
import CardUser from "@/components/cards/CardUser"

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
                    <CardUser key={user.id} user={user}/>
                )
            })
        }
      </>
    )
  }
  
  export default Membros