function changeValue(array) {
  return {
    start: (fn) => {
      array.forEach(item => {
        fn(item);
      });

      return {
        stop: () => {
        }
      };
    }
  };
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const temp1 = changeValue(array);
const exec1_1 = temp1.start(number => {
  console.log(`#1.1: ${number * 2}`);
});