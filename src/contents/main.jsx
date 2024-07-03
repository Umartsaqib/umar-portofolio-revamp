import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "../components/scrolltotop";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true, 
    });
  }, []);
  return (
    <div>
      {/* Home */}
      <ScrollToTop/>
      <section className="bg-main container-fluid" id="home">
        <Navbar />
        <div className="row d-flex align-items-center min-vh-100">
          <div className="col-12 text-start px-4 mt-5">
            <h2 className="mt-1 fw-bold text-white">Muhammad Umar Tsaqib</h2>
            <p className="mb-5 italic text-white">Always want to improve skills and always want to learn something new</p>
            <div className="col-12 d-flex gap-4">
              <div className="btn-secondary"><a href="https://docs.google.com/document/d/1YMVM4rSwQHsIyysNyFpnrQpZu4t_SxRcNv6zpauwLnw/edit?usp=sharing" className="text-decoration-none text-black">View CV</a></div>
              <div className="btn-primary"><a href="#about" className="text-decoration-none text-white">Get Started</a></div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="bg-line"></div>
      {/* About Me */}
      <section className="container-fluid bg-black min-vh-100" id="about">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div className="ms-4 mt-80px btn-secondary" >About Me</div>
          </div>
          <div className="col-12">
            <p className="mt-95px text-white italic text-xxl fw-900 text-center" data-aos="fade-up">I’m an information system student at Bina Nusantara University who learn digital technology and Software engineering (bootcamp)</p>
          </div>
        </div>
        <div className="mt-144px">
          <div className="row mx-5 pb-5" data-aos="fade-up">
            <div className="col-sm-12 col-lg-3 d-flex flex-column gap-3">
              <div>
                <img src="/assets/teamwork.png" alt="img-fluid" style={{ width: 32, height: 32 }} />
              </div>
              <div>
                <p className="text-white">Teamwork</p>
              </div>
              <div>
                <p className="text-white">I excel in working collaboratively to achieve common goals.</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 d-flex flex-column gap-3">
              <div>
                <img src="/assets/communication.png" alt="img-fluid" style={{ width: 32, height: 32 }} />
              </div>
              <div>
                <p className="text-white">Communication</p>
              </div>
              <div>
                <p className="text-white">I effectively convey technical concepts to diverse stakeholders.</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 d-flex flex-column gap-3">
              <div>
                <img src="/assets/critical.png" alt="img-fluid" style={{ width: 32, height: 32 }} />
              </div>
              <div>
                <p className="text-white">Critical Thinking</p>
              </div>
              <div>
                <p className="text-white">My critical thinking skills help me analyze problems and make informed decisions.</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 d-flex flex-column gap-3">
              <div>
                <img src="/assets/timemanagement.png" alt="img-fluid" style={{ width: 32, height: 32 }} />
              </div>
              <div>
                <p className="text-white">Time Management</p>
              </div>
              <div>
                <p className="text-white">My time management abilities ensure I meet deadlines and maintain productivity in fast-paced environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-line"></div>
      {/* skills */}
      <section className="container-fluid bg-black min-vh-100" id="skills">
        <div className="row">
          <div className="col-12 text-end" data-aos="fade-up">
            <div className="me-4 mt-80px btn-secondary">Skills</div>
          </div>
          <div className="col-12" data-aos="fade-up">
            <p className="mt-95px text-white italic text-xxl fw-900 text-center">Skills that i get from my experience</p>
          </div>
        </div>
        <div className="py-5 row gap-4 justify-content-center">
            <div className="col-sm-12 kotak" data-aos="fade-up">
              <div className="ps-2">
                <p className="pt-3 text-md fw-700">Intern GLI</p>
                <p className="fw-900 italic text-xl">UI Engineer</p>
                <p className="fw-300 text-md">Medium</p>
                <div className="row">
                  <div className="col-2">
                    <p>Skills</p>
                  </div>
                  <div className="col-10"><hr className="hr" /></div>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-lg"></i>
                  <p>Design Product</p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-lg"></i>
                  <p>Design Prototype</p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-lg"></i>
                  <p>Design Thinking Process</p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-lg"></i>
                  <p>Bootstrap</p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-lg"></i>
                  <p>React</p>
                </div>
                <div className="d-flex gap-3">
                  <i className="bi bi-check-lg"></i>
                  <p>Vue.js</p>
                </div>
              </div>
            </div>

          <div className="kotak" data-aos="fade-up">
            <div className="ps-2">
              <p className="pt-3 text-md fw-700">Revou Bootcamp</p>
              <p className="fw-900 italic text-xl">Front End Developer</p>
              <p className="fw-300 text-md">Medium</p>
              <div className="row">
                <div className="col-2">
                  <p>Skills</p>
                </div>
                <div className="col-10"><hr className="hr" /></div>
              </div>
              <div className="d-flex gap-3">
                <i className="bi bi-check-lg"></i>
                <p>HTML</p>
              </div>
              <div className="d-flex gap-3">
                <i className="bi bi-check-lg"></i>
                <p>CSS</p>
              </div>
              <div className="d-flex gap-3">
                <i className="bi bi-check-lg"></i>
                <p>JavaScript</p>
              </div>
              <div className="d-flex gap-3">
                <i className="bi bi-check-lg"></i>
                <p>React</p>
              </div>
              <div className="d-flex gap-3">
                <i className="bi bi-check-lg"></i>
                <p>TypeScript</p>
              </div>
              <div className="d-flex gap-3">
                <i className="bi bi-check-lg"></i>
                <p>Next.js</p>
              </div>
              <div className="d-flex gap-3">
                <i className="bi bi-check-lg"></i>
                <p>Tailwind CSS</p>
              </div>
            </div>
          </div>

          <div className="kotak" data-aos="fade-up">
            <div className="ps-2 col-md-12">
              <p className="pt-3 text-md fw-700">Revou Bootcamp</p>
              <p className="fw-900 italic text-xl">Backend</p>
              <p className="fw-300 text-md">Newbie</p>
              <div className="row">
                <div className="col-2">
                  <p>Skills</p>
                </div>
                <div className="col-10"><hr className="hr" /></div>
              </div>
              <div className="d-flex gap-3">
                <i className="bi bi-check-lg"></i>
                <p>MySQL</p>
              </div>
              <div className="d-flex gap-3">
                <i className="bi bi-check-lg"></i>
                <p>API</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-line"></div>
      {/* education */}
      <section className="container-fluid bg-black min-vh-100" id="education">
        <div className="row">
          <div className="col-12 text-center" data-aos="fade-up">
            <div className="me-4 mt-80px btn-secondary">Education</div>
          </div>
          <div className="col-12" data-aos="fade-up">
            <p className="mt-5 text-white italic text-xxl fw-900 text-center">My Latest Education</p>
          </div>
        </div>
        <div className="mt-144px position-relative">
          <div className="line"></div>
          <div className="row pb-5">
            <div className="col-sm-12 col-md-4 col-lg-4 text-white d-flex align-items-center flex-column position-relative" data-aos="fade-up">
              <p className="dot"></p>
              <p className="text-xl fw-900">Science major</p>
              <p className="text-md fw-700">SMAN 2 Tangerang Selatan</p>
              <p className="text-md fw-500">2018 - 2021</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 text-white d-flex align-items-center flex-column position-relative" data-aos="fade-up">
              <p className="dot"></p>
              <p className="text-xl fw-900">Information System</p>
              <p className="text-md fw-700">Binus Alam Sutera</p>
              <p className="text-md fw-500">2021 - 2025</p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 text-white d-flex align-items-center flex-column position-relative" data-aos="fade-up">
              <p className="dot"></p>
              <p className="text-xl fw-900">Software Engineer</p>
              <p className="text-md fw-700">Revou Bootcamp</p>
              <p className="text-md fw-500">2024 - 2024</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-line"></div>
      {/* experience */}
      <section className="container-fluid bg-black min-vh-100" id="experience">
        <div className="row">
          <div className="col-12 text-start" data-aos="fade-up">
            <div className="ms-4 mt-80px btn-secondary">Experience</div>
          </div>
          <div className="col-12" data-aos="fade-up">
            <p className="mt-5 text-white italic text-xxl fw-900 text-center">My Experience</p>
          </div>
        </div>
        <div className="row d-flex px-5 pt-5 pb-5">
          <div className="col-sm-12 col-lg-6 text-white" data-aos="fade-up">
            <p>Ui Engineer Intern, Global Loyalty Indonesia</p>
            <p>February 2024 – August 2024</p>
            <ol>
              <li>Design library/system and how it works</li>
              <li>Negotiate through a variety of requirements, from vague to well-defined, simple to complex</li>
              <li>Create static content campaign</li>
              <li>Generate email template</li>
              <li>Create UI Design product</li>
              <li>Developed a comprehensive documentation guide for UI Engineer interns, enhancing the onboarding process Designed and implemented a new menu on Alfagift Apps</li>
              <li>Improving user experience Maintained static content for official store and promotions</li>
              <li>Ensuring up-to-date and accurate information Collaborated with the development team to troubleshoot and resolve UI issues, enhancing app performance</li>
            </ol>
          </div>
          <div className="col-sm-12 col-lg-6 text-white" data-aos="fade-up">
            <p>Front End Developer, Revou Project</p>
            <p>April 2024 – April 2024</p>
            <ol>
              <li>Designed and developed a responsive web interface for CareerSearch</li>
              <li>improving site accessibility Created user-friendly pages</li>
              <li>enhancing user engagement and satisfaction Implemented form validation for login and signup</li>
              <li>improving data integrity and security Developed reusable components for easy use</li>
              <li>enhancing development efficiency and consistency</li>
            </ol>
          </div>
        </div>
      </section>
      {/* project */}
      <div className="bg-line"></div>
      <section className="container-fluid bg-black min-vh-100" id="projects">
        <div className="row">
          <div className="col-12 text-end" data-aos="fade-up">
            <div className="me-4 mt-80px btn-secondary">Projects</div>
            <div className="btn-secondary"><a href="#web" className="text-decoration-none text-black">👉Websites👈</a></div>
          </div>
        </div>
        <div className="row px-5 py-5">
          <div className="col-sm-12 col-md-6 col-lg-6 text-white align-items-center" data-aos="fade-up">
            <p className="italic fw-900 text-xxl">ui/ux design project</p>
            <p className="fw-700 text-xl">M-Banking (Clone)</p>
            <p className="btn-primary">Figma</p>
            <div className="text-white my-4">
              <p>Background</p>
              <p>This project is an assignment from the campus where we are working on it in groups, tasked with cloning the design of an existing application.
              </p>
            </div>
            <div className="text-white my-4">
              <p>Criteria</p>
              <p><ul>
                <li>Able to design UI</li>
                <li>Cloning apps</li>
                <li>Creating designs as close as possible</li>
                <li>Colorful design</li>
                </ul></p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex gap-4 align-items-center justify-content-center" data-aos="fade-up">
            {/* carousel  bca*/}
            <Carousel className="my-carousel">
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bca1.png"
                  alt="Second slide"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bca2.png"
                  alt="Second slide"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bca3.png"
                  alt="Third slide"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bca4.png"
                  alt="Third slide"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bca5.png"
                  alt="Third slide"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bca6.png"
                  alt="Third slide"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bca7.png"
                  alt="Third slide"
                />
                 </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>

      <div className="bg-line"></div>
      <section className="container-fluid bg-black min-vh-100 ">
      <div className="row">
          <div className="col-12 text-end">
            <div className="me-4 mt-80px"></div>
          </div>
        </div>
        <div className="row px-5 py-5 align-items-center ">
          <div className="col-sm-12 col-md-6 col-lg-6 text-white align-items-center" data-aos="fade-up">
            <p className="italic fw-900 text-xxl">BookFormer</p>
            <p className="btn-primary">Figma</p>
            <div className="text-white my-4">
              <p>Background</p>
              <p>This project is a group project for our college course where we are required to create an application for buying and selling books online. We have to develop an app with the given features for online book transactions.
              </p>
            </div>
            <div className="text-white my-4">
              <p>Criteria</p>
              <p><ul>
                <li>Create 4 menus (Home, Explore, Activity, and Profile)</li>
                <li>Create lists of books for sale</li>
                <li>Create a search bar</li>
                <li>Create book categories</li>
                <li>Create purchase history</li>
                <li>Create product reviews</li>
                <li>Create a payment page</li>
                <li>Create a shopping cart page</li>
                <li>Create sign-in/sign-up pages</li>
                </ul></p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex gap-4 align-items-center justify-content-center" data-aos="fade-up">
           {/* carousel  bookformer*/}
            <Carousel className="my-carousel">
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf1.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf2.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf3.png"

                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf4.png"

                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf5.png"

                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf6.png"

                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf7.png"

                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf8.png"

                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf9.png"

                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf-10.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf11.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf12.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf13.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/bf14.png"
                />
                 </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>

      <div className="bg-line"></div>
      <section className="container-fluid bg-black min-vh-100 ">
      <div className="row">
          <div className="col-12 text-end">
            <div className="me-4 mt-80px"></div>
          </div>
        </div>
        <div className="row px-5 py-5 align-items-center ">
          <div className="col-sm-12 col-md-6 col-lg-6  text-white align-items-center" data-aos="fade-up">
            <p className="italic fw-900 text-xxl">Rentable</p>
            <p className="btn-primary">Figma</p>
            <div className="text-white my-4">
              <p>Background</p>
              <p>This project is also a group assignment from our college course where we are tasked with creating a motorcycle rental application. Users can rent motorcycles and also list their own motorcycles for rent online easily. This project is our first design iteration.
              </p>
            </div>
            <div className="text-white my-4">
            <p>Criteria</p>
              <p><ul>
                <li>Create a list of vehicles available for rent</li>
                <li>Create detailed information about the vehicles and incorporate a quantity option for how many vehicles to rent</li>
                <li>Ability to track the location of the motorcycles</li>
                </ul></p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex gap-4 align-items-center justify-content-center" data-aos="fade-up">
            {/* carousel rentable */}
            <Carousel className="my-carousel">
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/rent1.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/rent2.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/rent3.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/rent4.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/rent5.png"
                  alt="Third slide"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/rent6.png"
                  alt="Third slide"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/rent7.png"
                  alt="Third slide"
                />
                 </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>

      <div className="bg-line"></div>
      <section className="container-fluid bg-black min-vh-100 ">
      <div className="row">
          <div className="col-12 text-end">
            <div className="me-4 mt-80px"></div>
          </div>
        </div>
        <div className="row px-5 py-5 align-items-center ">
          <div className="col-sm-12 col-md-6 col-lg-6  text-white align-items-center" data-aos="fade-up">
            <p className="italic fw-900 text-xxl">Diet.Io</p>
            <p className="btn-primary">Figma</p>
            <div className="text-white my-4">
              <p>Background</p>
              <p>This project is a college assignment that I am doing on my own. I am asked to create a diet application to help users lose weight using the diet.io application.
              </p>
            </div>
            <div className="text-white my-4">
              <p>Criteria</p>
                <p>
                  <ul>
                  <li>Create an app logo</li>
                  <li>Create 5 menus (Home, Data Statistics, Threads, Food Menu, and Profile)</li>
                  <li>Create signin and signup pages</li>
                  <li>Create a detailed food menu</li>
                  <li>Create a thread page to allow users to give advice and share their diet progress</li>
                  <li>Implement GPS to locate the company, provide customer service contact, and offer company email address</li>
                  </ul>
                </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6  d-flex gap-4 align-items-center justify-content-center" data-aos="fade-up">
            {/* carousel diet*/}
            <Carousel className="my-carousel">
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/diet1.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/diet2.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/diet3.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/diet4.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/diet5.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/diet6.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/diet7.png"
                />
                 </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  src="/assets/diet8.png"
                />
                 </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>

    <div className="bg-line"></div>
      <section className="container-fluid bg-black min-vh-100" id="web">
      <div className="row">
          <div className="col-12 text-end" data-aos="fade-up">
            <div className="me-4 mt-80px btn-secondary"><a href="#projects" className="text-decoration-none text-black">👉ui/ux👈</a></div>
          </div>
        </div>
        <div className="row px-5 py-5">
          <div className="col-12 text-start me-4" data-aos="fade-up">
            <p className="italic fw-900 text-xxl text-white">Website project</p>
            <p className="fw-700 text-xl"><a href="https://wethefest.vercel.app/" className="text-decoration-none text-white">👉 Ticks 👈</a>.</p>
            <div className="d-flex gap-2">
              <p className="btn-primary">HTML</p>
              <p className="btn-primary">CSS</p>
              <p className="btn-primary">JavaScript</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center" data-aos="fade-up">
            <Carousel className="my-carousel">
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/ticks2-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/ticks3-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/ticks4-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/ticks5-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/ticks6-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/ticks7-front.png"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="row py-5">
            <div className="col-sm-12 col-md-12 col-lg-6 " data-aos="fade-up">
              <div className="text-white my-4">
                <p>Background</p>
                <p>"Ticks" is the final exam project from the campus that is worked on by two people. In this project, we are given a project case and asked to meet the criteria set by the campus.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 " data-aos="fade-up">
              <div className="text-white my-4">
              <p>Criteria</p>
                <p>
                  <ul>
                  <li>Ticks wants their company website to display global concert ticket sales.</li>
                  <li>Ticks wants a website that is attractive, functional, and responsive. Use 5 CSS properties, JavaScript, meta viewport tag, and media screen rules for screens below 800px.</li>
                  <li>The website consists of five main pages:
                    <ul>
                      <li>Home: Display best-selling tickets and recommendations, as well as an image slider with JQuery.</li>
                      <li>Register: Registration form with JavaScript validation (without regex).</li>
                      <li>Tickets: Concert cards with name, poster, date, and time. Divided into Upcoming Tickets and Ongoing Tickets.</li>
                      <li>Ticket Detail: Detailed ticket information with purchase options.</li>
                      <li>Promotions: Promotion cards with title, validity period, and promo usage options. Divided into Available Promos and Upcoming Promos.</li>
                    </ul>
                  </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <div className="bg-line"></div>
      <section className="container-fluid bg-black min-vh-100 ">
        <div className="row px-5 pt-5">
          <div className="col-12 text-start me-4" data-aos="fade-up">
            <p className="fw-900 text-xxl"><a href="https://module-2-umartsaqib.vercel.app/" className="text-decoration-none text-white">👉 Supercats 👈</a></p>
            <div className="d-flex gap-2">
              <p className="btn-primary">HTML</p>
              <p className="btn-primary">Tailwind CSS</p>
              <p className="btn-primary">JavaScript</p>
            </div>
            <div>
              <a href="https://github.com/revou-fsse-3/module-2-Umartsaqib" className="text-decoration-none text-white italic"><p>👉 SuperCats github 👈</p></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center" data-aos="fade-up">
            <Carousel className="my-carousel">
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/sc1-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/sc2-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/sc3-front.png"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="row py-5">
            <div className="col-sm-12 col-md-12 col-lg-6 " data-aos="fade-up">
              <div className="text-white my-4">
                <p>Background</p>
                <p>This project is an assignment from the RevoU Bootcamp where we are asked to create a website about animal lovers, specifically focusing on cat lovers. We are required to make the website based on the given criteria, which includes creating a form for cat lovers to fill in their personal information on the website.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 " data-aos="fade-up">
              <div className="text-white my-4">
              <p>Criteria</p>
                <p>
                  <ul>
                  <li>Create a sticky navbar</li>
                  <li>Create text animation</li>
                  <li>Implement display grid</li>
                  <li>Create a responsive webpage</li>
                  <li>Position text and images side by side</li>
                  <li>Embed a video into the website</li>
                  <li>Create a carousel</li>
                  <li>Create a form</li>
                  <li>Add validation to the form</li>
                  <li>Add a @copyright footer</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <div className="bg-line"></div>
      <section className="container-fluid bg-black min-vh-100 ">
        <div className="row px-5 pt-5">
          <div className="col-12 text-start me-4" data-aos="fade-up">
            <p className="fw-900 text-xxl"><a href="https://module-5-umartsaqib-gjdw.vercel.app/" className="text-decoration-none text-white">👉 Pokemon 👈</a></p>
            <div className="d-flex gap-2">
              <p className="btn-primary">React</p>
              <p className="btn-primary">Typescript</p>
              <p className="btn-primary">Tailwind CSS</p>
            </div>
            <div>
              <a href="https://github.com/revou-fsse-3/milestone-2-Umartsaqib" className="text-decoration-none text-white italic"><p>👉 Pokemon github 👈</p></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center" data-aos="fade-up">
            <Carousel className="my-carousel">
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/pk1-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/pk2-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/pk3-front.png"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="row py-5">
            <div className="col-sm-12 col-md-12 col-lg-6 " data-aos="fade-up">
              <div className="text-white my-4">
                <p>Background</p>
                <p>
                This project is an assignment from the RevoU Bootcamp that requires us to apply basic CSS to structure the website and add simple JavaScript functionality to enhance user interaction. We are also required to create a functional form on the website that includes input types (text, textarea), a submit button, and at least one of radio buttons, checkboxes, or dropdown select. The form should be styled to align with the website design, and finally, our application must be deployed to Netlify.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 " data-aos="fade-up">
              <div className="text-white my-4">
              <p>Criteria</p>
                <p>
                  <ul>
                  <li>TSX and Components:
                    <br />
                    a. Organize the application into modular components.
                    <br />
                    b. Use TSX syntax to render UI elements.
                  </li>
                  <li>Hooks, State, and Props:
                    <br />
                    a. Implement at least two functional components that use props to pass data.
                    <br />
                    b. Utilize state to manage dynamic data within the application.
                    <br />
                    c. Integrate hooks such as useState and useEffect as needed.
                  </li>
                  <li>Forms and Events:
                    <br />
                    a. Implement a form to capture user input.
                    <br />
                    b. Handle form submission events.
                    <br />
                    c. Validate and manage form data using React state.
                  </li>
                  <li>React Router:
                    <br />
                    a. Utilize React Router for navigation within the application.
                    <br />
                    b. Set up multiple routes to different components/pages.
                  </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <div className="bg-line"></div>
      <section className="container-fluid bg-black min-vh-100 ">
        <div className="row px-5 pt-5">
          <div className="col-12 text-start me-4" data-aos="fade-up">
            <p className="fw-900 text-xxl"><a href="https://career-search-project-revou.vercel.app/" className="text-decoration-none text-white">👉 CareerSearch 👈</a></p>
            <div className="d-flex gap-2">
              <p className="btn-primary">HTML</p>
              <p className="btn-primary">CSS</p>
              <p className="btn-primary">JavaScript</p>
            </div>
            <div>
              <a href="https://github.com/widiapuspitasar/CareerSearch_ProjectRevou" className="text-decoration-none text-white italic"><p>👉 Careersearch github 👈</p></a>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center" data-aos="fade-up">
            <Carousel className="my-carousel">
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/cs1-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/cs2-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/cs3-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/cs4-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/cs5-front.png"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block img-fluid2"
                  src="/assets/cs6-front.png"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="row py-5">
            <div className="col-sm-12 col-md-12 col-lg-6 " data-aos="fade-up">
              <div className="text-white my-4">
                <p>Background</p>
                <p>This project is the final project of the faculty revou carried out in groups consisting of 4 people where I am one of the front end developers to work on this project. This website was created to help job seekers easily, but the website can no longer be accessed because we used railwat and we have to pay monthly.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 " data-aos="fade-up">
              <div className="text-white my-4">
              <p>Criteria</p>
                <p>
                  <ul>
                  <li>Here are the criteria that are needed.
                  <a href="https://docs.google.com/document/d/1txD_Y7xh9SDlOH2OF1I4LGOCahq9uxE5pID9f7q2-pA/edit" className="text-decoration-none text-white">👉 criteria 👈</a></li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* closing */}
      <div className="bg-line"></div>
      <section className="container-fluid bg-black min-vh-100" id="about">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <div className="ms-4 mt-80px btn-secondary">GoodBye</div>
          </div>
          <div className="col-12" data-aos="fade-up">
            <p className="mt-144px text-white italic text-xxl fw-900 text-center">Need a person who want to always improve mores? Contact Me</p>
          </div>
        </div>
        <div className="mt-144px">
          <div className="row mx-5 pb-5" data-aos="fade-up">
            <div className="col-sm-12 col-lg-3 d-flex gap-2 justify-content-center test">
              <i className="bi bi-whatsapp text-white"></i>
              <p><a href="https://wa.me/6281290622003" className="text-decoration-none text-white italic">+6281290622003</a></p>
            </div>
            <div className="col-sm-12 col-lg-3 d-flex gap-2 justify-content-center test">
              <i className="bi bi-envelope-fill text-white"></i>
              <p><a href="mailto:umartsqb@gmail.com" className="text-decoration-none text-white italic">Umartsqb@gmail.com</a></p>
            </div>
            <div className="col-sm-12 col-lg-3 d-flex gap-2 justify-content-center test">
              <i className="bi bi-linkedin text-white"></i>
              <p><a href="www.linkedin.com/in/muhammadumartsaqib" className="text-decoration-none text-white italic">muhammadumartsaqib</a></p>
            </div>
            <div className="col-sm-12 col-lg-3 d-flex gap-2 justify-content-center test">
              <i className="bi bi-github text-white"></i>
              <p><a href="https://github.com/Umartsaqib" className="text-decoration-none text-white italic">Umartsaqib</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
