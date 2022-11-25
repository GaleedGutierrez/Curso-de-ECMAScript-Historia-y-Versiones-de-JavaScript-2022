const REGEX = /(\d{4})-(\d{2})-(\d{2})/;

const MATCHERS = REGEX.exec('2020-01-01');

console.table(MATCHERS);
