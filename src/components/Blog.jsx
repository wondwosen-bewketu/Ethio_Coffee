
const Blog = () => {
    return 
   ( <section class="blog section" id="blog">
    <div class="blog__container container">
      <h2 class="section__title">
        Our blogs coffee with <br />
        insightful topic
      </h2>

      <div class="blog__content grid">
        <article class="blog__card">
          <div class="blog__image">
            <img src="./media/blog1.jpg" alt="" class="blog__img" />
            <a href="#" class="blog__button">
              <i class="bx bx-right-arrow-alt"></i>
            </a>
            <div class="blog__stats">
              <div class="blog__reaction">
                <i class="bx bx-comment"></i>
                <span>12</span>
              </div>
              <div class="blog__reaction">
                <i class="bx bx-show"></i>
                <span>76,5k</span>
              </div>
            </div>
          </div>

          <div class="blog__data">
            <h2 class="blog__title">How to grow coffee beans</h2>
            <p class="blog__description">
              The blogs about coffee will help you a lot about how to grow
              coffee beans with hign standard.
            </p>
          </div>
        </article>
        <article class="blog__card">
          <div class="blog__image">
            <img src="./media/blog2.jpg" alt="" class="blog__img" />
            <a href="#" class="blog__button">
              <i class="bx bx-right-arrow-alt"></i>
            </a>
            <div class="blog__stats">
              <div class="blog__reaction">
                <i class="bx bx-comment"></i>
                <span>96</span>
              </div>
              <div class="blog__reaction">
                <i class="bx bx-show"></i>
                <span>356,7k</span>
              </div>
            </div>
          </div>

          <div class="blog__data">
            <h2 class="blog__title">How to make coffee for beginner</h2>
            <p class="blog__description">
              The blogs about coffee will help you a lot about how to make a
              coffee with a good place coffee.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>);
};

export default Blog;