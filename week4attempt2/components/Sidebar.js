import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    let responseHTML = '';


    this.props.menu.forEach( (item) => {
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
      responseHTML += '<li>' + item + '</li>';
      // ^ this wraps each item in the responseHTML into an <li> element.
    });

responseHTML = '<ul>' + responseHTML + '</ul>';
//This wraps the entire responseHTML into an <ul> element

    return responseHTML;
  }
}

export default Sidebar;
