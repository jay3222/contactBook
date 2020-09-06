import React from 'react'
import Avatar from 'react-avatar'
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {NavLink} from "react-router-dom";
import{deleteContact} from "../../actions/contactAction";
import {useDispatch} from 'react-redux';

const Contacts = ({data}) => {
    const dispatch=useDispatch();
    const {name,phone,email,id}=data;
    return (
        
            <>
            
          <tr>
      <td> 
      <div class="custom-control custom-checkbox">
<input type="checkbox" class="custom-control-input" />
<label class="custom-control-label"></label>
</div>
      </td>
      <td><Avatar name={name} size="40"value="86%" round={true} className="mr-2"/>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="action">
          <NavLink to={`editContact/${id}`}><span><EditIcon/></span></NavLink>
          <NavLink to="#"><span><DeleteForeverIcon onClick={()=>(dispatch(deleteContact(id)))} style={{color:"red"}}/></span></NavLink>


      </td>
    </tr>


            </>
            
       
    )
}

export default Contacts
