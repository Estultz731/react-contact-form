import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
       <>
       <div class="container">
        <h1 class="brand"><span>Acme</span>Web Design</h1>
        <div class="wrapper animated bounceInLeft"></div>
          <div class="company-info">
            <h3>Acme Web Design</h3>
            <ul>
              <li><i class="fas fa-road"></i>44 Something St.</li>
              <li><i class="fas fa-phone"></i>(555)555-5555</li>
              <li><i class="fas fa-envelope"></i>test@acme.test</li>
            </ul>
          </div>
          <div class="Contact">
          <h3>Email Us</h3>
          <form>
            <p>
              <label>Name</label>
              <input type="text" name="name" />
            </p>
            <p>
              <label>Company</label>
              <input type="text" name="company" />
            </p>
            <p>
              <label>Email Address</label>
              <input type="text" name="email" />
            </p>
            <p>
              <label>Phone Number</label>
              <imput type=" text" name="phone" />
            </p>
            <p class="full">
              <label>Message</label>
                <textarea name="message" rows="5">
                </textarea>
            </p>
            <p class="full">
              <button>Submit</button>
            </p>
          </form>
          </div>
       </div>
       </>
    );
  }
}

export default App;
