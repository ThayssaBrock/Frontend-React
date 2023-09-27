'use client'

import { useState, useEffect } from "react"
import CardUser from "@/components/cards/CardUser"
import Modal from "@/components/utils/Modal"

const ListMembers = () => {
    const [users, setUsers] = useState([])
    const [modalSignInIsOpen, setModalSignInIsOpen] = useState(false)

    useEffect(() => {
        const getMembers = async () => {
            const response = await fetch('http://localhost:3333/user/list', { cache: 'no-store' })
            const data = await response.json()
            setUsers(data)
        }
        getMembers()
    }, [])

    //manipulação do evento padrão form
    const handleSubmit = (event) => {
        event.preventDefult()
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            pass: event.target.pass.value,
            photo: event.target.photo.value,
        }

        const response = fetch('http://localhost:3333/user',
            {
                cache: 'no-store',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser)
            }
        )

        if (response.ok) {
            const result = response.json()
            if (result?.success) {
                setUsers(...users, result.newUser)
            }


        }
    }


return (
    <>
        <h1>Membros</h1>
        <button style={{ margin: '0 0 15px 0' }} onClick={() => setModalSignInIsOpen(true)}>Cadastrar</button>
        {
            users.map((user) => {
                return (
                    <CardUser key={user.id} user={user} />
                )
            })
        }
        <Modal isOpen={modalSignInIsOpen} changeOpen={setModalSignInIsOpen}>
            <h1>Cadastra-se</h1>
            <form onSubmit={handleSubmit}>
                Nome: <input type="text" name="name" /><br /><br />
                Email: <input type="text" name="email" /><br /><br />
                Pass: <input type="text" name="pass" /><br /><br />
                Photo: <input type="text" name="photo" /><br />
                <br />
                <input type="submit" value="Cadastrar" />
            </form>
        </Modal>
    </>
)
}

export default ListMembers