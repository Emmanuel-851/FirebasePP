import React,{Component} from 'react'
import firebase from 'firebase'
import {Input,Button,Row,Col,Icon,DatePicker} from 'antd'

class AddProducts extends Component{
    constructor(props){
        super(props)
        this.state={
            nombre_product:null,
            precio_product:null,
            cantidad_product:null

        }
    }

    changeNombreProduct=(e)=>{
        this.setState({nombre_product:e.target.value})
    }
    changePreacioProduct=(e)=>{
        this.setState({precio_product:e.target.value})
    }
    changeCantidadProduct=(e)=>{
        this.setState({cantidad_product:e.target.value})
    }

    agregarproducts=()=>{
         this.props.db.collection('products').add(this.state)
        .then((docRef)=>alert('Se agrago el producto'))
        .catch((err)=>alert('Error al guardar datos'))
    }
    //.doc(this.props.productttt.uid).set(this.state)

    render(){
        return(
            <div className='login-container'>

            <Row>
                <Col span={24}>
                <h1>Introdusca los datos del Producto</h1>
                </Col>
            </Row>

            <Row className='row'>
            <Col className='col form' span={12}>
            <Input 
                placeholder='Nombre del producto'
                prefix={<Icon type='shop' style={{ color: 'rgba(0,0,0,.25)' }} />}
                //suffix={suffix}
                value={this.state.nombre_product}
                onChange={(e)=>this.changeNombreProduct(e)}
                />
                 <Input 
                 type='number'
                placeholder='Precio del producto'
                prefix={<Icon type='dollar' style={{ color: 'rgba(0,0,0,.25)' }} />}
                //suffix={suffix}
                value={this.state.precio_product}
                onChange={(e)=>this.changePreacioProduct(e)}
                />
                 <Input
                 type='number' 
                placeholder='Cantidad del producto'
                prefix={<Icon type='shop' style={{ color: 'rgba(0,0,0,.25)' }} />}
               // suffix={suffix}
                value={this.state.cantidad_product}
                onChange={(e)=>this.changeCantidadProduct(e)}
                />

                <Button
                type='primary'
                shape='round'
                icon='plus-circle'
                size={'small'}
                onClick={this.agregarproducts}
                >Agregar</Button>
            </Col>

            <Col className='col form' span={12}>
            <p>Archivos</p>

            </Col>

            </Row>

            

           
           


            </div>
        )
    }

}

export default AddProducts;