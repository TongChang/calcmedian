const hoge = [1, 2, 3, 3, 5, 7, 9, 10];

const getMedian = data => {
  const length = data.length;
  const median = 0;
  if (length === 0) return;
  if (length == 1) return data[0];

  if (isOdd(length)) {
    const target = (length - 1) / 2 + 1;
    median = data[target];
  } else {
    const maxOfUnder = data[length / 2];
    const minOfUpper = data[length / 2 + 1];
    median = (maxOfUnder + minOfUpper) / 2;
  }
  return median;
};

const isOdd = number => {
  return number % 2 !== 0;
};

const doProcess = () => {
  alert(getMedian(hoge));
};