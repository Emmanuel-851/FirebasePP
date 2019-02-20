import React, { Component } from 'react';
import './App.scss';
import {Switch, Route, NavLink} from 'react-router-dom'
import Home from './components/home/Home'
import 'antd/dist/antd.css'
import {Layout, Menu} from 'antd'
import firebase from 'firebase'
import Login from './components/accounts/Login'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      user:null
    }
  }

  componentDidMount=()=>{
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    this.setState({user})
  }
})
  }

  loginGoogle = () =>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then((user)=>console.log('Estoy logeado soy paquito'))
    .catch((err)=>console.log('Hay un error' + err))
  }

  logOut=()=>{
firebase.auth().signOut()
.then(()=>alert('Tu sesion ha sido cerrada'))
.catch((err)=>console.log(err))
this.setState({user:null})

  }

  render() {
    const {Header, Content, Footer}= Layout;
    const {Item}=Menu;
    return (
      <Layout className='layout'>
        <Header className='header'>
          <Menu
          className='menu'
          theme='dark'
          mode='horizontal'
          style={{lineHeight:'64px'}}
          defaultSelectedKeys={['home']}
          >
          <Item key='home'>
          <NavLink to='/'>Home</NavLink>
          </Item>

          <Item key='login'>
          <NavLink to='/login'>Login</NavLink>
          </Item>

          </Menu>
        </Header>
        <Content className='content'>
        <Switch>
          <Route exact path='/'
           render={()=>
           <Home 
          loginGoogle={this.loginGoogle}
          user={this.state.user}
          logOut={this.logOut}
           />} 
           />
           <Route 
           exact path='/login'
           render={()=>
           <Login 
          loginGoogle={this.loginGoogle}
          user={this.state.user}
          logOut={this.logOut}
           />} 
           />


        </Switch>

        </Content>

        <Footer>
          <p>Actosoft FirebaseMX 2019</p>
        </Footer>
      </Layout>
      
    );
  }
}

export default App;
