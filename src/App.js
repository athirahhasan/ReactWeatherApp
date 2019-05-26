import React from "react";
import Title from './ComponentWeather/Title';
import Form from './ComponentWeather/Form';
import Weathercomp from './ComponentWeather/WeatherComp';
 

const API_KEY = "cd145d87dcca3f37dda7707b8047db95";

class App extends React.Component {

  state = {
    //Country : undefined,
    city : undefined,
    Datecity : undefined,
    Temperature : undefined,
    description : undefined,
    listdesc :[],
    error : undefined
  }

  getWeather = async(e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
      //const api_call = await fetch('//api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=cd145d87dcca3f37dda7707b8047db95&units=metric');
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);

      const data= await api_call.json();
      console.log(data);
      if (city && country){
      this.setState({
          country : data.city.country,
          city : data.city.name,
          Datecity : new Date().toLocaleString(),
          Temperature : data.list[2].main.temp,
          description : data.list[2].weather[0].description,
          listdesc : data.list,
          error : undefined,
          
      });
      }else{
        this.setState({
            country : undefined,
            city : undefined,
            Datecity : undefined,
            Temperature : undefined,
            description : undefined,
            //listdesc : [],
            error : "Please enter city and country",

          });
    }

  }
  

  render(){
    return (
      <div>
        <Title/>
        <Form getWeather={this.getWeather} getcurrentWeather={this.getcurrentWeather}/> 
        <Weathercomp
          Temperature={this.state.Temperature} 
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          Datecity ={this.state.Datecity}
          listdesc = {this.state.listdesc}

        />
       

        

      </div>     
      )
  }
}

export default App;