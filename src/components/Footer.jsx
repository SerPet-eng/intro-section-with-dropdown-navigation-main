import Databiz from '../../images/client-databiz.svg';
import Audiophile from '../../images/client-audiophile.svg';
import Meet from '../../images/client-meet.svg';
import Maker from '../../images/client-maker.svg';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <ul>
          <li>
            <img src={Databiz} alt="A Databiz Icon" />
          </li>
          <li>
            <img src={Audiophile} alt="A Audiophile Icon" id="audiophile" />
          </li>
          <li>
            <img src={Meet} alt="A Meet Icon" />
          </li>
          <li>
            <img src={Maker} alt="A Maker Icon" />
          </li>
        </ul>
      </footer>
    </>
  );
}
