import React from 'react';
import './styles.scss';

/**
 * Global header.
 * @author Johan Svensson
 */
export default class GlobalHeader extends React.Component  {
  render() {
    return (
      <header id="global-header">
        <div className="content">
          <h1 id="page-title">
            Portfolio
  
          <span className="sub">
            :Johan
          </span>
          </h1>
        </div>
      </header>
    )
  }
}