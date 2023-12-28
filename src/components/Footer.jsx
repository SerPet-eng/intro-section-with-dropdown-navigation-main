import Icon1 from '../../images/client-databiz.svg';
import Icon2 from '../../images/client-audiophile.svg';
import Icon3 from '../../images/client-meet.svg';
import Icon4 from '../../images/client-maker.svg';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <img
          src={Icon1}
          alt="Databiz logo"
          className="footer__icon"
          id="databiz"
        />
        <img
          src={Icon2}
          alt="Audiophile logo"
          className="footer__icon"
          id="audiophile"
        />
        <img src={Icon3} alt="Meet logo" className="footer__icon" id="meet" />
        <img src={Icon4} alt="Maker logo" className="footer__icon" id="maker" />
      </footer>
    </>
  );
}
