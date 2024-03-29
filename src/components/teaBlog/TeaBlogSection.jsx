import React from 'react'
import "../teaBlog/teablogSection.module.css"

export default function TeaBlogSection() {
  return (
    <div className="tea__items">
    <div>
        <img src="imgs/Rectangle 72 (2).png" alt="">
    </div>
    <div className="tea__item">
        <div>
            <p className="tea__item-title">The Role of Tea in Mental Health</p>
            <span className="tea__item-text">by Joker</span>
        </div>
        <a href="#">Read
        <img src="imgs/read.svg" alt="">
    </div>
</div>
</div>



<div className="tea container">
<div className="tea__items">
    <div>
        <img src="imgs/Rectangle 72 (1).png" alt="">
    </div>
    <div className="tea__item">
        <div>
            <p className="tea__item-title">Tea-rific Tales: Hilarious Stories from Tea Lovers</p>
            <span className="tea__item-text">by Casper the Friendly Ghost</span>
        </div>
        <a href="#">Read
        <img src="imgs/read.svg" alt="">
    </div>
</div>

<div className="tea__items">
    <div>
        <img src="imgs/Rectangle 72 (3).png" alt="">
    </div>
    <div className="tea__item">
        <div>
            <p class="tea__item-title">Tea and Caffeine: Effects on the Brain and Behavior</p>
            <span className="tea__item-text">by Author Authorius</span>
        </div>
        <a href="#">Read
        <img src="imgs/read.svg" alt="">
    </div>
</div>
</div>
<button className="tea__btn">View all</button>
</div>
</section>
  )
}

