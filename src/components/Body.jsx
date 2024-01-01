import ImageDesktop from '../../images/image-hero-desktop.png';
import ImageMobile from '../../images/image-hero-mobile.png';

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
        </div>
      </section>
    </>
  );
}
