import React from 'react';

import './styles.scss';
import { timeDiff, timeUnits } from '../utils';

let local = document.location.href;
const scriptUrl = `${(local.indexOf('localhost') != -1 ?
  'http://its.teknikum.it/johan' : local)}/regclick.php`;

/**
 * A useless, singleton button which keeps track of how many people have clicked one.
 * @author Johan Svensson
 */
export default class FunButton extends React.Component {
  state = {
    loading: false,
    pressCount: 0,

    /**
     * @type {Date}
     */
    since: new Date()
  };

  forceUpdateIntervalId;

  componentDidMount() {
    this.getClickCount();
  
    //  Refresh every min to update "since" label
    this.forceUpdateIntervalId = setInterval(() => {
      this.forceUpdate();
    }, 1000 * 60);
  }

  /**
   * GETs the button click count.
   */
  getClickCount() {
    this.setState({
      loading: true
    });

    fetch(scriptUrl, {
      method: 'GET'
    }).then(d => d.json()).then(result => {
      this.setState({
        loading: false,
        pressCount: result.count,
        since: new Date(result.since)
      });
    });
  }

  /**
   * Makes a POST request that this button has been clicked.
   */
  registerClick() {
    this.setState({
      loading: true
    });

    fetch(scriptUrl + '?incr=1', {
      method: 'POST'
    }).then(d => d.json()).then(result => {
      this.setState({
        loading: false,
        pressCount: result.count,
        since: new Date(result.since)
      });
    }).catch(e => {
      console.log(e);
      this.setState({
        loading: false
      });
    });
  }

  render() {
    let { state } = this;

    let sinceDiff = timeDiff(Date.now(), state.since.getTime());

    return (
      <div style={{ textAlign: 'center' }}>
        <button id="fun-button" onClick={() => this.registerClick()}>
          Anyone has pressed this
          {" "}{state.loading ? <img className="spinner" src={require('../assets/spinner.gif')} /> : state.pressCount.toLocaleString()} times
        </button>
        <p id="fun-button-since">
          Last pressed {sinceDiff.delta <= 0 ? "less than" : ''} {Math.max(1, sinceDiff.delta)} {timeUnits[sinceDiff.unit]} ago 
        </p>
      </div>
    )
  }
}