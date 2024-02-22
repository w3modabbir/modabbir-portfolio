import { useState } from 'react'
import './App.css'
import LogoImg from '../src/assets/images/logo.png'
import Image from './componants/Image';
import { FaLinkedin } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { SiUpwork } from "react-icons/si";
import { SiFreelancer } from "react-icons/si";

function App() {
  

  return (
   <>
    {/*================== NavBar Part Start Here  ============*/}
    <nav className='bg-nav-bg py-[30px]'>
      <div className="max-w-container mx-auto">
        <div className="navbar_main flex items-center">
          <div className="logo w-[25%] overflow-hidden">
            <a href="">
              <Image src={LogoImg} alt="not found" className="w-full h-full object-cover"/>
            </a>
          </div>
          <div className="navbar_manu w-[50%] mx-auto ">
            <ul className='flex justify-center gap-x-[32px]'>
              <li><a href='#' className='text-lg uppercase font-medium text-nav-color font-raleway hover:text-hover-color duration-300'>HOME</a></li>
              <li><a href='#' className='text-lg uppercase font-medium text-nav-color font-raleway hover:text-hover-color duration-300'>about</a></li>
              <li><a href='#' className='text-lg uppercase font-medium text-nav-color font-raleway hover:text-hover-color duration-300'>service</a></li>
              <li><a href='#' className='text-lg uppercase font-medium text-nav-color font-raleway hover:text-hover-color duration-300'>project</a></li>
              <li><a href='#' className='text-lg uppercase font-medium text-nav-color font-raleway hover:text-hover-color duration-300'>contact</a></li>
            </ul>
          </div>
          <div className="navbar_contact flex w-[25%] justify-end gap-x-[20px]">
              <a target='_blank' href="https://www.fiverr.com/modabbir_masum" className='bg-[#13d379] py-[10px] px-[15px] rounded-[3px] text-white text-3xl'><SiFiverr /></a>
              <a target='_blank' href="https://www.upwork.com/freelancers/~012aa07309b295da8a" className='bg-[#108a00] py-[10px] px-[15px] rounded-[3px] text-white text-3xl'><SiUpwork /></a>
              <a target='_blank' href="https://www.freelancer.com/u/modabberweb" className='bg-[#1772eb] py-[10px] px-[15px] rounded-[3px] text-white text-3xl'><SiFreelancer /></a>
          </div>
        </div>
      </div>
    </nav>
    {/*================== NavBar Part End Here  ==============*/}
    {/*================== NavBar Part Start Here  ============*/}
    {/*================== NavBar Part End Here  ==============*/}
    {/*================== NavBar Part Start Here  ============*/}
    {/*================== NavBar Part End Here  ==============*/}
    {/*================== NavBar Part Start Here  ============*/}
    {/*================== NavBar Part End Here  ==============*/}
    {/*================== NavBar Part Start Here  ============*/}
    {/*================== NavBar Part End Here  ==============*/}
    {/*================== NavBar Part Start Here  ============*/}
    {/*================== NavBar Part End Here  ==============*/}
    {/*================== NavBar Part Start Here  ============*/}
    {/*================== NavBar Part End Here  ==============*/}
    {/*================== NavBar Part Start Here  ============*/}
    {/*================== NavBar Part End Here  ==============*/}
    {/*================== NavBar Part Start Here  ============*/}
    {/*================== NavBar Part End Here  ==============*/}
   </>
  )
}

export default App
