// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//Positive #1, isPhoneNumber(phoneNumber)
test('Correct format phone number', () => {
    expect(functions.isPhoneNumber('800-273-8255')).toBe(true);
});
//Positive #2, isPhoneNumber(phoneNumber)
test('Correct format phone number', () => {
    expect(functions.isPhoneNumber('678-999-8212')).toBe(true);
});
//Negative #1, isPhoneNumber(phoneNumber)
test('Incorrect format phone number', () => {
    expect(functions.isPhoneNumber('NOT-A-PHONENUMBER')).toBe(false);
});
//Negative #2, isPhoneNumber(phoneNumber)
test('Incorrect format phone number', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

//Positive #1, isEmail(email)
test('Correct format email', () => {
    expect(functions.isEmail('cse110@gmail.com')).toBe(true);
});
//Positive #2, isEmail(email)
test('Correct format email', () => {
    expect(functions.isEmail('eric_f@gmail.com')).toBe(true);
});
//Negative #1, isEmail(email)
test('Incorrect format email', () => {
    expect(functions.isEmail('notanemailatgmail.com')).toBe(false);
});
//Negative #2, isEmail(email)
test('Incorrect format email', () => {
    expect(functions.isEmail('wheresthedot@gmailcom')).toBe(false);
});

//Positive #1, isStrongPassword(password)
test('Sufficiently strong password', () => {
    expect(functions.isStrongPassword('AW96B6')).toBe(true);
});
//Positive #2, isStrongPassword(password)
test('Sufficiently strong password', () => {
    expect(functions.isStrongPassword('Ber847agiAea')).toBe(true);
});
//Negative #1, isStrongPassword(password)
test('Insufficiently strong password', () => {
    expect(functions.isStrongPassword('pass word')).toBe(false);
});
//Negative #2, isStrongPassword(password)
test('Insufficiently strong password', () => {
    expect(functions.isStrongPassword('Open Sesame')).toBe(false);
});

//Positive #1, isDate(date)
test('Correct format date', () => {
    expect(functions.isDate('06/11/1999')).toBe(true);
});
//Positive #2, isDate(date)
test('Correct format date date', () => {
    expect(functions.isDate('03/08/1995')).toBe(true);
});
//Negative #1, isDate(date)
test('Incorrect format date', () => {
    expect(functions.isDate('06.08/1938')).toBe(false);
});
//Negative #2, isDate(date)
test('Incorrect format date', () => {
    expect(functions.isDate('05/29.1928')).toBe(false);
});

//Positive #1, isHexColor(color)
test('Correct format actual hex color', () => {
    expect(functions.isHexColor('630EBE')).toBe(true);
});
//Positive #2, isHexColor(color)
test('Correct format actual hex color', () => {
    expect(functions.isHexColor('53F501')).toBe(true);
});
//Negative #1, isHexColor(color)
test('Incorrect format actual hex color', () => {
    expect(functions.isHexColor('Something')).toBe(false);
});
//Negative #2, isHexColor(color)
test('Incorrect format actual hex color', () => {
    expect(functions.isHexColor('G22ERI')).toBe(false);
});