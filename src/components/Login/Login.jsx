import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import From from 'react-bootstrap/Form';
import Background from '../IMG/BackgroundLogin.png';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import '../CSS/login.css'
function Login() {
  return (
    <Container fluid className='continer w-100 p-0'>
        <Row className='w-100 m-0'>
            <Col className='tw-bg-white px-3 py-5 login_ini'>
                <From className='w-100 d-flex flex-column justify-content-center gap-5'>
                    <From.Group as={Row} className='w-100 m-0 d-flex flex-row justify-content-center'>
                        <div className='buttoner d-flex flex-row justify-content-center p-2 mb-2 rounded-pill'>
                            <Button className='font button p-0 px-4 mx-2 w-50 rounded-pill border-0'>Login</Button>
                            <Button className='font transparent p-0 px-4 mx-2 w-50 rounded-pill border-0'>Register</Button>
                        </div>
                    </From.Group>
                    <From.Group as={Row} className='w-100 m-0'>
                        <div className='text-center'>
                            <h1 className='Title_login'>Inicio de sesion</h1>
                        </div>
                    </From.Group>
                    <From.Group as={Row} className='w-100 m-0'>
                        <div className='d-flex flex-row justify-content-center'>
                            <h1 className='Text_login w-75 text-center'>Mintic progresa en tu carrera junto a los mejores profecionales en el ambito IT</h1>
                        </div>
                    </From.Group>
                    <From.Group as={Row} className=' m-0 d-flex flex-row justify-content-center'>
                        <From.Label className='font w-75 px-4'>
                            Email
                        </From.Label>
                        <InputGroup hasValidation className='w-75 '>
                            <InputGroup.Text id="basic-addon1"><i class="bi bi-person-circle" style={{fontSize:"2rem", color:"gray"}}></i></InputGroup.Text>
                            <From.Control type='email' className='font rounded-end p-2 px-3 border-info' placeholder={'Email'}/>
                            <From.Control.Feedback type='invalid'>
                                Ingrese un correo valido
                            </From.Control.Feedback>
                        </InputGroup>
                    </From.Group>
                    <From.Group as={Row} className='mx-0 d-flex flex-row justify-content-center'>
                        <From.Label className='font w-75 px-4'>
                            Password
                        </From.Label>
                        <InputGroup hasValidation className='w-75 '>
                            <InputGroup.Text id="basic-addon1"><i class="bi bi-lock-fill" style={{fontSize:"2rem", color:"gray"}}></i></InputGroup.Text>
                            <From.Control type='password' className='font rounded-end p-2 px-3 border-info w-75 ' placeholder='Password'/>
                            <From.Control.Feedback type='invalid'>
                                Ingrese una contraseña valida
                            </From.Control.Feedback>
                        </InputGroup>
                    </From.Group>
                    <div className='d-flex flex-row justify-content-end'>
                        <p className='font login-text link-underline-darck m-0 pe-5'>forgot password ?</p>
                    </div>
                    <div className='d-flex flex-row justify-content-center'>
                        <Button className='font button p-4 py-3 w-50 rounded-pill border-0'>Login</Button>
                    </div>
                </From>
            </Col>
            <Col className='p-0'>
                <Image className='Image_login w-100' src={Background} fluid />
            </Col>
        </Row>
    </Container>
  )
}

export default Login
