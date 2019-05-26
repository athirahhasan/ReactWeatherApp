import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Form extends React.Component{

	render(){
	return(

			<form onSubmit={this.props.getWeather}style={{marginLeft:10}}>
			<TextField
		        id="City"
		        label="City"
		        name="city"
		    />
 			
		    <span style={{paddingLeft:20}}></span>
			<TextField 
		        id="country"
		        label="Country"
		        name="country"
		        paddingLeft="30"
		      />
		     
		     <Button type="submit">
		      	<span aria-label ="search" style={{fontSize:30}}>&#128269;</span>
		      </Button>

		      
  			 
				
			</form>
);}}

export default Form;