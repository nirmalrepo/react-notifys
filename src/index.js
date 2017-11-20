import React from 'react';
import "./styles.css"
class Notifys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotification: true,
    };
    this._closeNotify = this._closeNotify.bind(this);
  }
  _closeNotify(e){
    e.preventDefault;
    this.setState({ showNotification: false });
    if(this.props.onClose){
      this.props.onClose(e);
    }
  }

  render() {
    const fadeInOutClass = this.state.showNotification ? 'notify-div fadeIn' : 'notify-div fadeOut';
    const {className, children} = this.props;
    return (
        <div className={fadeInOutClass}>
          <div className={className}>
            <a className="close" title="close" onClick={this._closeNotify}>×</a>
            {React.Children.map(children, (element) => {
              if (element.type == undefined)
                return element
              else
                return React.cloneElement(element)
            })}
          </div>
        </div>
    );
  }
}

export default Notifys;
