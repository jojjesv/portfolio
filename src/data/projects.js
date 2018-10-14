/**
 * Projects to display.
 * @author Johan Svensson
 */
const baseUrl = 'http://its.teknikum.it/johan';

export default [{
  title: 'Fuzz (Android/iOS)',
  subtitle: 'The candy app system',
  description: "Served to a client along with both an administrative app and website, for managing orders and assortment.",
  coverImageSrc: require('../assets/cover/fuzzapp.png'),
  light: false,
  googlePlayHref: 'https://jojjesv.github.io/vikingrobotics',
  appStoreHref: 'https://jojjesv.github.io/vikingrobotics',
  href: `https://jojjesv.github.io/vikingrobotics`
}, {
  title: 'Fuzz (web)',
  subtitle: 'The simple candy site',
  description: "Fill up your candy bag and order it from a website.",
  coverImageSrc: require('../assets/cover/fuzzweb.png'),
  light: false,
  href: `https://fuzzgodis.com`
}, {
  title: 'Viking Robotics',
  subtitle: 'The first FRC team from Sweden',
  description: "The team's website shows the lastest posts from their Facebook page, the team in its entirety as well as the team's sponsors.",
  coverImageSrc: require('../assets/cover/vikings.png'),
  light: true,
  href: `https://jojjesv.github.io/vikingrobotics`
}, {
  title: 'Sörk\'s popcorn',
  subtitle: "Popcorn popped with passion",
  description: 'A website for a friend who\'s passion for popcorn finally made display on the web.',
  coverImageSrc: require('../assets/cover/sorkspopcorn.jpg'),
  light: false,
  href: 'https://sorkspopcorn.site'
}, {
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
}]