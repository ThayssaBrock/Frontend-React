import { userAgent } from "next/server"

const CustomButton = ({user}) => {
  return (
    <>
    <button>{user?.name}</button>
    <p>teste: {user?.photo}</p>
    <p>teste: {user?.email}</p>
    </>
  )
}

export default CustomButton