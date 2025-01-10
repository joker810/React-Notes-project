import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';


export default function Note(props){
	function handleClick() {
		props.onDelete(props.id);
	  }
	
	  return (
		<div className="note">
		  <h1>{props.title}</h1>
		  <p>{props.content}</p>
		  <fab
		   onClick={handleClick}><DeleteIcon/></fab>
		</div>
	  );
}