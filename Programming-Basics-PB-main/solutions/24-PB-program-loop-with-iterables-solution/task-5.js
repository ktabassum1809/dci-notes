/*
 Task 5
 */

const years = [
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
];

for (let i = 0; i < years.length; i++) {
  if (years[i] % 4 === 0) {
    console.log(years[i]);
  }
}
