const a = {
  prices: [110, 95, 70],
  notes: [
    '10.0% higher than in-store',
    '5.0% lower than in-store',
    'Same as in-store',
  ],
  x: 5,
};

const b = {
  prices: [24.42, 24.42, 24.2424, 85.23],
  notes: [
    '13.157% higher than in-store',
    '13.157% lower than in-store',
    'Same as in-store',
    '19.24% higher than in-store',
  ],
  x: 24.24,
};

function getDiff(str) {
  let sliced = Number(str.slice(0, str.indexOf('%')) / 100);
  console.log(sliced);
  return sliced;
}

function doMath(onlinePrice, note) {
  if (note.includes('higher')) return onlinePrice - (onlinePrice * getDiff(note));
  if (note.includes('lower')) return onlinePrice + (onlinePrice * getDiff(note));
  return onlinePrice;
}
function arrayDiff(arr1, arr2) {
  let diff = [];
  arr1.forEach((num, i) => diff.push(arr1[i] - arr2[i]));
  return diff.reduce((acc, accum) => acc + accum);
}

function isAdmissibleOverpayment(onlinePrices, notes, x) {
  const inStorePrices = [];
  notes.forEach((note, i) => {
    let inStore = doMath(onlinePrices[i], notes[i]);
    inStorePrices.push(inStore);
  });
  return arrayDiff(onlinePrices, inStorePrices);
}

isAdmissibleOverpayment(a.prices, a.notes, a.x);
