import React from 'react'
import './home.scss'

const Home=(props)=>(
    
    <div>
        {props.user ?
        <div>
            <p>Nombre: {props.user.displayName}</p>
            <p>Correo: {props.user.email}</p>
            <img 
            style={{width:'100px' }}
            src={props.user.photoURL} alt={props.user.displayName} />
            <button onClick={props.logOut}>Cerrar sesion</button>

      </div>
      :
      <button className='butom-acceso' onClick={props.loginGoogle}>
      <img
      className='img-acceso'
      src='https://lh3.googleusercontent.com/kroer1kpwSe3j-lIfPnE7Q3MVaCoJVF8atjdh0VtGDWCz2ulLejVsDh2k6a6VUgpUFQ8qRMHMEX7bsr2jTrLXhZR_ETbqILDf-qfkk0=h128'
      alt='Accede con Google'
       />
       
      </button>
      

        }
    </div>
)

export default Home;