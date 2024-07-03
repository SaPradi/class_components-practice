import React,{} from 'react';
import './App.css';
import Cat from './components/Cat';
import Counter from './components/Counter';
import {CatApiService} from './services/catapi.service'
import Skeleton from './components/Skeleton';
export default class App extends React.Component{

  constructor(props){

    super(props)
    this.state ={
      saludo:'Hola',
      cat:null,
      error:null,
      randomNumberIndex:null,
    }
    this.catApiService = new CatApiService()

  }

  generateRandomNumber = () => {
    const min = 1;
    const max = 10;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInt
  }

  componentDidMount() {
    
    this.catApiService.getCat()
      .then(catList => {

          console.log(catList[this.generateRandomNumber()])

          const catListRandom = catList[this.generateRandomNumber()]

          this.setState({ cat: catListRandom });
      })
      .catch(error => {
          this.setState({ error });
      });
  }
 

  render(){
    return(
      <div className='container'>

        <div className='content'>
          <h1> {this.state.saludo}!</h1>
          <img src='cat.png'/>
        </div>
        <div className='flex'>

        {
          this.state.error ? (
            <Skeleton />
          ) : this.state.cat ? (
            <Cat cat={this.state.cat} />
          ) : (
            <Skeleton />
          )
        }
        
        

        </div>


        
      </div>
    )
  }
}