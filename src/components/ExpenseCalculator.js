import React from "react";
import ss from "spm-simple-statistics";

export default class ExpenseCalculator extends React.Component {
  state = {
    result: ""
  };

  getSelectedAmounts = checkboxes => {
    const amounts = [];
    Object.keys(checkboxes).map(checkbox => {
      if (checkboxes[checkbox].isSelected) {
        amounts.push(checkboxes[checkbox].amount);
      }
    });

    return amounts;
  };

  average = () => {
    const amounts = this.getSelectedAmounts(this.props.checkboxes);
    const result = ss.average(amounts);

    this.setState({
      result
    });
  };

  mode = () => {
    const amounts = this.getSelectedAmounts(this.props.checkboxes);
    const result = ss.mode(amounts);

    this.setState({
      result
    });
  };

  variance = () => {
    const amounts = this.getSelectedAmounts(this.props.checkboxes);
    const result = ss.variance(amounts);

    this.setState({
      result
    });
  };

  standard_deviation = () => {
    const amounts = this.getSelectedAmounts(this.props.checkboxes);
    const result = ss.standard_deviation(amounts);

    this.setState({
      result
    });
  };

  median = () => {
    const amounts = this.getSelectedAmounts(this.props.checkboxes);
    const result = ss.median(amounts);

    this.setState({
      result
    });
  };

  min = () => {
    const amounts = this.getSelectedAmounts(this.props.checkboxes);
    const result = ss.min(amounts);

    this.setState({
      result
    });
  };

  max = () => {
    const amounts = this.getSelectedAmounts(this.props.checkboxes);
    const result = ss.max(amounts);

    this.setState({
      result
    });
  };

  mad = () => {
    const amounts = this.getSelectedAmounts(this.props.checkboxes);
    const result = ss.mad(amounts);

    this.setState({
      result
    });
  };

  rms = () => {
    const amounts = this.getSelectedAmounts(this.props.checkboxes);
    const result = ss.rms(amounts);

    this.setState({
      result
    });
  };

  render() {
    return (
      <div>
        <br />
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">
              Calculated Result: <span>{this.state.result}</span>
            </h1>
          </div>
        </div>
        <div className="grid">
          <button onClick={this.average} className="cell ui button">
            Average
          </button>
          <button onClick={this.mode} className="cell ui button">
            Mode
          </button>
          <button onClick={this.variance} className="cell ui button">
            Variance
          </button>
          <button onClick={this.standard_deviation} className="cell ui button">
            Standard Deviation
          </button>
          <button onClick={this.median} className="cell ui button">
            Median
          </button>
          <button onClick={this.min} className="cell ui button">
            Min
          </button>
          <button onClick={this.max} className="cell ui button">
            Max
          </button>
          <button onClick={this.mad} className="cell ui button">
            MAD
          </button>
          <button onClick={this.rms} className="cell ui button">
            RMS
          </button>
        </div>
      </div>
    );
  }
}
