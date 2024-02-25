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
import { ReactTyped } from "react-typed";
import AboutImg from '../src/assets/images/about.png'
import { IoCheckmark } from "react-icons/io5";
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
              <li><a href='about' className='text-lg uppercase font-medium text-nav-color font-raleway hover:text-hover-color duration-300'>about</a></li>
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
    <section id='banner' className='bg-black py-[100px]'>
      <div className="max-w-container mx-auto">
        <div className="banner_main flex justify-between items-center">
          <div className="banner_content">
            <h5 className='font-lato text-lg  font-medium uppercase text-white pb-[20px]'>WELCOME TO MY WORLD</h5>
            <h2 className='font-lato text-5xl font-bold  text-white pb-[20px]'>Hi i'm <span className='text-hover-color'>Modabbir Hossen</span></h2>
            <h3 className='font-lato text-3xl font-bold  text-white'>And I'm a <span className='typed'>
            <ReactTyped
                strings={[
                  "Full Stack Developer.",
                  "MERN Stack Developer.",
                  "Front-End Developer.",
                  "Web Developer.",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              >
              </ReactTyped>
              </span></h3>
            <p className='text-white font-normal text-base font-lato leading-[180%] pt-[20px] pr-[200px]'>I am a MERN Stack Developer, I design, develop and maintain web applications using MERN Stack Development technologies <span className='text-hover-color'> e.g MongoDB, Express.js, React.js, and Node.js</span></p>
            <div className='pt-[50px]'>
              <h4 className='font-lato text-lg  font-medium uppercase text-white'>FIND WITH ME</h4>
             <div className='flex items-center gap-x-[25px] pt-[25px]'>
              <div className='socile_icon'>
                <a target='_blanck' href="https://www.linkedin.com/in/modabbir-hossen/" className=' text-white  bg-hover-color w-[40px] h-[40px] text-[24px] flex justify-center items-center rounded-[50%]'><FaLinkedin />
                <p className=' text-hover-color font-lato text-base  font-medium '>Linkedin</p>
                </a>
              </div>
              <div className='socile_icon'>
              <a target='_blanck' href="https://twitter.com/modabbirhossen" className=' text-white  bg-hover-color w-[40px] h-[40px] text-[24px] flex justify-center items-center rounded-[50%]'><FaTwitter />
              <p className=' text-hover-color font-lato text-base  font-medium '>twitter</p>
              </a>
              </div>
              <div className='socile_icon'>
                <a target='_blanck' href="https://github.com/w3modabbir" className=' text-white  bg-hover-color w-[40px] h-[40px] text-[24px] flex justify-center items-center rounded-[50%]'><FaGithub />
                <p className=' text-hover-color font-lato text-base  font-medium '>GitHub</p>
                </a>
              </div>
             </div>
            </div>
          </div>
          <div className="banner_img">
            <div className="img_backgroud  bg-hover-color w-[300px] h-[300px] rounded-[50%] overflow-hidden relative border-[3px] border-white">
              <Image src={BannerImg} alt="not found" className="w-full h-full object-cover rounded-[50%]"/>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    {/*================== Banner Part End Here  ==============*/}

    {/*================== About Part Start Here  ============*/}
    <section id='about' className=' py-[100px]'>
      <div className="max-w-container mx-auto">
        <div className="about_heading text-center pb-[50px]">
            <h2 className='font-lato capitalize font-bold text-4xl text-heading'>About <span className='text-hover-color'>Me</span> </h2>
            <div class="progras_bar"></div>
        </div>
          <div className="about_main flex gap-[150px] items-center">
            <div className="about_img bg-heading-bg py-[20px] px-[20px] rounded-[10px] shadow-xl shadow-white">
              <div className="img_back w-[350px] h-[350px] overflow-hidden">
                <Image src={AboutImg} alt="not found" class="w-full h-full object-cover"/>
              </div>
            </div>
            <div className="about_skill">
              <h5 className='text-hover-color font-medium font-lato text-xl pb-[20px]'>Hello There, I am</h5>
              <h3 className='text-[24px] font-lato font-semibold'>I'm a MERN Stack Developer</h3>
              <div className='pt-[30px]'>
                <ul className='flex flex-col gap-[20px]'>
                  <li className='text-lg font-lato font-medium text-heading '> 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management</li>
                  <li className='text-lg font-lato font-medium text-heading '> I will develop custom mern stack web applications as a mern stack developer</li>
                  <li className='text-lg font-lato font-medium text-heading '> I will be react js developer</li>
                </ul>
              </div>
              <div className='flex gap-[24px] pt-[30px]'>
                <div className='socile_icon_about'>
                  <a target='_blanck' href="https://www.linkedin.com/in/modabbir-hossen/" className=' text-white  bg-hover-color w-[40px] h-[40px] text-[24px] flex justify-center items-center rounded-[50%]'><FaLinkedin />
                  <p className=' text-hover-color font-lato text-base font-medium '>Linkedin</p>
                  </a>
                </div>
                <div className='socile_icon_about'>
                <a target='_blanck' href="https://twitter.com/modabbirhossen" className=' text-white  bg-hover-color w-[40px] h-[40px] text-[24px] flex justify-center items-center rounded-[50%]'><FaTwitter />
                <p className=' text-hover-color font-lato text-base  font-medium '>twitter</p>
                </a>
                </div>
                <div className='socile_icon_about'>
                  <a target='_blanck' href="https://github.com/w3modabbir" className=' text-white  bg-hover-color w-[40px] h-[40px] text-[24px] flex justify-center items-center rounded-[50%]'><FaGithub />
                  <p className=' text-hover-color font-lato text-base  font-medium '>GitHub</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    {/*================== About Part End Here  ==============*/}
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
