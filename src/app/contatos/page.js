import Header from "@/components/layout/Header"
import CustomButton from "@/components/utils/CustomButton"

const user={name: "Thayssa", email: "aaaa@gmail.com", pass:"123", photo:"qwasdla.com"}

const contatos = () => {
    return(
    // tag ghost <> </> react fragment, ele cria um primeiro nivel 
      <>
        <Header />
        <h1>Contato</h1>
        <h2>Nosso WhatsApp</h2>
        <CustomButton titulo="Login"/>
        <CustomButton user={user}/>
      </>
    )
  }
  
  export default contatos