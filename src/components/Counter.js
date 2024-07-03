import React,{} from 'react';
import './counter.css';

export default class Counter extends React.Component{


    constructor(props){
        super(props)
    }

    render(){

        const { counter } = this.props;

        return(
            <div className='counter'>
                <p> counter: {counter} </p>
            </div>
        )

    }

}