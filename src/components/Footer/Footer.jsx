import InstagramIcon from "../../assets/icons/Instagram.svg";
import FacebookIcon from "../../assets/icons/Facebook.svg";
import TwitterIcon from "../../assets/icons/X_twitter.svg";
import { Link } from "react-router-dom";
import PinterestIcon from "../../assets/icons/Pinterest.svg";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__main-container">
      <div className="footer__desciption">
        <div className="footer__title">
        <Link to="/" className="app__header-link">
          <h1>Snaps</h1>
          </Link>
        </div>
        <div className="footer__about-container">
          <div className="footer__for">
            <p>For Photographers</p>
            <p>Hire talent</p>
            <p>Inspiration</p>
          </div>
          <div className="footer__about">
            <p>About</p>
            <p>Careers</p>
            <p>Support</p>
          </div>
        </div>
      </div>
      <div className="social-media">
        <a className="social-media__images" href="https://www.facebook.com">
          <img
            src={FacebookIcon}
            alt="facebook"
            className="social-media__icon"
          />
        </a>
        <a className="social-media__images" href="https://www.twitter.com">
          <img src={TwitterIcon} alt="twitter" className="social-media__icon" />
        </a>
        <a className="social-media__images" href="https://www.instagram.com">
          <img
            src={InstagramIcon}
            alt="instagram"
            className="social-media__icon"
          />
        </a>
        <a className="social-media__images" href="https://www.pinterest.com/">
          <img
            src={PinterestIcon}
            alt="pinterest"
            className="social-media__icon"
          />
        </a>
      </div>
      </div>
      <div className="footer__policy-tag">
        <p className="policy">&copy; 2024 Snaps</p>
        <p className="policy">.</p>
        <p className="policy">Terms</p>
        <p className="policy">Privacy</p>
        <p className="policy">Cookies</p>
      </div>
    </div>
  );
}

export default Footer;
