import React, {Component} from 'react'
import {Input, Row, Col, Icon} from 'antd'

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            Correo:null,
            Contraseña:null 
        }
    }

    render(){
        return(
            <div>
                <Row>
                    <Col span={24}>
                    <p>Inicia sesion</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                    <p>Login</p>
                    </Col>


                </Row>
            </div>
        )
    }
}