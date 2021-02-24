import React, {Component} from 'react'
import axios from 'axios'

import ContainerDetail from './containerdetail'
import ContainerForm from './containerform'


class ContainerList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      containersData: [],
      containers: '',
      showComponent: false,
    };
    this.getContainerDetail=this.getContainerDetail.bind(this);
    this.showContainerDetails=this.showContainerDetails.bind(this);
  }

  state = {
    containersData: [],
  }


  componentDidMount() {
    axios.get('http://127.0.0.1:8000/containers/')
      .then((response) => {
        this.setState({containersData: response.data});
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <ContainerForm/>
        </div>
        {this.state.containersData.map(item=> {
          return (
            <h6 key={item.id} onClick={() => this.showContainerDetails(item)}>
              Container: {item.number} Pickup Date: {item.pickup_date}
            </h6>
          );
        })}

        {this.state.showComponent ? (
          <ContainerDetail containerDetail={this.state.containers} />
        ): null}
      </div>
    );
  }

  getContainerDetail(item) {
    axios.get('http://127.0.0.1:8000'.concat(item.absolute_url))
      .then((response) => {
        this.setState({containers: response.data});
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  showContainerDetails(item) {
    this.getContainerDetail(item);
    this.setState({showComponent: true});
  }
}

export default ContainerList
