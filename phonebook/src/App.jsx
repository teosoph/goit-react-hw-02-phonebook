import React, { Component } from 'react';

import Section from './Components/Section/Section'
import Input from './Components/Input/Input'
import Contacts from './Components/Contacts/Contacts'


import styles from '../src/App.css';



class App extends Component {

state = {
  contacts: [],
  name: ''
}

//   // Increment function on buttons
//   onBtnClick = nameValue => () => {
//     this.setState(prevState => (
//       { [nameValue]: prevState[nameValue] + 1 })
//     );
//   };
//   // Count total feedbacks function 
//   countTotalFeedback = () => {
//     const objValues = Object.values(this.state)
//     const totalFeedbacks = objValues.reduce((accum, value) => accum + value)
//     return (totalFeedbacks)
//   }
//   // Count Positive feedbacks function 
//   countPositiveFeedbackPercentage = () => {
//     const positiveFeedbacks = this.state['good']
//     // console.log(positiveFeedbacks);

//     const totalPositiveFeedbacks = Math.round((positiveFeedbacks / this.countTotalFeedback()) * 100)
//     // console.log(totalPositiveFeedbacks);

//     return (totalPositiveFeedbacks)
//   }

  render() {
//     const { good, neutral, bad } = this.state;
//     const objKeys = Object.keys(this.state);
//     const totalFeedback = good + neutral + bad;


    return (
  
      <section >
        

        <Section  title={'Phonebook'}>

          <form className={styles.form} action="">
            
            <h2>Name</h2>
            
          <Input />
        
            <button>Add contact</button>

          </form>

          <h2>Contacts</h2>
          
          <Contacts name={'Contact-1'}  />
        
        </Section>
              
      </section>
    );
  }
}

export default App;
