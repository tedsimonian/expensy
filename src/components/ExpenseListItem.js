import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div className="expense-item-wrapper">
    <div>
      <h3 className="list-item__title">
        <Link to={`/edit/${id}`}>{description}</Link>
      </h3>

      <span className="list-item__sub-title">
        {moment(createdAt).format("MMMM Do, YYYY")}
      </span>
    </div>

    <h3 className="list-item__data">
      {numeral(amount / 100).format("$0,0.00")}
    </h3>
  </div>
);

export default ExpenseListItem;
