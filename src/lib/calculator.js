const sum = (num1, num2) => {
  const first_number = parseInt(num1);
  const second_number = parseInt(num2);

  if (Number.isNaN(first_number) || Number.isNaN(second_number)) {
    throw new Error('Please check your input');
  }

  return first_number + second_number;
};

module.exports = {
  sum,
};
