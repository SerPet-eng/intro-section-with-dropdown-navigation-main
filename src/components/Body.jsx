import ImageDesktop from '../../images/image-hero-desktop.png';
import ImageMobile from '../../images/image-hero-mobile.png';
import Icon1 from '../../images/client-databiz.svg';
import Icon2 from '../../images/client-audiophile.svg';
import Icon3 from '../../images/client-meet.svg';
import Icon4 from '../../images/client-maker.svg';

export default function Body() {
  return (
    <>
      <picture>
        <source media="(min-width: 650px)" srcSet={ImageDesktop} />
        <img src={ImageMobile} alt="Man holding a laptop" />
      </picture>
      <section className="section">
        <h1 className="section__title">Make remote work</h1>
        <p className="section__desc">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="section__btn">Learn more</button>
        <div className="section__icon">
          <img src={Icon1} alt="Databiz logo" className="icon" />
          <img src={Icon2} alt="Audiophile logo" className="icon" />
          <img src={Icon3} alt="Meet logo" className="icon" />
          <img src={Icon4} alt="Maker logo" className="icon" />
        </div>
      </section>
    </>
  );
}
