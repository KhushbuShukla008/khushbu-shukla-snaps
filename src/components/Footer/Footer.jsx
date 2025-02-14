import InstagramIcon from "../../assets/icons/Instagram.svg";
import FacebookIcon from "../../assets/icons/Facebook.svg";
import TwitterIcon from "../../assets/icons/X_twitter.svg";
import PinterestIcon from "../../assets/icons/Pinterest.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__title">Snaps</div>
      <div className="footer__for">
        <h3>For Photographers</h3>
        <p>Hire talent</p>
        <p>Inspiration</p>
      </div>
      <div className="footer__about">
        <h3>About</h3>
        <p>Careers</p>
        <p>Support</p>
      </div>
      <div className="footer__social-media">
        
        <a className="social-media__images" href="https://www.facebook.com">
          <img src={FacebookIcon} alt="facebook" />
        </a>
        <a className="social-media__images" href="https://www.twitter.com">
          <img src={TwitterIcon} alt="twitter" />
        </a>
        <a className="social-media__images" href="https://www.instagram.com">
          <img src={InstagramIcon} alt="instagram" />
        </a>
        <a className="social-media__images" href="https://www.pinterest.com/">
          <img src={PinterestIcon} alt="pinterest" />
        </a>
      </div>
    </section>
  );
}

export default Footer;
