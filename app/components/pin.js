import React from 'react'
import _ from 'lodash'
import {Link} from 'react-router'

 const DEFAULT_IMAGE='https://i.imgur.com/1U3KdTY.png'
 


const Pin=({data,onDelete,buttonIsVisible,onImgError})=>{

  const renderSpan=()=>{
  if(buttonIsVisible){
    return <button className='btn-danger' onClick={()=>{onDelete(data)}}>DELETE</button>
  }

     return(<div><span className='glyphicon glyphicon-user'></span>
                <Link to={`user/${data.user}`}>{data.user}</Link>
              </div>)
  } 
  return(
  <li className='board'>
    <img src={data.image_url} onError={(e)=>{console.log(e); e.target.src=DEFAULT_IMAGE}} />
     	<h5 className='title-mobile hidden-md hidden-lg hidden-sm'>{data.title}</h5> 
    	<h4 className='hidden-xs'>{data.title}</h4>
  		<span>
    	 {renderSpan()}	  		
      </span>
		<span className='icons'>0
			<span className='glyphicon glyphicon-thumbs-down'></span>
  		</span> 
  </li>   
  ) 
}

export default Pin;