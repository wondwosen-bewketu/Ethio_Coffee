

const Hero = () => {
  const orderNow = () => {
    window.scrollTo({
      top: 1150,
      behavior: 'smooth'
    })
  }
    return  (
    <section
    class="hero section"
    id="home"
    style= {{backgroundImage: `url(./media/1.jpg) `}} 
  >
    <h1 class="hero__title">
      Start Your Day <br />
      With Favorite Coffee <br />
      And Cozy Place.
    </h1>
    <button class="hero__button" onClick={orderNow}>Order Now</button>
  </section>)

}

export default Hero;