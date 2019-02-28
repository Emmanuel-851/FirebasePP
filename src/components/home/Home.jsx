import React from 'react'
import './home.scss'

const Home = (props) => (
    <div>
        { props.user ? 
            <div>
            <p>Nombre: {props.user.displayName}</p>
            <p>Correo: {props.user.email}</p>
            <img
            className='imgperfil'
             style={{width: "100px"}} 
             src={props.user.photoURL} 
             alt={props.user.displayName} />
            </div>
            : null
        }
    
    </div>
)

export default Home