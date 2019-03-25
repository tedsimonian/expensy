import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import ExpenseCalculator from "./ExpenseCalculator";
import selectExpenses from "../selectors/expenses";
import Checkbox from "./Checkbox";

export class ExpenseList extends React.Component {
  state = {
    checkboxes: {
      isSelected: false,
      amount: 0
    }
  };

  componentWillMount() {
    this.setToggleCheckboxStateByExpenses(this.props.expenses);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.expenses !== this.props.expenses) {
      this.setToggleCheckboxStateByExpenses(this.props.expenses);
    }
  }

  setToggleCheckboxStateByExpenses = expenses => {
    const checkboxToggleState = expenses.reduce((toggleStateObj, expense) => {
      toggleStateObj[expense.id] = {
        isSelected: false,
        amount: expense.amount / 100
      };
      return toggleStateObj;
    }, {});

    this.setState({
      checkboxes: checkboxToggleState
    });
  };

  selectAllCheckboxes = isSelected => {
    // set state triggers a re render!
    const checkboxes = {};
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      checkboxes[checkbox] = {
        ...this.state.checkboxes[checkbox],
        isSelected
      };
    });
    this.setState({ checkboxes });
  };

  handleCheckboxChange = id => {
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [id]: {
          ...prevState.checkboxes[id],
          isSelected: !prevState.checkboxes[id].isSelected
        }
      }
    }));
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Expenses</div>
          <div className="show-for-desktop">Expense</div>
          <div className="show-for-desktop">Amount</div>
        </div>
        <ul className="list-body">
          {this.props.expenses.length === 0 ? (
            <li className="list-item list-item--message">
              <span>No expenses</span>
            </li>
          ) : (
            this.props.expenses.map(expense => {
              return (
                <li className="list-item" key={expense.id}>
                  <Checkbox
                    label={expense.id}
                    isSelected={
                      this.state.checkboxes.hasOwnProperty(expense.id)
                        ? this.state.checkboxes[expense.id].isSelected
                        : false
                    }
                    onCheckboxChange={this.handleCheckboxChange}
                  />
                  <ExpenseListItem {...expense} />
                </li>
              );
            })
          )}
        </ul>
        <div className="list-header">
          <button type="button" className="button" onClick={this.selectAll}>
            Select All
          </button>
          <button type="button" className="button" onClick={this.deselectAll}>
            Deselect All
          </button>
        </div>
        <ExpenseCalculator checkboxes={this.state.checkboxes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
