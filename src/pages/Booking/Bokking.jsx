// import React, { useState } from 'react'
// import './Bokking.css'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from "yup"
// import psand from '../../assets/img/psand.webp'
// import msand from '../../assets/img/msand.jpg'
// import metal from '../../assets/img/metals.jpg'
// import boulder from '../../assets/img/boulder.webp'
// const Bokking = () => {
//   const imagelist = [psand, msand, metal, boulder]
//   const schema = yup.object({
//     firstName: yup.string().required(),
//     mobile: yup.number().positive().integer().required(),
//     palce: yup.string().required(),
//     material: yup.string().required()

//   })
//   const { register, handleSubmit } = useForm({
//     resolver: yupResolver(schema)
//   })
//   const [material, setmaterial] = useState()
//   const [indx, setIndex] = useState()
//   const submit = (data) => {
//     console.log(data);

//   }
//   return (
//     <div className='booking'>
//       <h2>booking</h2>
//       <form onSubmit={handleSubmit(submit)}>
//         <div className='formdiv'>
//           <div className='labelname'>
//             <label htmlFor="">Full Name</label>
//             <input type="text"  {...register("firstName")} />
//           </div>
//           <div className='labelname'>
//             <label htmlFor="">Mobile</label>
//             <input type="number" {...register("mobile")} />
//           </div>
//           <div className='labelname'>
//             <label htmlFor="">place</label>
//             <input type="text" {...register("palce")} />
//           </div>
//           <div className='labelname'>
//             <label htmlFor="">select material</label>
//             <select name="" id="" {...register('material')}>
//               <option value="">....</option>
//               <option value="Msand" onClick={() => setmaterial(1)}> M sand</option>
//               <option value="P sand" onClick={() => setmaterial('psand')}>P sand</option>
//               <option value="Metal" onClick={() => setmaterial('metal')}>Metal</option>
//               <option value="Boulder" onClick={() => setmaterial('boulder')}>Boulder</option>
//             </select>
//           </div>
//           <div className='labelname'>
//             <label htmlFor="">select your Quandity</label>
//             <select name="" id="">

//             </select>
//           </div>
//         </div>
//         <div className="imagebox">
//          { material && (
//           <img src={imagelist[material]} alt="" />

//          )}
//         </div>
//         <div className='bookbutton'>
//           <button type='submit'>Register</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Bokking

import React, { useState } from 'react'
import './Bokking.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import psand from '../../assets/img/psand.webp'
import msand from '../../assets/img/msand.jpg'
import metal from '../../assets/img/metals.jpg'
import boulder from '../../assets/img/boulder.webp'
import axios from 'axios'

const Bokking = () => {
  const imagelist = {
    msand: msand,
    psand: psand,
    metal: metal,
    boulder: boulder
  }

  const schema = yup.object({
    FullName: yup.string().required(),
    mobile: yup.number().max(10).positive('please enter your mobile').integer('please enter your mobile').required('please enter your mobile'),
    palce: yup.string().required(),
    material: yup.string().required(),
    quandity: yup.string().required(),
  })

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const selectedMaterial = watch('material')  // Watches the selected value

  const submit = (data) => {
    console.log(selectedMaterial);

    console.log(data)
    try {
      const send=axios.post()
    } catch (error) {
      
    }
  }

  return (
    <div className='booking' style={{backgroundImage:`url(https://images.unsplash.com/photo-1456083334823-6e5bc7132162?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHN0b25lfGVufDB8fDB8fHww)`}}>
      <h2>Booking</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div className='formdiv'>
          <div className='labelname'>
            <label>Full Name</label>
            <input type="text" {...register("FullName")} placeholder='Full Name' />
            <small>{errors.FullName && errors.FullName.message}</small>
          </div>
          <div className='labelname'>
            <label>Mobile</label>
            <input type="number" {...register("mobile")} placeholder='Mobile' />
            <small>{errors.mobile&&' please enter 10 digit mobile'}</small>
          </div>
          <div className='labelname'>
            <label>Place</label>
            <input type="text" {...register("palce")} placeholder='Place' />
            <small>{errors.palce&& errors.palce.message}</small>
          </div>
          <div className='labelname'>
            <label>Select Material</label>
            <select {...register('material')}>
              <option value="">....</option>
              <option value="msand">M sand</option>
              <option value="psand">P sand</option>
              <option value="metal">Metal</option>
              <option value="boulder">Boulder</option>
            </select>
            <small>{errors.material&&errors.material.message}</small>
          </div>
          <div className='labelname'>
            <label>Select Quantity {selectedMaterial === "boulder" ? ('in load ') : ("in cubic")}</label>
            {selectedMaterial === "boulder" ?
              <select name="" id="">
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              :
              <select name="" id="">
                <option value="">select......</option>
                <option value="<50">below 50 cubic</option>
                <option value="50">50 cubic</option>
                <option value="100">100 cubic</option>
                <option value="150">150 cubic</option>
                <option value="200">200 cubic</option>
                <option value="250">250 cubic</option>
                <option value="300">300 cubic</option>
              </select>
            }
<small>{errors.quandity&&errors.quandity.message}</small>
          </div>
        </div>
        <div className="imagebox">
          {selectedMaterial && (
            <>
              <img src={imagelist[selectedMaterial]} alt={selectedMaterial} /> <br />
              <span className=' text-text-uppercase'>{selectedMaterial}</span>
            </>
          )}
        </div>
        <div className='bookbutton'>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Bokking
