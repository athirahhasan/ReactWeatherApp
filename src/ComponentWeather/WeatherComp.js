import React from "react";
import moment from 'moment'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class Weathercomp extends React.Component {
	render(){
return(
			<Table style={{border:0}} >		
			<TableBody>			
			<TableRow>
				<TableCell style={{width:250, fontSize:40,}}>
				{this.props.Temperature &&  <span>{this.props.Temperature}&deg;C</span>}
				</TableCell>
				<TableCell  >
				{	
		 			this.props.city && this.props.country && 
		 			<div className="weather__value"> { this.props.city }, { this.props.country }</div>
		 		}
		 		{
		 			this.props.description && 
					<div>{moment(this.props.Datecity).format('llll')}</div> 
				}	
		 		{
		 			this.props.description && 
		 			<span> { this.props.description } </span>	
		 		
		 		}	
		 		{ 
	 				this.props.error && <span>Please</span>  
				} 		
		 		
				</TableCell>
				
			</TableRow>
			
				
				{this.props.listdesc.map(d => {
          		if(d.dt_txt.substr(d.dt_txt.length - 8) === "21:00:00"){
		            return(
		            	<TableRow key={d.dt_txt}>
		            		<TableCell  style={{}}>
								<span style={{fontWeight:"bold"}}>{moment(new Date(d.dt_txt)).format("DD MMMM YYYY , dddd")} </span>
		            			<div> {d.weather[0].main} </div>
		            		</TableCell>
		            		<TableCell>
		            			<span >{Math.round(d.main.temp_min)}&deg;C  - {Math.round(d.main.temp_max)} &deg;C </span>
		            		</TableCell>
		            
						</TableRow>
		         )
          		}
        	}

          )}
			
			
			</TableBody>

		</Table>
		
	 
	 
	 
	 	);}
	 
	
}


export default Weathercomp;