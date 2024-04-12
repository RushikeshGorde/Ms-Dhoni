import React from 'react'
import {  useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Trophy = () => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])
    return (
        <div>
            <div className="ICC  container-fluid p-0">
                <div class="container-fluid text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div data-aos="zoom-in">

                <h1 className='text-center mb-5 mt-5'>ICC Trophy</h1>
                </div>
                <div data-aos="fade-down">

                    <div class="row mt-5">
                        <div class="col-sm">


                            <img src="https://i.pinimg.com/736x/32/f7/d6/32f7d688e76d3f5a9b44a59d9e616fc7.jpg" className='ty-img' alt="..." />


                            <h3 className='text-primary'>ICC World T20</h3>
                            <p >In 2007</p>


                        </div>
                        <div class="col-sm">

                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xgeBJ466M7BJuZ5_W9ZHB8WRr8tOrE_l8bQCsiXMTw&s" className='ty-img' alt="..." />

                            <h3 className='text-primary'>ICC Cricket World Cup</h3>
                            <p>In 2011</p>

                        </div>
                        <div class="col-sm">

                            <img src="https://pbs.twimg.com/media/E4jmQs4WQAAt8hv.jpg" className='ty-img' alt="..." />

                            <h3 className='text-primary'>ICC Champions Trophy</h3>
                            <p>In 2013</p>

                        </div>

                    </div>
                </div>

                </div>
                <div class="container-fluid text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div data-aos="zoom-in">

                <h1 className='text-center mb-5'>IPL Trophy</h1>
                </div>

                    <div class="row mt-5" data-aos="fade-up">
                        <div class="col-sm">


                            <img src="https://resize.indiatvnews.com/en/resize/gallery/835_-/2022/03/16clt20-1-1648125950.jpg" className='ty-img' alt="..." />


                            <h3 className='text-warning'>Chennai Super Kings</h3>
                            <p>In 2010</p>


                        </div>
                        <div class="col-sm">

                            <img src="https://resize.indiatvnews.com/en/resize/gallery/360_-/2022/03/ezfpdy1uyauk8sk-1-1648125950.jpg" className='ty-img' alt="..." />

                            <h3 className='text-warning'>Chennai Super Kings</h3>
                            <p>In 2011</p>

                        </div>
                        <div class="col-sm">

                            <img src="https://i.pinimg.com/736x/75/78/d3/7578d3ea209463fb76f4820d4d7ae8ac.jpg" className='ty-img' alt="..." />

                            <h3 className='text-warning'>Chennai Super Kings</h3>
                            <p>In 2018</p>
                        </div>

                    </div>
                    <div class="row mt-5" data-aos="fade-up">

                        <div class="col-sm">

                            <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200,q_60/lsci/db/PICTURES/CMS/328700/328783.jpg" className='ty-img' alt="..." />

                            <h3 className='text-warning'>Chennai Super Kings</h3>
                            <p>In 2021</p>

                        </div>
                        <div class="col-sm">

                            <img src="https://static.toiimg.com/thumb/msid-100611287,width-1280,height-720,resizemode-4/100611287.jpg" className='ty-img' alt="..." />

                            <h3 className='text-warning'>Chennai Super Kings</h3>
                            <p>In 2023</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trophy