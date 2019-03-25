import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";
import Checkbox from "./Checkbox";

export class ExpenseList extends React.Component {
  state = {
    checkboxes: this.props.expenses.reduce(
      (expenses, expense) => ({
        [expense.id]: false
      }),
      {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  handleCheckboxChange = id => {
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [id]: !prevState.checkboxes[id]
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
        <div className="list-body">
          {this.props.expenses.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No expenses</span>
            </div>
          ) : (
            this.props.expenses.map(expense => {
              return (
                <Checkbox
                  className="list-item"
                  label={expense.id}
                  isSelected={this.state.checkboxes[expense.id] || false}
                  onCheckboxChange={this.handleCheckboxChange}
                  key={expense.description}
                >
                  <ExpenseListItem key={expense.id} {...expense} />
                </Checkbox>
              );
            })
          )}
        </div>
        <div className="list-header">
          <button type="button" className="button" onClick={this.selectAll}>
            Select All
          </button>
          <button type="button" className="button" onClick={this.deselectAll}>
            Deselect All
          </button>
        </div>
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
