const Footer = () => {
    return (
      <footer class="footer">
        <div class="footer__container container">
          <h1 class="footer__title">
          ፅዮን<span>.</span>ቡና
          </h1>
          <p class="footer__description">
            The best place to work <br />
            and be more productive.
          </p>
  
          <div class="footer__content grid">
            <div class="footer__data">
              <h2 class="footer__subtitle">Address</h2>
              <p class="footer__information">
                Street no.20 <br />
                azezo. 003
              </p>
            </div>
            <div class="footer__data">
              <h2 class="footer__subtitle">Contact</h2>
              <p class="footer__information">
                +25198822**** <br />
                bewketuwondwosen@email.com
              </p>
            </div>
            <div class="footer__data">
              <h2 class="footer__subtitle">Office</h2>
              <p class="footer__information">
                Monday - Saturday <br />
                9AM - 10PM
              </p>
            </div>
            <div class="footer__data">
              <p class="footer__newsletter-description">
                Subscribe to our newsletter
              </p>
  
              <div class="footer__newsletter">
                <input
                  type="email"
                  placeholder="Your email address"
                  class="footer__input"
                />
                <button class="footer__button">
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
              </div>
            </div>
          </div>
  
          <div class="footer__group">
            <ul class="footer__social">
              <a href="#facebook" target="_blank" class="footer__social-link">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="#instagram" target="_blank" class="footer__social-link">
                <i class="bx bxl-instagram"></i>
              </a>
              <a href="#tiktok" target="_blank" class="footer__social-link">
                <i class="bx bxl-tiktok"></i>
              </a>
            </ul>
  
            <span class="footer__copy"> &#169; 2023. All rights reserved </span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  