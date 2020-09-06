import React from 'react'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addContact} from "../actions/contactAction";
import shortid from 'shortid';
import {useHistory} from "react-router-dom";


const AddContact = () => {
    const history=useHistory();


    const dispatch = useDispatch();

    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    
    const formSubmit=(event)=>{
        event.preventDefault();
        alert(`my name is ${name} my phone number is ${phone} my email is${email}`);
        const newContact={
            id:(shortid.generate()),
            name:name,
            phone:phone,
            email:email,
        };
        dispatch(addContact(newContact));
        history.push("/");
       
    };
    return  (
        <>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className=" col-12 d-flex flex-column justify-content-center mr-3 ml-4 px-2">

               
        <div className="card border-o shadow ">
            <div className="card-header">Add a contact</div>
            <div className="card-body">
                <form onSubmit={formSubmit} >
                    <div className="form-group">
                        <input type="text"
                        placeholder="Enter your name "
                        className="form-control shadow-none  "
                        style={{boxShadow:"none"}}
                        name="name"
                        value={name}
                        onChange={(e)=>{
                            setName(e.target.value);
                        }}

                        />
                        </div>
                          <div className="form-group">
                        <input type="text"
                        placeholder="Enter your phone no"
                        className="form-control shadow-none "
                        style={{boxShadow:"none"}}
                        name="phone"
                        value={phone}
                        onChange={(e)=>{
                            setPhone(e.target.value);
                        }}

                        />
                        </div>
                          <div className="form-group">
                        <input type="text"
                        placeholder="Enter your email "
                        className="form-control shadow-none "
                        style={{boxShadow:"none"}}
                        name="email"
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}

                        />
                        </div>
                        <div>
                            <button type="submit" className="btn  submit btn-primary shadow-none btn-md"> Create contact</button>
                        </div>
                    
                </form>
                </div>
            </div>
        </div>
            </div>
        </div>
       
        </>
    )
}

export default AddContact;
