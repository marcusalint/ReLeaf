// Get the goal through sum of all products goals
const getGoal = function(products) {
  let totalGoal = 0;
  for (const product of products) {
    totalGoal += product.goal;
  }
  return totalGoal;
}

// Get the amount reached from the goal
const getAmountReached = function(products) {
  let totalAmountReached = 0;
  for (const product of products) {
    totalAmountReached += product.amount_reached;
  }
  return totalAmountReached;
}
// Get the percentage for progress bar
const getPercentage = function(state) {
  const percent = (state.amount_reached/state.goal)*100;
  return percent;
}

// Get the percentage for product progress bar
const getPercentageProducts = function(props) {
  const percent = (props.amount_reached/props.goal)*100;
  return percent;
}

export { getGoal, getAmountReached, getPercentage, getPercentageProducts }