const coinChange = require("./coinChange");

test("finds minimum amount of coins for numbers £ output", () => {
  let coins = [
    [200, 0],
    [100, 0],
    [50, 0],
    [20, 0],
    [10, 0],
    [5, 0],
    [2, 0],
    [1, 0],
  ];

  let amount = 200;

  expect(coinChange(coins, amount)).toBe("£2.00=1");
});

test("finds minimum amount of coins for numbers p output", () => {
  let coins = [
    [200, 0],
    [100, 0],
    [50, 0],
    [20, 0],
    [10, 0],
    [5, 0],
    [2, 0],
    [1, 0],
  ];
  let amount = 5;
  expect(coinChange(coins, amount)).toBe("5p=1");
});

test("negative number test", () => {
  let coins = [
    [200, 0],
    [100, 0],
    [50, 0],
    [20, 0],
    [10, 0],
    [5, 0],
    [2, 0],
    [1, 0],
  ];
  let amount = -1;
  expect(coinChange(coins, amount)).toBe("Enter valid number");
});

test("decimal number test", () => {
  let coins = [
    [200, 0],
    [100, 0],
    [50, 0],
    [20, 0],
    [10, 0],
    [5, 0],
    [2, 0],
    [1, 0],
  ];
  let amount = 1.1;
  expect(coinChange(coins, amount)).toBe("Enter valid number");
});
