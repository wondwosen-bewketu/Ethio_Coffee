import { Fade } from 'react-reveal';

const Special = () => {
  return (
    <div className="special section container" id="special">
      <div className="special__container">
        <div className="special__box">
          <Fade bottom>
            <h2 className="section__title">
              Best coffees that make you <br />
              happy and cheer you up!
            </h2>
          </Fade>
        </div>

        <div className="special__category">
          <div className="special__group">
            <Fade left>
              <div className="special__img__border">
                <img
                  src="./media/coffee-beans.png"
                  alt=""
                  className="special__img"
                />
              </div>
            </Fade>
            <Fade right>
              <h3 className="special__title">Original Coffee</h3>
            </Fade>
            <Fade bottom>
              <p className="special__description">
                We select the best beans coffee, for a true taste.
              </p>
            </Fade>
          </div>

          <div className="special__group">
            <Fade left>
              <div className="special__img__border">
                <img
                  src="./media/hot-drink.png"
                  alt=""
                  className="special__img"
                />
              </div>
            </Fade>
            <Fade right>
              <h3 className="special__title">Hot Coffee</h3>
            </Fade>
            <Fade bottom>
              <p className="special__description">
                Enjoy your coffee with some hot with true taste.
              </p>
            </Fade>
          </div>

          <div className="special__group">
            <Fade left>
              <div className="special__img__border">
                <img
                  src="./media/coffee-cup.png"
                  alt=""
                  className="special__img"
                />
              </div>
            </Fade>
            <Fade right>
              <h3 className="special__title">Ice Coffee</h3>
            </Fade>
            <Fade bottom>
              <p className="special__description">
                Enjoy your coffee with some ice with true taste.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
