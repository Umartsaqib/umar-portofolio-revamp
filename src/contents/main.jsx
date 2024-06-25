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
              <div className="btn-secondary"><a href="" className="text-decoration-none text-white"></a>View CV</div>
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
              <p>project ini merupakan sebuah tugas dari kampus dimana projek ini dikerjakan secara berkelompok yang dimana kita diminta untuk mengclone design aplikasi yang sudah ada</p>
            </div>
            <div className="text-white my-4">
              <p>Criteria</p>
              <p><ul>
                <li>mampu mendesain ui</li>
                <li>cloning apps</li>
                <li>membuat design semirip mungkin</li>
                <li>design yang bewarna</li>
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
              <p>project ini merupakan project kuliah yang dilakukan berkelompok dimana kami diminta untuk membuat sebuah aplikasi dimana kami harus membuat sebuah aplikasi jual beli buku secara online dengan fitur-fitur yang di berikan</p>
            </div>
            <div className="text-white my-4">
              <p>Criteria</p>
              <p><ul>
                <li>membuat 4 menu (home,explore,activity dan profile)</li>
                <li>membuat list - list buku yang dijual</li>
                <li>membuat searchbar</li>
                <li>membuat kategori buku</li>
                <li>membuat history pembelian</li>
                <li>membuat review product</li>
                <li>membuat halaman pembayaran</li>
                <li>membuat halaman keranjang</li>
                <li>membuat halaman signin signup</li>
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
              <p>project ini juga merupakan tugas kelompok dari kuliah dimana kami diminta untuk membuat sebuah aplikasi penyewaan motor yang dimana para pengguna bisa menyewa motor dan mereka bisa menyewakan motor secara online dengan mudah project ini merupakan desaign pertama kami</p>
            </div>
            <div className="text-white my-4">
            <p>Criteria</p>
              <p><ul>
                <li>membuat list kendaraan yang akan disewa</li>
                <li>membuat detail kendaraan serta membuat sebuah quantity untuk berapa kendaraan yang ingin disewakan</li>
                <li>bisa melacak keberadaan motor</li>
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
              <p>project ini merupakan tugas kuliah yang dimana dilakukan sendiri oleh saya, saya diminta untuk membuat sebuah aplikasi diet untuk memudahkan pengguna menurunkan berat badan dengan menggunakan aplikasi diet.io ini</p>
            </div>
            <div className="text-white my-4">
              <p>Criteria</p>
                <p>
                  <ul>
                  <li>membuat logo apps</li>
                  <li>membuat 5 menu (home,statisik data,thread,menu makanan dan profil)</li>
                  <li>membuat halaman signin dan signup</li>
                  <li>membuat menu detail makanan</li>
                  <li>membuat sebuah halaman thread supaya pengguna bisa saling memberikan saran dan menshare progress diet mereka</li>
                  <li>membuat gps untuk mengetahui lokasi perusahaan, membuat contact customer service dan menyediakan email perusahaan</li>
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
                <p>Ticks merupakan proyek ujian akhir dari kampus yang dikerjakan oleh dua orang. Dalam proyek ini, kami diberikan kasus proyek dan diminta untuk memenuhi kriteria yang ditetapkan oleh kampus.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 " data-aos="fade-up">
              <div className="text-white my-4">
              <p>Criteria</p>
                <p>
                  <ul>
                  <li>Ticks ingin situs web perusahaannya menampilkan penjualan tiket konser global.</li>
                  <li>Ticks menginginkan situs web yang menarik, fungsional, dan responsif. Gunakan 5 properti CSS, JavaScript, meta viewport tag, dan aturan media screen untuk layar di bawah 800px.</li>
                  <li>Situs web terdiri dari lima halaman utama:</li>
                  <li>Home: Tampilkan tiket terlaris dan rekomendasi, serta image slider dengan JQuery.
                    <br />
                      Register: Formulir pendaftaran dengan validasi JavaScript (tanpa regex).
                      <br />
                      Tickets: Kartu konser dengan nama, poster, tanggal, dan waktu. Dibagi menjadi Tiket Mendatang dan Berlangsung.
                      <br />
                      Ticket Detail: Informasi detail tiket dengan opsi pembelian.
                      <br />
                      Promotions: Kartu promosi dengan judul, periode validitas, dan opsi penggunaan promo. Dibagi menjadi Promo Tersedia dan Mendatang.</li>
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
                <p>project ini merupakan tugas dari revou bootcamp yang dimana kami diminta untuk membikin sebuah website tentang pecinta hewan yang dimana kami di minta untuk membuat website dengan kriteria yang telah diberikan dimana di dalam website juga terdapat sebuah form untuk para pecinta kucing mengisi data diri mereka</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 " data-aos="fade-up">
              <div className="text-white my-4">
              <p>Criteria</p>
                <p>
                  <ul>
                  <li>membuat sebuah navbar yang sticky</li>
                  <li>membuat text animation</li>
                  <li>membuat display grid</li>
                  <li>membuat halaman yang responsive</li>
                  <li>membuat text dan gambar berada samping2an</li>
                  <li>memasukan video kedalam website</li>
                  <li>membuat carousel</li>
                  <li>membuat form</li>
                  <li>membuat validasi terhadap form</li>
                  <li>membuat @copyright footer</li>
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
                Project ini merupakan tugas dari RevoU Bootcamp yang mengharuskan kami menerapkan CSS dasar untuk menata situs web dan menambahkan fungsionalitas JavaScript sederhana untuk meningkatkan interaksi pengguna. Kami juga diminta membuat formulir fungsional di situs web yang mencakup tipe input (teks, textarea), tombol submit, dan setidaknya satu dari tombol radio, checkbox, atau dropdown select. Formulir tersebut harus ditata agar selaras dengan desain situs web, dan akhirnya aplikasi kami harus dideploy ke Netlify.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 " data-aos="fade-up">
              <div className="text-white my-4">
              <p>Criteria</p>
                <p>
                  <ul>
                    <li> TSX dan Komponen:
                      <br />
                        a. Susun aplikasi ke dalam komponen-komponen modular.
                        <br />
                        b. Gunakan sintaks TSX untuk merender elemen UI
                        </li>
                    <li>Hooks, State, dan Props:
                      <br />
                        a. Implementasikan minimal dua komponen fungsional yang menggunakan props untuk mengirimkan data.
                        <br />
                        b. Manfaatkan state untuk mengelola data dinamis dalam aplikasi.
                        <br />
                        c. Integrasikan hooks seperti useState dan useEffect bila diperlukan.
                        </li>
                    <li>Formulir dan Kejadian:
                      <br />
                          a. Implementasikan formulir untuk menangkap input pengguna.
                          <br />
                          b. Tangani peristiwa pengiriman formulir (form submission events).
                          <br />
                          c. Validasi dan kelola data formulir menggunakan state React.
                          </li>
                    <li>React Router:
                      <br />
                          a. Manfaatkan React Router untuk navigasi dalam aplikasi.
                          <br />
                          b. Atur beberapa rute (routes) ke komponen/halaman yang berbeda.
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
                <p>project ini merupakan project akhir dari faculty revou yang dilakukan secara kelompok dengan berisikan 4 orang dimana saya menjadi seorang front end developer untuk mengerjakan project ini, website ini dibikin untuk membantu para pencari kerja dengan mudah, tetapi situs web ini tidak dapat dijalankan lagi karena kami menggunakan railwat dan kami harus membayar bulanan.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 " data-aos="fade-up">
              <div className="text-white my-4">
              <p>Criteria</p>
                <p>
                  <ul>
                  <li>berikut merupakan kriteria2 yang dibutuhkan <a href="https://docs.google.com/document/d/1txD_Y7xh9SDlOH2OF1I4LGOCahq9uxE5pID9f7q2-pA/edit" className="text-decoration-none text-white">👉 kriteria 👈</a></li>
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
