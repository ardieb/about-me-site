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
];

export default data;
