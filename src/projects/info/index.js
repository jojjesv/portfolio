import React from 'react';
import projects from '../../data/projects';

import './styles.scss';

/**
 * Project info.
 * @author Johan Svensson
 */
export default class ProjectInfo extends React.Component {
  render() {
    let { props, state } = this;
    let { activeProjectIndex } = props;

    let project = projects[activeProjectIndex];

    return (
      <div id="project-info">
        <h3 className="subtitle">{project.subtitle}</h3>
        <p className="description">{project.description}</p>

        <div style={{ textAlign: 'right' }}>
          <a className="external-link" target="_blank"
            href={project.href}>Visit the site</a>
        </div>
      </div >
    )
  }
}