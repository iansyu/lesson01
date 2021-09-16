// A Money Counter Calculator
function checkout(sum) {
  const coin_hyaku = 100;
  const coin_ju = 10;
  const coin_ichi = 1;
  var step1, step2, step3;
  let result;
  if (sum > 100) {
    step1 = Math.floor(sum/100);
    step2 = Math.floor((sum-step1*100)/10);
    step3 = sum-(step1*100+step2*10);
    result =  `100円玉${step1}枚, 10円玉${step2}枚, 1円玉${step3}枚.`;
  } else if (10 <= sum && sum < 100) {
    step1 = Math.floor(sum/10);
    step2 = Math.floor(sum-step1*10);
    result =  `100円玉0枚, 10円玉${step1}枚, 1円玉${step2}枚.`;
  } else if (0 <= sum && sum < 10){
    result =  `100円玉0枚, 10円玉0枚, 1円玉${sum}枚.`;
  } else {
    result =  'すみません、正しい金額を入れてください。'
  }
  return result;
}

console.log(checkout(process.argv[2]));