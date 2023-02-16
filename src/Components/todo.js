import React, {useState} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import {FaBeer } from 'react-icons/fa';

export default function Todo(props) {
    let [values, valuesHandler] = useState({ title : '',  details : ''});
    let todoList = '';
    todoList = props.sendTodoList.map((singleList, index) => (
        <Card className='mt-3 d-flex align-items-center flex-row' key={index}>
            <Card.Body>
                <Card.Title>{singleList.title + " " + index}</Card.Title>
                <Card.Text>{singleList.details}</Card.Text>
            </Card.Body>
            <div style={{fontSize:'20px', paddingRight:'10px',color:'red', cursor:'pointer'}} onClick={()=>{deleteHandle(index)}}>
                <FaBeer  />
            </div>
        </Card>
        
    ))
    let deleteHandle = (deleteID) => {
        props.deleteHandler(deleteID);
    }

    let addTodo = (e) => {
        e.preventDefault();
        props.addHandler(values);
    }
    let titleHandler = (e) =>{
        valuesHandler({title : e.target.value, details : values.details, id : values.id});
    }
    let detailsHandler = (e) =>{
        valuesHandler({title : values.title, details : e.target.value, id : values.id});
    }

  return (
    <div className='col-md-6'>
        <Card>
            <Card.Header><h4 className='text-center'>ADD TODO</h4></Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className='mb-3'>
                        {/* <Form.Label htmlFor='todoTitle'>Todo Title</Form.Label> */}
                        <Form.Control type='text' id='todoTitle' placeholder='Enter Todo Title' value={values.title} onChange={titleHandler}/>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        {/* <Form.Label htmlFor='todoTitle'>Todo Details</Form.Label> */}
                        <Form.Control as='textarea' id='todoTitle' rows='3' placeholder='Enter Todo Details' value={values.details} onChange={detailsHandler} maxLength='30'/>
                    </Form.Group>
                    <div>
                        <Button type='submit' onClick={addTodo}>Add TODO</Button>
                        <Button variant='secondary' type='reset' className='ms-3'>Clear</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        <Card className='mt-4'>
            <Card.Header><h4 className='text-center'>TODO LIST</h4></Card.Header>
            <Card.Body>
                {todoList.length==0 && <h5 className='text-center'>List Empty 😴</h5>}
                {todoList}

            </Card.Body>
        </Card>
    </div>
  )
}
