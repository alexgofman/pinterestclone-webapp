import React, {Component} from 'react';
import _ from 'lodash';
import Pin from './pin';
import Masonry from 'react-masonry-component';

const masonryOptions = {transitionDuration: '2s'};

const Gallery= (props)=>{
  return( 
   <Masonry className='gallery'  elementType={'ul'} options={masonryOptions} disableImagesLoaded={false}> 
    {props.pins.map((v,i)=>{return <Pin key={i} 
    									                  data={v} 
    						                        buttonIsVisible={v.user==props.user}       						                        onDelete={props.onDelete}/>}) }
   </Masonry>
    )
}
  
export default Gallery;