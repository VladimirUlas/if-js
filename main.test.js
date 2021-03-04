function sum(a) {
    return function (b) {
        return a + b;
    }
}
test('складываем 5 + 2', () => {
    expect(sum(5)(2)).toBe(7);
});

console.log(sum(5)(2));

