
import React,{} from 'react';
import './skeleton.css';

export default class Skeleton extends React.Component{


    render(){
        return(
            <div className="skeleton">

                <div className='image_skeleton'></div>
                <div className='content_skeleton'>
                    <div className='one_skeleton'></div>
                    <div className='two_skeleton'></div>
                </div>

            </div>
        )
    }

}