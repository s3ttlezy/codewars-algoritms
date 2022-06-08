const concerts = {
  "Москва": new Date("2022-04-01"),
  "Казань": new Date("2022-09-02"),
  "Владивосток": new Date("2022-04-21"),
  "Калининград": new Date("2022-09-15"),
  "Омск": new Date("2022-04-18"),
  "Питер": new Date("2022-09-10"),
}

function concertsToArray(concerts) { // O(n*log2)
  return Object.keys(concerts)
    .filter(city => concerts[city] > new Date()) // O(n)
    .sort((a, b) => concerts[a] - concerts[b]) // O(N*log2n)
}

