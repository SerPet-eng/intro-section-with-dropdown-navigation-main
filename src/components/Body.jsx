import ImageDesktop from '../../images/image-hero-desktop.png';
import ImageMobile from '../../images/image-hero-mobile.png';
import Databiz from '../../images/client-databiz.svg';
import Audiophile from '../../images/client-audiophile.svg';
import Meet from '../../images/client-meet.svg';
import Maker from '../../images/client-maker.svg';

export default function Body() {
  return (
    <>
      <section className="section">
        <picture>
          <source media="(min-width: 800px)" srcSet={ImageDesktop} />
          <img src={ImageMobile} alt="Man holding a laptop" />
        </picture>
        <div className="section__hero">
          <h1 className="hero__title">Make remote work</h1>
          <p className="hero__desc">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="hero__btn">Learn more</button>
          <ul className="icons">
            <li className="icons__item">
              <img className="item-img" src={Databiz} alt="A Databiz Icon" />
            </li>
            <li className="icons__item">
              <img
                className="item-img"
                src={Audiophile}
                alt="A Audiophile Icon"
                id="audiophile"
              />
            </li>
            <li className="icons__item">
              <img className="item-img" src={Meet} alt="A Meet Icon" />
            </li>
            <li className="icons__item">
              <img className="item-img" src={Maker} alt="A Maker Icon" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
