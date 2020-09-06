import React from 'react';
import {useSelector} from 'react-redux';
import Contacts from './Contacts'


const Contact =() => {

  const contacts=useSelector(state=>state.contact.contacts);
    console.log(contacts);
      return (
        <div>

  <table className="table shadow ">
  <thead>
    <tr className="bg-danger text-white">
      <th scope="col">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
          <label className="custom-control-label"></label>
        </div>



      </th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {
      contacts.map((data,index)=>{
        console.log(index)
        return(
          <>
          <Contacts  data={data}/>

          </>
        )
      })
    }
  
 
  </tbody>
</table>
        </div>
    )
}

export default Contact
