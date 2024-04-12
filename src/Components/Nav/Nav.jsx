import React from 'react'
import '../css/style.css'
const Nav = () => {
  return (
    <>
      <h2 className='text-center head navv'>
        "Dhoni: Master of the Game, Leader of Hearts - A Tribute Beyond Boundaries"
      </h2>
      {/* <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand sd" href="#">MSD(Dhoni)</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active me-5 fw-bolder" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active me-5 fw-bolder" aria-current="page" href="/about">About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active fw-bolder" aria-current="page" href="/trophy">Trophy</a>
              </li>

            </ul>

          </div>
        </div>
      </nav> */}
      <li><a href="">Home</a></li>
      <li><a href="about">About</a></li>
      <li><a href="trophy">Trophy</a></li>
      <hr />
    </>
  )
}

export default Nav