
import React from 'react'

const NewProduce = () => {
  return (
 <div className='w-75 m-auto my-5 box'>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label"> Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
  </div>
  
  <div className="mb-3">
    <label htmlFor="descrption" className="form-label">salary</label>
    <input type="text" className="form-control" id="descrption" placeholder="salary" />
  </div>
  <div className="mb-3">
    <label htmlFor="url" className="form-label">url</label>
    <input type="url" className="form-control" id="url" placeholder="url" />
  </div>
  <button className='btn btn-info'>submit</button>
</div>

  )
}

export default NewProduce