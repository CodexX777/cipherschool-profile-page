import React from 'react'
import Heading from '../UIElements/Heading';
import "./Interests.css";


const Interests = () => {
    const interestModalHandler=(btnState, setBtnState)=>{

    }
  return (
    <div className='interest-panel'>
      <Heading onTrue="Edit" onFalse="Edit" Label="INTERESTS" submitHandler={interestModalHandler} />

    </div>
  )
}

export default Interests
