import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeal.Module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Loki",
    description: "Finest fish and veggies",
    tier: 22.99,
  },
  {
    id: "m2",
    name: "Nock Fury",
    description: "A german specialty!",
    tier: 16.5,
  },
  {
    id: "m3",
    name: "Iron Man",
    description: "American, raw, meaty",
    tier: 12.99,
  },
  {
    id: "m4",
    name: "Thor",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m5",
    name: "Hurk",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m6",
    name: "Captin America",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m7",
    name: "Spaider Man",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m8",
    name: "Drax",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m9",
    name: "Odin",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m10",
    name: "Vision",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m11",
    name: "Star Load",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m12",
    name: "Ant Man",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m13",
    name: "Black Panther",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m14",
    name: "Doctor Strange",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m15",
    name: "Mantis",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m16",
    name: "Balck Widow",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m17",
    name: "Groot",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m18",
    name: "NED",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m19",
    name: "Winter Soldier",
    description: "Healthy...and green...",
    tier: 18.99,
  },
  {
    id: "m20",
    name: "Captin Marvel",
    description: "Healthy...and green...",
    tier: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      tier={meal.tier}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
