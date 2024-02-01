import React, { Component } from "react";
import {Feedback} from "./Feedback/Feedback";
import Section from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  updateCountFeedback = value => {
    this.setState(prevState => ({ 
      [value]: prevState[value] + 1 }
      ));
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => total + value, 0);

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
      <Section title="Please, leave feedback">
      <Feedback 
      options={this.state}
      onFeedback={this.updateCountFeedback}/>
      </Section>

      {this.countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
           ) : (
            <Notification message="There is no feedback" />
          )}

      </>
    )
  }


}