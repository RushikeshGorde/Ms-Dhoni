import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])

    return (
        <>
            <div className="container ">
                <div class="container ">

                    <div class="row  ">
                        <div class="col-sm">
                            <h1 className='display-5 fw-bolder '>
                                Mahendra Singh <br /> <span className='text-primary'>Dhoni</span>
                            </h1>
                            <p className='ho-p'>
                                Mahendra Singh Dhoni, often called 'Captain Cool,' is a cricket icon and former Indian cricket team captain. Renowned for his calm demeanor and strategic prowess, Dhoni led India to numerous victories, including the 2007 ICC T20 World Cup and the 2011 ICC Cricket World Cup.
                            </p>
                        </div>
                        <div class="col-sm">
                            <div data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500">

                                <img src="https://dhoni-tribute-page.netlify.app/image/MS%20Dhoni%20with%20bat.png" class="img-fluid main-img" alt="..." />
                            </div>
                        </div>

                    </div>
                </div>
                <div class="container jr-2">

                    <div class="row  ">
                        <div class="col-sm">
                        <div data-aos="fade-down">

                            <img src="https://dhoni-tribute-page.netlify.app/image/dhoni2.png" class="img-fluid main-img1" alt="..." />
                        </div>
                        </div>

                        <div class="col-sm">
                        <div data-aos="fade-right">

                            <h1 className='display-5 fw-bolder '>
                                Mahendra Singh <br /> <span className='text-primary'>Dhoni</span>
                            </h1>
                            <p className='ho-p'>
                                Mahendra Singh Dhoni, often called 'Captain Cool,' is a cricket icon and former Indian cricket team captain. Renowned for his calm demeanor and strategic prowess, Dhoni led India to numerous victories, including the 2007 ICC T20 World Cup and the 2011 ICC Cricket World Cup.
                            </p>
                            <div className="imgg">
                                <img src="https://dhoni-tribute-page.netlify.app/image/instagram.png" class="img-fluid ic-img" alt="..." />
                                <img src="https://dhoni-tribute-page.netlify.app/image/telegram.png" class="img-fluid ic-img" alt="..." />
                                <img src="https://dhoni-tribute-page.netlify.app/image/youtube.png" class="img-fluid ic-img" alt="..." />
                                <img src="https://dhoni-tribute-page.netlify.app/image/github.png" class="img-fluid ic-img" alt="..." />
                                <img src="https://dhoni-tribute-page.netlify.app/image/linkedin.png" class="img-fluid ic-img" alt="..." />
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
                <div class="container jr-2">

                    <div class="row   cr">
                        <div class="col-sm">
                        <div data-aos="fade-right">

                            <h1 className='display-5 fw-bolder '>
                                Mahendra Singh <br /> <span className='text-success'>Dhoni</span>
                            </h1>
                            <p className='ho-p'>
                                Mahendra Singh Dhoni, often called 'Captain Cool,' is a cricket icon and former Indian cricket team captain. Renowned for his calm demeanor and strategic prowess, Dhoni led India to numerous victories, including the 2007 ICC T20 World Cup and the 2011 ICC Cricket World Cup.
                            </p>
                            <div data-aos="zoom-in">

                            <button type="button" class="Ho-btn">Explore More About Captain Cool</button>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm">
                        <div data-aos="fade-down">

                            <img src="https://dhoni-tribute-page.netlify.app/image/Dhoni%20stand.png " class="img-fluid main-img2" alt="..." />
                        </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Home