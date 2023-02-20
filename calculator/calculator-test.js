
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({
      amount: 400000,
      years: 30,
      loanRate: .1
  })).toEqual("3510.29")
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(updateMonthly("3510.29")).toEqual("$3510.29")
});

