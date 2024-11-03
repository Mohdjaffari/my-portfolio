import React from 'react'

export default function SliderPort() {
  return (
    <div className='slider-of-portfolio'>
        <div className="slider-container" id='slider-container-ss'>
            <div className="slider-content" id='slider-content-ss'>
                <div className="slider-box slider-my-dt" id='slider-box-1'>
                    <h5>Hi - I am </h5>
                    <h1>Muhammad Jaffari</h1>
                    <h5>
                        Front-end Web developer
                    </h5>
                    <p>
                       As a front-end web developer specializing in UI and UX design, I specialize in creating great experiences and user experiences using React.js, JavaScript, HTML, CSS, and Bootstrap. I specialize in translating content design into functional interfaces that not only engage users but also enhance usability and usability. I am proficient in the Microsoft Office suite, which includes Word, Excel, and PowerPoint, as well as Google Docs and Spreadsheets, allowing me to communicate effectively and present ideas clearly. I am passionate about continuing to develop my skills and understanding of the latest business trends to deliver quality products and innovative solutions.
                    </p>
                    <button>About Me</button>
                    <button id='btn2'><a href="/">Resume <i className="fa-solid fa-download"></i></a></button>
                </div>
                <div className="slider-box slider-img" id='slider-box-2'>
                    <div className="image-box">
                      {/* <img src="/image/my-pic.png" alt="" /> */}
                      <div className="mypic"></div>
                    </div>
                    <div className="links links-big" id='links-ss'>
                      <ul>
                        <li><a href="https://www.linkedin.com/in/mjaffari313/"><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://twitter.com/jaffari313"><i className="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="https://github.com/Mohdjaffari"><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=61560423488209&mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/@ww.jaffarivlogs_313"><i className="fa-brands fa-youtube"></i></a></li>
                        <li><a href="https://www.instagram.com/mjaffari_313?igsh=bXMyeGZoY2xrMzls"><i className="fa-brands fa-square-instagram"></i></a></li>
                      </ul>
                    </div>
                </div>
            </div>
                    <div className="links" id='links-ss'>
                      <ul>
                        <li><a href="https://www.linkedin.com/in/mjaffari313/"><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://twitter.com/jaffari313"><i className="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="https://github.com/Mohdjaffari"><i className="fa-brands fa-github"></i></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=61560423488209&mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/@ww.jaffarivlogs_313"><i className="fa-brands fa-youtube"></i></a></li>
                        <li><a href="https://www.instagram.com/mjaffari_313?igsh=bXMyeGZoY2xrMzls"><i className="fa-brands fa-square-instagram"></i></a></li>
                      </ul>
                    </div>
        </div>
    </div>
  )
}
