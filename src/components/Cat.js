import React,{} from 'react';
import './cat.css';

export default class Cat extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        const {cat} = this.props;
        return(

            <div className='cat-container'>
                <div className='image'>
                    <img src={cat.url} />
                </div>
                <div className='cat_content'>
                    <h3> {cat.breeds[0]?.name}</h3> 
                    <span> {cat.breeds[0]?.origin}</span>
                    <br/>
                    <strong>  Descripcion:  </strong>
                    <p>
                        {cat.breeds[0]?.description.length > 130
                        ? cat.breeds[0].description.substring(0, 130) + '...'
                        : cat.breeds[0]?.description}
                    </p>

                    
                </div>
                
            </div>
        )
    }

}