import { Fragment } from "react";

import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeal";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
