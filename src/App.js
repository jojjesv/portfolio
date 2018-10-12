import React, { Component } from 'react';
import ProjectsCarousel from './projects/carousel';
import ProjectInfo from './projects/info';
import GlobalHeader from './header';
import AboutMe from './about';
import GlobalFooter from './footer';
import FunButton from './fun_button';

class App extends Component {
  state = {
    activeProjectIndex: 0
  }

  render() {
    let { state } = this;

    return (
      <div className="app">
        <GlobalHeader />
        <div id="page-content">
          <ProjectsCarousel
            onProposeChange={i => this.setState({ activeProjectIndex: i })}
            activeProjectIndex={state.activeProjectIndex} />
          <ProjectInfo activeProjectIndex={state.activeProjectIndex} />

          <AboutMe />

          <FunButton />
        </div>

        <GlobalFooter />
      </div>
    );
  }
}

export default App;
