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
      <section>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div>
          <img src={Icon1} alt="Databiz logo" />
          <img src={Icon2} alt="Audiophile logo" />
          <img src={Icon3} alt="Meet logo" />
          <img src={Icon4} alt="Maker logo" />
        </div>
      </section>
    </>
  );
}
