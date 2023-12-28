import ImageDesktop from '../../images/image-hero-desktop.png';
import ImageMobile from '../../images/image-hero-mobile.png';

export default function Body() {
  return (
    <>
      <picture>
        <source media="(min-width: 800px)" srcSet={ImageDesktop} />
        <img src={ImageMobile} alt="Man holding a laptop" />
      </picture>
      <section className="section">
        <h1 className="section__title">Make remote work</h1>
        <p className="section__desc">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="section__btn">Learn more</button>
      </section>
    </>
  );
}
