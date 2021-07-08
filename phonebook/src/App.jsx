import React, { Component } from 'react';

import Section from './Components/Section/Section'
import Input from './Components/Input/Input'


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
        

        <Section  title={'Please leave feedback'}>

          <Input />
          
{/* //           <FeedbackOptions 
//           options={objKeys}
//           onLeaveFeedback={this.onBtnClick} /> */}

      </Section>
        
        
        


        </section>
    );
  }
}

export default App;
