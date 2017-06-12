//REACT
import React, {Component} from 'react';
//IMAGES
import Header from './header.png';
//CSS
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='wrapper'>
            <section className='intro'>
                <header>
                    <img src={Header} alt='illustration of six dogs'/>
                    <hgroup>
                        <h1>barx</h1>
                        <h2>dog sitting services <span role='img' aria-label='dog'>🐶</span></h2>
                    </hgroup>
                    <p>Hello there! My name is Jaymie, and I live in Toronto. I am interested in part-time dogsitting for any dogs who live at 44 jackes avenue. as a former dog owner, i am patient, loving and attentive. i have a clean, spacious apartment that can host up to <strong>one</strong> dog at a time. i can provide walks, and adventures to the park, feedings, and.</p>
                </header>
            </section>
            <section className='services'>
                <h3>services <span role='img' aria-label='pencil and paper'>📝</span></h3>
                <ul className='servicesList'>
                    <li><strong>short-term dogsitting:</strong> 1 - 2 days; evenings or weekends only.</li>
                    <li><strong>long-term dogsitting:</strong> 2 or more days; evenings or weekends only.</li>
                    <li><strong className='note'>*Note: </strong>I need at least <strong>72 hours</strong> notice for any bookings. exceptions can be made for&nbsp;emergencies.</li>
                    <li><strong className='note'>*Note: </strong>I am currently unavailable Tuesday and Thursday evenings, as well as Saturday mornings/early afternoons.</li>
                </ul>
            </section>
            <section className='contact'>
                <h3>contact me <span role='img' aria-label='hand wave'>👋🏼</span></h3>
                <p>Jaymie Rosen</p>
                <p><a href='mailto:hello@jaymierosen.com'>hello@jaymierosen.com</a></p>
                <h4>interested? please fill out the form below, and i will be in touch with you&nbsp;soon.</h4>
                <form method="POST" action="http://formspree.io/hello@jaymierosen.com">
                    <label htmlFor="fullNname">Your Full Name</label>
                        <input type="text" name="Full Name" id="fullName" required></input>
                    <label htmlFor="emailAddress">Your Email Address</label>
                        <input type="email" name="Email Address" id="emailAddress" required></input>
                    <label htmlFor="phoneNumber">Your Phone Number</label>
                        <input type="text" name="Phone Number" id="phoneNumber" required></input>
                    <label htmlFor="shortTerm">Short Term Dogsitting (1 - 2 days; evenings or weekends only)</label>
                        <input type="radio" name="service" id="shortTerm" value="short term"></input>
                    <label htmlFor="longTerm" className='service'>Long Term Dogsitting (2 or more days; evenings or weekends only)</label>
                        <input type="radio" name="service" id="longTerm" value="long term"></input>
                    <label htmlFor="startDate" className='service'>Start Date</label>
                        <input name="startDate" type="date" id="startDate" required></input>
                    <label htmlFor="endDate">End Date (if applicable)</label>
                        <input name="endDate" type="date" id="endDate"></input>
                    <label htmlFor="message">Your Message</label>
                        <textarea id="message" required></textarea>
                    <input type="submit" value="Send"></input>
                </form>
            </section>
            <footer>
                <p>designed &amp; developed with <span role='img' aria-label='heart'>❤️</span> by jaymie rosen</p>
                <p>barx | 2017</p>
            </footer>
        </div>
    );
  }
}
export default App;
