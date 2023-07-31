import { useState } from "react";


const Header = () => {

 const [changeHeader,setChangeHeader] = useState(false)

 const changeHeaderColor = () => {
    if(window.scrollY >= 50)
    {
        setChangeHeader(true)
    }
    else {
        setChangeHeader(false)
    }
 }

 window.addEventListener('scroll', changeHeaderColor)



return ( <header className={`header ${changeHeader && `scroll-header`}`}  id="header">
<nav class="nav container">
  <a href="#home" class="nav__logo">ፅዮን<span>.</span>ቡና </a>

  <div class="nav__menu" id="nav-menu">
    <ul class="nav__list">
      <li class="nav__item">
        <a href="#home" class="nav__link active-link">Home</a>
      </li>
      <li class="nav__item">
        <a href="#products" class="nav__link">Products</a>
      </li>
      <li class="nav__item">
        <a href="#place" class="nav__link">Place</a>
      </li>
      <li class="nav__item">
        <a href="#blog" class="nav__link">Blog</a>
      </li>
    </ul>

    <div class="nav__close" id="nav-close">
      <i class="bx bx-x"></i>
    </div>
  </div>

  <div class="nav__toggle" id="nav-toggle">
    <i class="bx bx-grid-alt"></i>
  </div>
</nav>
</header>)

};

export default Header;