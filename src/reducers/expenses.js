// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    case "SET_EXPENSES":
      return action.expenses;
    case "SET_AVERAGE":
      return action.expenses;
    case "SET_MEDIAN":
      return action.expenses;
    case "SET_MODE":
      return action.expenses;
    case "SET_STANDARD_DEVIATION":
      return action.expenses;
    default:
      return state;
  }
};
