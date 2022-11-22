// Remember, we're gonna use strict mode in all scripts now!
/*
'use strict';

const temps = [4, 2, -5, 15, 'error', 32, 12, 0, -13];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if(typeof temps[i] !== 'number') continue;
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
  }

  return max-min;
};

console.log(calcTempAmplitude(temps));



const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cel',
    value: Number(prompt('Degrees Celsius')),
  };
  console.log(measurement.value);
  console.table(measurement.value);

  const Kelvin = measurement.value + 273;
  return Kelvin;
};

console.log(measureKelvin());



const forecast = [23, 12, 8, 19, 23];

const printForecast = function (forecast) {
    let printForecast = `...`;
    for (let i = 1; i <= forecast.length; i++) {
        printForecast += ` ${forecast[i]}C in ${i} ${i===1? `day` : `days`} ...`;
    }
    return printForecast;
};

console.log(printForecast(forecast));

*/