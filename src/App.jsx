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
import BannerImg from '../src/assets/images/modabbir.png'

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
              <li><a href='banner' className='text-lg uppercase font-medium text-nav-color font-raleway hover:text-hover-color duration-300'>HOME</a></li>
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
    
    {/*================== Banner Part Start Here  ============*/}
    <section id='banner' className='bg-black py-[80px]'>
      <div className="max-w-container mx-auto">
        <div className="banner_main flex justify-between items-center">
          <div className="banner_content">
            <h5 className='font-lato text-lg  font-medium uppercase text-white pb-[20px]'>WELCOME TO MY WORLD</h5>
            <h2 className='font-lato text-5xl font-bold  text-white pb-[20px]'>Hi im <span className='text-hover-color'>Modabbir Hossen</span></h2>
            <h3 className='font-lato text-3xl font-bold  text-white'>And I'm a <span>MERN Stack Developer</span></h3>
            <p className='text-white font-normal text-base font-lato leading-[180%] pt-[20px] pr-[200px]'>I am a MERN Stack Developer, I design, develop and maintain web applications using MERN Stack Development technologies <span className='text-hover-color'> e.g MongoDB, Express.js, React.js, and Node.js</span></p>
            <div>
              <h4>FIND WITH ME</h4>
              <a href="#"></a>
            </div>
          </div>
          <div className="banner_img">
            <div className="img_backgroud  bg-hover-color w-[300px] h-[300px] rounded-[50%] overflow-hidden relative">
              <Image src={BannerImg} alt="not found" className="w-full h-full object-cover rounded-[50%]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*================== Banner Part End Here  ==============*/}
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
