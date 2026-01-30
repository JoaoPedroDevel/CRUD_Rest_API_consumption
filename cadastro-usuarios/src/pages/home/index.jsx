import { useEffect, useState, useRef } from 'react'
import './style.css'
import Lixeira from '../../assets/lixeira.svg'
import api from '../../services/api.js'


function Home() {

  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromAPI = await api.get('/usuarios')
    
    setUsers (usersFromAPI.data)
  }

   async function createUsers(event) {
    event.preventDefault()
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: Number(inputAge.current.value),
      email: inputEmail.current.value,
    })

    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)

    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <div className='container'>

        <form onSubmit={createUsers}>

          <h1>
            Cadastro de Usuários
          </h1>

          <input type="text" id="nome" name="nome" placeholder='Nome' ref={inputName} />
          <input type="number" name="idade" id="idade" placeholder='Idade' ref={inputAge} />
          <input type="email" id="email" name="email" placeholder='Email' ref={inputEmail} />

          <button type="submit">Cadastrar</button>

        </form>

        {
          users.map((user) => (
            <div key={user.id} className='card'>
              <p>
                Nome: <span>{user.name}</span>
              </p>
              <p>
                Idade: <span>{user.age}</span>
              </p>
              <p>
                Email: <span>{user.email}</span>
              </p>
              <button>
                <img src={Lixeira} alt="Lixeira" onClick={() => deleteUsers(user.id)}/>
              </button>
              
            </div>
          ))
        }

      </div>

    </>
  )
}

export default Home
