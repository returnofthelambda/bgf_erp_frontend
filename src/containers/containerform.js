import React, {Component} from 'react';
import axios from 'axios';

class ContainerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      pickup_date: '',
      load_date: '',
      departure_date: '',
      steamship: '',
      booking: '',
      railyard: '',
      size: '',
      status: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.number);
    axios
        .post('http://127.0.0.1:8000/containers/create/',
            {
              number: this.state.number,
              pickup_date: this.state.pickup_date,
              load_date: this.state.load_date,
              departure_date: this.state.departure_date,
              steamship: this.state.steamship,
              booking: this.state.bookingwebsite,
              railyard: this.state.railyard,
              size: this.state.size,
              status: this.state.status,
            })
        .then((response) => {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  render() {
    const {
        number,
        pickup_date,
        load_date,
        departure_date,
        steamship,
        booking,
        railyard,
        size,
        status,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Container
          <input
            type='text'
            name='number'
            value={number}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Pickup Date
          <input
            type='date'
            name='pickup_date'
            value={pickup_date}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Load Date
          <input
            type='date'
            name='load_date'
            value={load_date}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Departure Date
          <input
            type='date'
            name='departure_date'
            value={departure_date}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Steamship
          <input
            type='text'
            name='steamship'
            value={steamship}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Booking
          <input
            type='text'
            name='booking'
            value={booking}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Railyard
          <input
            type='text'
            name='railyard'
            value={railyard}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Size
          <input
            type='text'
            name='size'
            value={size}
            onChange={this.handleChange}
          />
        </div>
        <div>
          Status
          <input
            type='text'
            name='status'
            value={status}
            onChange={this.handleChange}
          />
        </div>
        <input style={{backgroundColor: 'white'}}
          type='submit' value='Submit' />

      </form>
    );
  }
}

export default ContainerForm;
