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
import htmlIcon from '../src/assets/images/html.png'
import cssIcon from '../src/assets/images/css.png'
import jsIcon from '../src/assets/images/js.png'
import reactIcon from '../src/assets/images/react.png'
import jquerytIcon from '../src/assets/images/jquery.jpg'
import materialtIcon from '../src/assets/images/material.png'
import sassIcon from '../src/assets/images/sass.png'
import tailwindIcon from '../src/assets/images/tailwind.png'
import bootstrap from '../src/assets/images/bootstrap.png'
import FireBase from '../src/assets/images/firebase.png'
import MongoDB from '../src/assets/images/mongodb.png'
import nodeJS from '../src/assets/images/node.png'
import API from '../src/assets/images/api.png'
import Express from '../src/assets/images/express.png'
import Photoshop from '../src/assets/images/photoshop.png'
import Figma from '../src/assets/images/figma.png'
import uiuxDesign from '../src/assets/images/service1.jpg'
import Frontend from '../src/assets/images/service2.jpg'
import backEndDeveloper from '../src/assets/images/service3.jpg'


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
    <section id='banner' className='bg-slate-900	 py-[100px]'>
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
            <div className="about_img bg-slate-900 py-[20px] px-[20px] rounded-[10px] shadow-xl shadow-white">
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
                  <li className='text-lg font-lato font-medium text-heading '> I will ui ux design mobile ui design or website ui ux design for you with figma</li>
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

    {/*================== Skill Part Start Here  ============*/}
    <section id='skill' className=' py-[100px] bg-slate-900	'>
      <div className="max-w-container mx-auto">
        <div className="about_heading text-center pb-[50px]">
              <h2 className='font-lato capitalize font-bold text-4xl text-white'>My <span className='text-hover-color'>Skills</span> </h2>
              <div class="progras_bar bar2"></div>
        </div>
        <div className="skill_main flex gap-[24px]">
          <div className="skill_item bg-white w-[377px] py-[20px] px-[25px] rounded-[10px]">
            <h2 className='text-[24px] font-lato font-bold text-hover-color text-center '>Front-End Development</h2>
            <div className='flex gap-[24px] pt-[25px] flex-wrap'>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                <Image src={htmlIcon} alt="not found" class="w-full h-full object-cover  "/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>HTML</h4>
              </div>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                  <Image src={cssIcon} alt="not found" class="w-full h-full object-cover  "/>
                </div>
                  <h4 className='font-lato font-semibold text-base pt-[10px]'>CSS</h4>
              </div>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                  <Image src={jsIcon} alt="not found" class="w-full h-full object-cover  "/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>Javascrift</h4>
              </div>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                  <Image src={reactIcon} alt="not found" class="w-full h-full object-cover  "/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>React Js</h4>
              </div>
              {/* <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                    <Image src={reactIcon} alt="not found" class="w-full h-full object-cover"/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>Redux Toolki</h4>
              </div> */}
              <div>
              <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                    <Image src={jquerytIcon} alt="not found" class="w-full h-full object-cover"/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>jQuery</h4>
              </div>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                    <Image src={sassIcon} alt="not found" class="w-full h-full object-cover"/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>SASS</h4>
              </div>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                    <Image src={tailwindIcon} alt="not found" class="w-full h-full object-cover"/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>Tailwind css</h4>
              </div>
              <div>
              <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                    <Image src={bootstrap} alt="not found" class="w-full h-full object-cover"/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>Bootstrap </h4>
              </div>
              <div>
              <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                    <Image src={materialtIcon} alt="not found" class="w-full h-full object-cover"/>
                </div>
               <h4 className='font-lato font-semibold text-base pt-[10px]'> Material ui </h4>
              </div>
            </div>
          </div>
          <div className="skill_item bg-white  w-[377px] py-[20px] px-[25px]  rounded-[10px]">
            <h2 className='text-[24px] font-lato font-bold text-hover-color text-center '> BACK-END Development</h2>
            <div className='flex gap-[24px] pt-[25px] flex-wrap'>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                <Image src={nodeJS} alt="not found" class="w-full h-full object-cover  "/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>Node.js</h4>
              </div>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                  <Image src={Express} alt="not found" class="w-full h-full object-cover  "/>
                </div>
                  <h4 className='font-lato font-semibold text-base pt-[10px]'>Express.js</h4>
              </div>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                  <Image src={MongoDB} alt="not found" class="w-full h-full object-cover  "/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>MongoDB</h4>
              </div>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                  <Image src={FireBase} alt="not found" class="w-full h-full object-cover  "/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>FireBase</h4>
              </div>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                  <Image src={API} alt="not found" class="w-full h-full object-cover  "/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>RESTful API</h4>
              </div>
            </div>
          </div>
          <div className="skill_item bg-white w-[377px] py-[20px] px-[25px]  rounded-[10px]">
            <h2 className='text-[24px] font-lato font-bold text-hover-color text-center '>UI UX Design</h2>
            <div className='flex gap-[24px] pt-[25px] flex-wrap'>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                <Image src={Figma} alt="not found" class="w-full h-full object-cover  "/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>Figma</h4>
              </div>
              <div>
                <div className='w-[30px] h-[30px] overflow-hidden m-auto'>
                <Image src={Photoshop} alt="not found" class="w-full h-full object-cover  "/>
                </div>
                <h4 className='font-lato font-semibold text-base pt-[10px]'>Adobe Photoshop</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*================== Skill Part End Here  ==============*/}

    {/*================== service Part Start Here  ============*/}
    <section id='service' className='py-[100px]'>
      <div className="max-w-container mx-auto">
        <div className="about_heading text-center pb-[50px]">
          <h2 className='font-lato capitalize font-bold text-4xl text-heading'>My <span className='text-hover-color'>Service</span> </h2>
          <h3 className='font-lato capitalize font-semibold pt-[10px] text-4xl text-heading'>Service Provide For My Clients</h3>
          <div class="progras_bar"></div>
        </div>
        <div className="service_main flex ] gap-[24px]">
          <div className="service_item w-[375px] py-[20px] px-[25px] rounded-[10px]">
            <h3 className='text-2xl font-lato font-bold text-hover-color pb-[20px]'>UI UX Design</h3>
            <div className="service_img overflow-hidden rounded-[10px] w-full">
              <Image src={uiuxDesign} alt="not found" class="w-full h-full object-cover "/>
            </div>
            <div className="service_text pt-[20px]">
              <h6 className='text-base font-lato font-normal text-heading leading-[170%]'>I have 1+ years of experience as a UX UI designer specializing in web and mobile UI UX design. As a skilled UI/UX designer, I specialize in crafting stunning and intuitive mobile apps and web UI/UX designs.</h6>
            </div>
            <div className='pt-[50px]'>
              <a href="#" className='bg-hover-color text-white py-[12px] px-[20px] rounded-[3px] capitalize font-raleway font-medium'>Read More</a>
            </div>
          </div>
          <div className="service_item w-[375px] py-[20px] px-[25px] rounded-[10px]">
            <h3 className='text-2xl font-lato font-bold text-hover-color pb-[20px]'>Front-End Development</h3>
            <div className="service_img overflow-hidden rounded-[10px] w-full">
              <Image src={Frontend} alt="not found" class="w-full h-full object-cover "/>
            </div>
            <div className="service_text pt-[20px]">
              <h6 className='text-base font-lato font-normal text-heading leading-[170%]'>I'm a Frontend  Developer, I mastered React Js, HTML, CSS, JavaScript, Tailwind CSS, Material UI, Bootstrap, jQuery. I can convert your design into pixel perfect front-end website.</h6>
            </div>
            <div className='pt-[50px]'>
              <a href="#" className='bg-hover-color text-white py-[12px] px-[20px] rounded-[3px] capitalize font-raleway font-medium'>Read More</a>
            </div>
          </div>
          <div className="service_item w-[375px] py-[20px] px-[25px] rounded-[10px]">
            <h3 className='text-2xl font-lato font-bold text-hover-color pb-[20px]'>UI UX Design</h3>
            <div className="service_img overflow-hidden rounded-[10px] w-full">
              <Image src={backEndDeveloper} alt="not found" class="w-full h-full object-cover "/>
            </div>
            <div className="service_text pt-[20px]">
              <h6 className='text-base font-lato font-normal text-heading leading-[170%]'>I am a Professional MERN Stack Web Developer i having 1+ years of working experiences on MERN STACK Development. I have strong Knowledge on ReactJS, NodeJS, ExpressJS, MongoDB, Firebase and many more advanced MERN STACK technologies. With those, I will be your Custom MERN DEVELOPER.</h6>
            </div>
            <div className='pt-[50px]'>
              <a href="#" className='bg-hover-color text-white py-[12px] px-[20px] rounded-[3px] capitalize font-raleway font-medium'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*================== service Part End Here  ==============*/}
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
