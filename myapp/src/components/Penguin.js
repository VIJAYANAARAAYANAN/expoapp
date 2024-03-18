import React, { Component } from 'react'
import'./penguin.css';
export default class Penguin extends Component {
  render() {
    return (
        <Penguin>
        <div class="row-container">
           {/* First column */}
          <div class="column">
            <div class="subrow">
              <div class="col">
                <img src="C:\Users\DELL\Downloads\clock.svg" alt="Image 1"/>
                <p>Today Schedule</p>
              </div>
            </div>
            <div class="subrow">
              <div class="col">
                <img src="C:\Users\DELL\Downloads\clock1.svg" alt="Image 1"/>
                <p1>Open from 10:00am - 3:00pm</p1>
              </div>
            </div>
            <div class="subrow">
              <div class="col">
                <img src="C:\Users\DELL\Downloads\clock1.svg" alt="Image 1"/>
                <p1>Last admission : 2:30pm</p1>
              </div>
            </div>
            <div class="bottom-row">
              <p2>All Openings</p2>
              <img src="C:\Users\DELL\Downloads\rarrow.svg" alt="Bottom Image"/>
          </div>
          </div>
           {/* Second column */}
          <div class="column">
            <div class="subrow">
              <div class="col">
                <img src="C:\Users\DELL\Downloads\ticket.svg" alt="Image 1"/>
                <p>Purchase Ticket</p>
              </div>
            </div>
            <div class="subrow">
              <div class="col">
                <img src="C:\Users\DELL\Downloads\ticket1.svg" alt="Image 1"/>
                <p1>In Season - $12 per person </p1>
              </div>
            </div>
            <div class="subrow">
              <div class="col">
                <img src="C:\Users\DELL\Downloads\ticket1.svg" alt="Image 1"/>
                <p1>Off Season - $10 per person </p1>
              </div>
            </div>
            <div class="bottom-row">
              <p2>Buy Tickets</p2>
              <img src="C:\Users\DELL\Downloads\rarrow.svg" alt="Bottom Image"/>
          </div>
          </div>
           {/* Third column */}
          <div class="column">
            <div class="subrow">
              <div class="col">
                <img src="C:\Users\DELL\Downloads\plan.svg" alt="Image 1"/>
                <p>Plan Your Trip</p>
              </div>
            </div>
            <div class="subrow">
              <div class="col">
                <img src="C:\Users\DELL\Downloads\plan1.svg" alt="Image 1"/>
                <p1>6 Experience</p1>
              </div>
            </div>
            <div class="subrow">
              <div class="col">
                <img src="C:\Users\DELL\Downloads\plan1.svg" alt="Image 1"/>
                <p1>20 Attractions</p1>
              </div>
            </div>
            <div class="bottom-row">
              <p2>Plan Trip</p2>
              <img src="C:\Users\DELL\Downloads\rarrow.svg" alt="Bottom Image"/>
          </div>
          </div>

           {/* Fourth column */}
          <div class="column">
            <div class="subrow">
              <div class="col">
                <img src="C:\Users\DELL\Downloads\arrival.svg" alt="Image 1"/>
                <p>Arrival</p>
              </div>
            </div>
            <div class="subrow">
              <div class="col">
                <img src="C:\Users\DELL\Downloads\plan1.svg" alt="Image 1"/>
                <p1>Explore Exibit</p1>
              </div>
            </div>
            <div class="subrow">
              <div class="col">
                <img src="C:\Users\DELL\Downloads\arrival1.svg" alt="Image 1"/>
                <p1>Last admission : 2:30pm</p1>
              </div>
            </div>
            <div class="bottom-row">
              <p1>Get Direction</p1>
              <img src="C:\Users\DELL\Downloads\rarrow.svg" alt="Bottom Image"/>
          </div>
          </div>
        </div>
      </Penguin>
    )
  }
}
