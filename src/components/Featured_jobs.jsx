import React from 'react'
import { HiGlobe} from "react-icons/hi";
import{featured_job_list} from "./data.jsx"



function Featured_jobs() {
  const Offers = ({icon1,title,position,location,type,company,icon2,bg1,color,bg2}) => {
    return(
      <div className='bg-white rounde-[10px] px-6 py-8 flex flex-col justify-center gap-12 shadow transition-shadow hover:bg-light'>
        <div className='flex items-center gap-x-4'>
          <button className='p-2 rounded-full bg-[#f4fefe] border-none outline-none text-4xl'
          style={{backgroundColor:`${bg1}`, color:`${color}`}}>{icon1 }</button>
          <span>
            <p className='text-2xl font-semibold'>{title}</p>
            <p className='text-lg'>20 Opening</p>
          </span>
        </div>
        <div>
          <p className='text-3xl font-semibold'>{position}</p>
          <span className='flex flex-wrap gap-x-4 items-center justify-between text-xl pt-4'>
            <p className='flex items-center gap-x-2'>
            <HiGlobe className="text-2xl" />{location}
            </p>
            <p className='text-[#93979d]'>{type}</p>
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <span>
            <p className='text-[#93979d] text-lg'>June 8, 2022 by</p>
            <p className='text-xl font-medium'>{company}</p>
          </span>
          <button className='rounde-[#10px] p-2 text-white border-none outline-none'
          style={{backgroundColor:`${bg2}`}}>{icon2}</button>
        </div>
      </div>

    )
  }

  return (
    <div className='bg-[#fcfaf6]'>
      <div className='container mx-auto px-6 py-24'>
        <div className='md:flex items-center justify-between'>
          <h2 className='xl:text-5xl lg:text-3xl text-2xl font-semibold'>Featured Job Offers</h2>
          <button className='rounded-full md:my-0 my-4 bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn'>All Job Offers</button>
        </div>
        <p className='text-2xl mt-4 font-light'>Know your worth and find the job that qualify your life</p>
    
      <div className='mt-12 grid xl:grid-cols-4 lg:grid-cols-3 md:gid-col-2 grid-col-1 gap-6'>
        {featured_job_list.map((item)=>(          <Offers bg1={item.bg1}
           bg2={item.bg2}
            color={item.color} company={item.company}
            icon1={item.icon1}  icon2={item.icon2} location={item.location} position={item.position} title={item.title} type={item.type} />
        ))}
      {/* <Offers bg1="#f4fefe" bg2="black" color="#1ae4e8" company="Gramware" icon1={<BiChart  size={40}/>}  icon2={<HiPencilSquare size={30}/>} location="San Diego, CA" position="Finacial Analyst " title="Finance" type="Full Time"  /> */}
      </div>
    </div>
    </div>
  )
}

export default Featured_jobs
