function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <img src="/facebook.png" alt="facebook" />
        <img src="/instagram.png" alt="instagram" />
        <img src="/twitter.png" alt="twitter" />
        <img src="/youtube.png" alt="youtube" />
      </div>

      <div className="footer-links">
        <a href="#">Conditions of Use</a>
        <a href="#">Privacy & Policy</a>
        <a href="#">Press Room</a>
      </div>

      <span className="copyright">&copy; 2021 Movix</span>
    </footer>
  );
}

export default Footer;
