import React from 'react';
import './styles.scss';

/**
 * About me.
 * @author Johan Svensson
 */
export default class AboutMe extends React.Component {
  render() {
    return (
      <div id="about-me">
        <div className="avatar">
          <img src={require('../assets/nerd.png')} alt="Johan" />
        </div>
        <div>
          <h3 className="heading">And now, here's the guy</h3>
          <p className="about personal">
            I'm an honest developer who continuously puts effort into streamlining both products and my own living.
          </p>
          <p className="about">
            I develop <img src={require('../assets/ic_phone.png')} alt="mobile" /> and <img src={require('../assets/ic_web.png')} alt="web" /> apps. Hit me up!
          </p>
          <div>
            <ul className="contact">
              <li><img src={require('../assets/ic_call.png')} alt="phone" /> +462732270</li>
              <li><img src={require('../assets/ic_mail.png')} alt="mail" /> jojjedeveloper@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}