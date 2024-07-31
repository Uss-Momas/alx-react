import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('Utils getFullYear', () => {
    it('verify current year', () => {
        const date = new Date()
        expect(getFullYear()).toEqual(date.getFullYear())
    });
});

describe('Utils getFooterCopy function Test', () => {
    it('verify when isIndex is true', () => {
        expect(getFooterCopy(true)).toMatch('Holberton School');
    });
    it('Verify when isIndex is False', () => {
        expect(getFooterCopy(false)).toMatch('Holberton School main dashboard');
    });
});

describe('Utils getLatestNotification function Test cases', () => {
    it('Verify the string returned', () => {
        expect(getLatestNotification()).toMatch('<strong>Urgent requirement</strong> - complete by EOD');
    });
});