import React, {Component} from 'react';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <span className="footer-text">
            <p>these are some of casie's favorite recipes</p>
            <p>mmm mmm, that's good food! © ℗®™</p>
          </span>
          <span className="footer-img">
            <img src="https://5iyg119fkst3r2lyyhftyvwd-wpengine.netdna-ssl.com/wp-content/uploads/2021/08/casie.jpg" alt="casie with pink hair"/>
          </span>
        </div>
  )}
}

export default Footer;
