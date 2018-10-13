import React from 'react';

import projects from "../../data/projects";
import classNames from 'classnames';

import './styles.scss';

/**
 * Carousel of projects.
 * @author Johan Svensson
 */
export default class ProjectsCarousel extends React.Component {
  previousProject;
  firstBackgroundVisible = true;

  /**
   * Switches to another project.
   * @param incr {number} Project index increment from the active.
   */
  changeProject(incr) {
    //  Don't update state here, let parent do it
    let { activeProjectIndex } = this.props;
    this.previousProject = projects[activeProjectIndex];

    let newIndex = Math.max(0, Math.min(projects.length - 1, activeProjectIndex + incr))

    this.props.onProposeChange(newIndex);

    //  Toggle for fading effect
    this.firstBackgroundVisible = !this.firstBackgroundVisible;
  }

  render() {
    let { props, previousProject } = this;
    let { activeProjectIndex } = props;

    let project = projects[activeProjectIndex];

    return (
      <div id="project-carousel-wrapper">
        {
          [0, 1].map(i => {
            let visible = this.firstBackgroundVisible ? i == 0 : i == 1;
            return (
              <div className={classNames({
                background: true,
                visible
              })} style={{
                backgroundImage: visible ? (
                  `url(${project.coverImageSrc})`
                ) : (previousProject ? `url(${previousProject.coverImageSrc})` : null)
              }}></div>
            )
          })
        }

        <div id="project-carousel">
          {
            projects.map((p, i) => (
              <div className={classNames({
                project: true,
                active: activeProjectIndex == i,
                left: i < activeProjectIndex,
                right: i > activeProjectIndex
              })}>
                <div className="cover" style={{ backgroundImage: `url(${p.coverImageSrc})` }}>
                  <h2 className={classNames({
                    title: true,
                    dark: !!p.light
                  })}>{p.title}</h2>
                </div>
              </div>
            ))
          }

          <div class="nav-container">
            <button className={classNames({
              nav: true,
              prev: true,
              visible: activeProjectIndex > 0
            })} onClick={() => this.changeProject(-1)}>
            </button>
            <button className={classNames({
              nav: true,
              next: true,
              visible: activeProjectIndex < projects.length - 1
            })} onClick={() => this.changeProject(1)}>
            </button>
          </div>
        </div>
      </div>
    )
  }
}