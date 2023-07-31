const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <div className="blog__container container">
        <h2 className="section__title">
          Our blogs coffee with <br />
          insightful topic
        </h2>

        <div className="blog__content grid">
          <article className="blog__card">
            <div className="blog__image">
              <img src="./media/blog1.jpg" alt="" className="blog__img" />
              <a href="#" className="blog__button">
                <i className="bx bx-right-arrow-alt"></i>
              </a>
              <div className="blog__stats">
                <div className="blog__reaction">
                  <i className="bx bx-comment"></i>
                  <span>12</span>
                </div>
                <div className="blog__reaction">
                  <i className="bx bx-show"></i>
                  <span>76,5k</span>
                </div>
              </div>
            </div>

            <div className="blog__data">
              <h2 className="blog__title">How to grow coffee beans</h2>
              <p className="blog__description">
                The blogs about coffee will help you a lot about how to grow coffee beans with high standards.
              </p>
            </div>
          </article>
          <article className="blog__card">
            <div className="blog__image">
              <img src="./media/blog2.jpg" alt="" className="blog__img" />
              <a href="#" className="blog__button">
                <i className="bx bx-right-arrow-alt"></i>
              </a>
              <div className="blog__stats">
                <div className="blog__reaction">
                  <i className="bx bx-comment"></i>
                  <span>96</span>
                </div>
                <div className="blog__reaction">
                  <i className="bx bx-show"></i>
                  <span>356,7k</span>
                </div>
              </div>
            </div>

            <div className="blog__data">
              <h2 className="blog__title">How to make coffee for beginners</h2>
              <p className="blog__description">
                The blogs about coffee will help you a lot about how to make a coffee with a good place coffee.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;
