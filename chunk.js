const chunkArray = (arr, length) => {
  // Init chunked Arr
  const chunkedArr = [];

  // Loop Through Arr
  arr.forEach((element) => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    // Check if last and if last length is equal to the chunk length
    if (!last || last.length === length) {
      chunkedArr.push([element]);
    } else {
      last.push(element);
    }
  });

  return chunkedArr;
};

module.exports = chunkArray;
