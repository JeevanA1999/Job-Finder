import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaSlack, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer >
        <div className=' bg-[#1b1f23] py-20'>
            <div className='container mx-auto px-6'>
                <h2 className='lg:text-4xl text-white text-center font-semibold'>Ready for Your Next Hire with Us?</h2>
                <p className='lg:w-1/2 mx-auto text-white text-center text-xl py-8'>
                Along with conventional advertising and below-the-line activities,
                 organizations have come to realize that they need to invest
                </p>
                <div className=' flex justify-center my-8'>
                    <button className=' rounded-full bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn'>Login to Community</button>
                </div>
                <section className='flex flex-wrap pt-16 justify-between gap-8'>
                    <div className='flex flex-col justify-between'>
                        <span className=' flex  items-center lg:text-5xl text-3xl'>
                            <button className=' rounded-full py-1  text-white bg-primary lg:text-5xl text-3xl outline-none border-none'>Jo</button>
                            <p className='font-semibold leading-tight text-white'>bline</p>
                        </span>
                        <p className='text-white text-lg'>Call us</p>
                        <p className='text-primary text-lg'>{123} 456-7890</p>
                        <p className='text-white text-lg'>
                            90 Fifth Avenue, 3rd Floor <br/>
                            San Francisco, CA 1980 <br/> office@jobline.com
                        </p>
                    </div>
                    <div>
                        <h6 className=' text-white text-2xl pb-6'>Community</h6>
                        <ul className='flex flex-col gap-6 text-lg'>
                            <a href='#' className='text-white no-underline hover:text-primary'>Againt Discrimination</a>
                            <a href='#' className='text-white no-underline hover:text-primary'>Invite Friends</a>
                            <a href='#' className='text-white no-underline hover:text-primary'>Gift cards</a>
                        </ul>
                    </div>
                    <div>
                        <h6 className=' text-white text-2xl pb-6'>Booking Support</h6>
                        <ul className='flex flex-col gap-6 text-lg'>   
                        <a href='#' className='text-white no-underline hover:text-primary'>COVID-19</a>
                        <a href='#'className='text-white no-underline hover:text-primary'>Help Center</a>
                        <a href='#'className='text-white no-underline hover:text-primary'>Support</a>
                        <a href='#'className='text-white no-underline hover:text-primary'>Trust & Safety</a>
                        </ul>
                    </div>
                    <div>
                        <h6 className=' text-white text-2xl pb-6'>About</h6>
                        <ul className='flex flex-col gap-6 text-lg'>   
                        <a href='#' className='text-white no-underline hover:text-primary'>How it Worka</a>
                        <a href='#' className='text-white no-underline hover:text-primary'>Careers</a>
                        <a href='#'className='text-white no-underline hover:text-primary'>About Us</a>
                        <a href='#' className='text-white no-underline hover:text-primary'>Media</a>
                        </ul>
                    </div>
                    <div>
                        <h6 className=' text-white text-2xl pb-6'>Become an employer</h6>
                        <ul className='flex flex-col gap-6 text-lg'>   
                        <a href='#' className='text-white no-underline hover:text-primary'>Post your job</a>
                        <a href='#' className='text-white no-underline hover:text-primary'>Business account</a>
                        <a href='#'className='text-white no-underline hover:text-primary'>resume Center</a>
                        <a href='#' className='text-white no-underline hover:text-primary'>Community</a>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <div>
            <p>All rights reserved. Jobline</p>
            <span>
                <FaFacebookF size={30}/>
                <FaTwitter size={30}/>
                <FaSlack size={30}/>
                <FaLinkedinIn sizee={30}/>
                
            </span>
        </div>
      
    </footer>
  )
}

export default Footer
