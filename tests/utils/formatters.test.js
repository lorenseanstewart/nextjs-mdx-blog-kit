const { formatSEODate, formatDisplayDate } = require("../../utils/formatters");

test("format display date", () => {
    const displayDate = "2018-01-25";
    const expectedDisplayDate = "Thu, 25 Jan 2018";
    expect(formatDisplayDate(displayDate)).toBe(expectedDisplayDate);
});

test("format SEO date", () => {
    const seoDate = "2018-01-25";
    const expectedSeoDate = "2018-01-25T00:00:00.000Z";
    expect(formatSEODate(seoDate)).toBe(expectedSeoDate);
});
