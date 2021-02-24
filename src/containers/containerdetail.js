import React, {Component} from 'react';
import ContainerUpdate from './containerupdate';

class ContainerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this.updateContainerDetail = this.updateContainerDetail.bind(this);
  }
  updateContainerDetail() {
    this.setState({showComponent: true});
  }

  render() {
    const obj = this.props.containerDetail;
    return (
      <div style={{color: 'yellow', border: '1px solid yellow'}}>
        <p>Container: {obj.number}</p>
        <p>Steamship: {obj.steamship}</p>
        <p>Booking: {obj.booking}</p>
        <p>Pickup Date: {obj.pickup_date}</p>
        <p>Railyard: {obj.railyard}</p>
        <p>Container Size: {obj.size}</p>
        <button
          style={{backgroundColor: 'white'}}
          onClick={()=> this.updateContainerDetail()}>
          Update
        </button>
        {this.state.showComponent ? <ContainerUpdate containerUpdate={obj}/> : null}
      </div>
    );
  }
}

export default ContainerDetail;
