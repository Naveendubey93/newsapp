import React from 'react';
import loading from './../loading.gif';

export default function Spinner() {
  return (
    <div className="text-center" >
      <img src={loading} style={{width:'10rem',height:'3rem'}} alt="Loading"/>
    </div>
  )
}
