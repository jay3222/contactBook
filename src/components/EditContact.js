import React from 'react'
import {useState,useEffect} from "react";
import {useDispatch ,useSelector} from "react-redux";
import { getContact,updateContact} from "../actions/contactAction";
import shortid from 'shortid';
import {useHistory} from "react-router-dom";
import {useParams} from "react-router-dom";


const EditContact = () => {
    let {id}=useParams();   
    
    const history=useHistory();
    const contact=useSelector((state) =>state.contact.contact);
    const dispatch = useDispatch();

    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    
   
    useEffect(()=>{
        if(contact !=null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id))
    },[contact]);


    const formSubmit=(e)=>{
        e.preventDefault();
        const update_contact=Object.assign(contact, {name:name,phone:phone,email:email});
        console.log(update_contact);
        dispatch(updateContact(update_contact));
        history.push("/");
    }
    return  (
        <>
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className=" col-12 d-flex flex-column justify-content-center mr-3 ml-4 px-2">

               
        <div className="card border-o shadow ">
            <div className="card-header">Edit a contact</div>
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
                            <button type="submit" className="btn  submit btn-danger shadow-none btn-md"> Edit contact</button>
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

export default EditContact;
