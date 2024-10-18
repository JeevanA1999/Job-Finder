import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaSlack, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className=' bg-[#1b1f23] py-20'>
        <div className='container mx-auto px-6'>
          <h2 className='lg:text-4xl text-white text-center font-semibold'>
            Ready for Your Next Hire with Us?
          </h2>
          <p className='lg:w-1/2 mx-auto text-white text-center text-xl py-8'>
            Along with conventional advertising and below-the-line activities, organizations have come to realize that they need to invest.
          </p>
          <div className='flex justify-center my-8'>
            <Link to={'/login'} className='rounded-full bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn'>
              Login to Community
            </Link>
          </div>
          <section className='flex flex-wrap pt-16 justify-between gap-8'>
            <div className='flex flex-col justify-between'>
            <Link to={"/"} className="flex items-center lg:text-5xl text-3xl">
                <button className="rounded-full h-12 w-12 flex items-center justify-center text-white bg-primary lg:text-4xl text-2xl outline-none border-none">
                  Jo
                </button>
                <p className="font-semibold leading-tight">bline</p>
              </Link>
           
              <p className='text-white text-lg'>Call us</p>
              <p className='text-primary text-lg'>{123} 456-7890</p>
              <p className='text-white text-lg'>
                90 Fifth Avenue, 3rd Floor <br />
                San Francisco, CA 1980 <br /> office@jobline.com
              </p>
            </div>
            <div>
              <h6 className='text-white text-2xl pb-6'>Community</h6>
              <ul className='flex flex-col gap-6 text-lg'>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  Against Discrimination
                </a>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  Invite Friends
                </a>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  Gift cards
                </a>
              </ul>
            </div>
            <div>
              <h6 className='text-white text-2xl pb-6'>Booking Support</h6>
              <ul className='flex flex-col gap-6 text-lg'>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  COVID-19
                </a>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  Help Center
                </a>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  Support
                </a>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  Trust & Safety
                </a>
              </ul>
            </div>
            <div>
              <h6 className='text-white text-2xl pb-6'>About</h6>
              <ul className='flex flex-col gap-6 text-lg'>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  How it Works
                </a>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  Careers
                </a>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  About Us
                </a>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  Media
                </a>
              </ul>
            </div>
            <div>
              <h6 className='text-white text-2xl pb-6'>Become an Employer</h6>
              <ul className='flex flex-col gap-6 text-lg'>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  Post your job
                </a>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  Business account
                </a>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  Resume Center
                </a>
                <a href='#' className='text-white no-underline hover:text-primary'>
                  Community
                </a>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className='bg-[#14181c] py-6'>
        <div className='container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center'>
          <p className='text-white text-center lg:text-left text-sm'>
            &copy; 2024 Jobline. All rights reserved.
          </p>
          <div className='flex gap-6 mt-4 lg:mt-0'>
            <a href='#' className='text-white'>
              <FaFacebookF size={20} />
            </a>
            <a href='#' className='text-white'>
              <FaTwitter size={20} />
            </a>
            <a href='#' className='text-white'>
              <FaSlack size={20} />
            </a>
            <a href='#' className='text-white'>
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
