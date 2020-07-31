/**
 * Personal projects data
 * @const @export
 */
const data = [
  {
    title: 'Lightstrip',
    link: 'https://github.com/ardieb/ledlights',
    date: 'August 2018',
    desc: 'Built for person use.'
    + 'The application uses amazon IoT and AWS to transform voice commands from '
    + 'Alexa into updates to a shadow document. These updates are recognized '
    + 'as events by a rasberry pi, which then sends the updates to an arduino '
    + 'controller. The arduino then animates WS2811 lights in response and sends '
    + 'the response back to shadow document',
  },
  {
    title: 'OAlgebra',
    link: 'https://github.com/ardieb/oAlgebra',
    date: 'April 2019', 
    desc: 'OAlgebra is a numpy styled library, written for matrix computations. '
    + 'The library is written entirely in OCaml. It includes an interpreter '
    + 'and abstract mathamatical language that can converts regex expressions '
    + 'into an abstract syntax tree that can be evaluated.'
  },
  {
    title: 'cryptoAI',
    link: 'https://github.com/ardieb/cryptoAI',
    date: 'July 2019',
    desc: 'Built to test using AI in python. Collects data from Crypto Compare '
    + 'API and uses a 3 layer network to process the data. Creates a machine '
    + 'learning model that can predict prices of various trading symbols. '
    + 'Built using pytorch and pandas. CUDA compatible.'
  },
  {
    title: 'ISS Tracker',
    link: 'https://github.com/ardieb/ISS-Tracker.git',
    date: 'August 2019',
    desc: 'Test APP built to test graphing in python with plotly and dash app. '
    + 'Tracks the posotion of the ISS in realtime and updates the graph on the '
    + 'world map.'
  }
];

export default data;
