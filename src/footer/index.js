import React from 'react';

import './styles.scss';

/**
 * Global footer.
 * @author Johan Svensson
 */
export default class GlobalFooter extends React.Component {
  render() {
    return (
      <footer id="global-footer">
        <p className="copyright-notice">© 2018 Johan S</p>
      </footer>
    )
  }
}