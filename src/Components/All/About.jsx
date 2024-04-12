import React from 'react'

const About = () => {
    return (
        <>
            <div class="about container shadow-lg p-3 mb-5 bg-body-tertiary rounded">

                <div class="row">
                    <div class="col-sm-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mahendra_Singh_Dhoni_receiving_Padma_Bhushan.jpg/330px-Mahendra_Singh_Dhoni_receiving_Padma_Bhushan.jpg" class="img-fluid" alt="..." />
                    </div>

                    <div class="col-sm-8">
                        <h2 className='text-center'>Personal details</h2>
                        <div className="row">
                            <div className="col-sm"><h3>Born:</h3></div>
                            <div className="col-sm"><p>Mahendra Singh Dhoni <br />
                                7 July 1981 (age 42) <br />
                                Ranchi, Bihar (present-day Jharkhand), India</p></div>
                        </div>
                        <div className="row">
                            <div className="col-sm"><h3>Height:</h3></div>
                            <div className="col-sm"><p>5 ft 9 in (175 cm)</p></div>
                        </div>
                        <div className="row">
                            <div className="col-sm"><h3>Spouse:</h3></div>
                            <div className="col-sm"><p>Sakshi Dhoni</p></div>
                        </div>
                        <div className="row">
                            <div className="col-sm"><h3>Awards:</h3></div>
                            <div className="col-sm"><p>	
Padma Bhushan (2018)
Padma Shri (2009)
Major Dhyan Chand Khel Ratna Award (2008)</p></div>
                        </div>
                        <div className="row">
                            <div className="col-sm"><h3>Nickname:</h3></div>
                            <div className="col-sm"><p>Mahi, Thala, Captain Cool</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About