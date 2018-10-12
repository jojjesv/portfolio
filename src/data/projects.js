/**
 * Projects to display.
 * @author Johan Svensson
 */
const baseUrl = 'http://its.teknikum.it/johan';

export default [{
  title: 'jMenu',
  subtitle: "Easily obtain the current week's lunch menu",
  description: 'This tool lists the school lunch menu for the current week. Designed for simplicity.',
  coverImageSrc: require('../assets/cover/menu.png'),
  light: true,
  href: `${baseUrl}/lunch/`
}, {
  title: 'Emoji Popper',
  subtitle: 'A game of swiftness',
  description: `A native JavaScript game where the objective is to inflate balloons until they pop.`,
  coverImageSrc: require('../assets/cover/popper.jpg'),
  href: `${baseUrl}/popper/`
}, {
  title: 'Viking Robotics',
  subtitle: 'The first FRC team from Sweden',
  description: "The team's website shows the lastest posts from their Facebook page, the team in its entirety as well as the team's sponsors.",
  coverImageSrc: require('../assets/cover/vikings.png'),
  light: true,
  href: `https://jojjesv.github.io/vikingrobotics`
}]