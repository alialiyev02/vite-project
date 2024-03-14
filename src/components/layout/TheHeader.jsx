import React from 'react'

export default function TheHeader() {
  return (
    <header className="header">
  <div className="container">
      <div className="header__inner">
          <a>
              <img src="imgs/logo.svg" alt="">
          </a>
          <nav className="menu">
          <ul className="menu__list">
              <li>
                  <a href="#">Black</a>
              </li>
              <li>
                  <a href="#">Green</a>
              </li>
              <li>
                  <a href="#">White</a>
              </li>
              <li>
                  <a href="#">Oolong</a>
              </li>
              <li>
                  <a href="#">Pu-erh</a>
              </li>
          </ul>
          </nav>
          <div className="user-actions">
              <div className="user__actions">
              <ul className="user-actions">
                  <li className="user-actions__item">
                      <a href="#" class="user-actions__link">
                          <img src="imgs/baskey.svg" class="user-actions__icon" alt="">
                      </a>
                  </li>
              </ul>
              <ul className="user-actions">
                  <li className="user-actions__item">
                      <a href="#" class="user-actions__link">
                          <img src="imgs/user.svg" class=" user-actions__icon" alt="">
                      </a>
                  </li>
              </ul>
              </div>
              <ul className="user-actions">
                  <li className="user-actions__item">
                      <a href="#" class="user-actions__link">
                          <img src="imgs/search.svg" class="user-actions__icon" alt="">
                      </a>
                  </li>
              </ul>
          </div>
          </div>
      </div>
  </header>
    
  )
  
  

}


