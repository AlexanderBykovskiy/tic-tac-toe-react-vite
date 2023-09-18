import {getStepLabelFromFieldIndex} from "./get-step-label-from-field-index.ts";


describe('Utils get-step-label-from-field-index:', () => {

    test('Testing getStepLabelFromFieldIndex function (A1)', () => {
        expect(getStepLabelFromFieldIndex(0)).toBe('A1');
    });
    test('Testing getStepLabelFromFieldIndex function (A2)', () => {
        expect(getStepLabelFromFieldIndex(1)).toBe('A2');
    });
    test('Testing getStepLabelFromFieldIndex function (A3)', () => {
        expect(getStepLabelFromFieldIndex(2)).toBe('A3');
    });
    test('Testing getStepLabelFromFieldIndex function (B1)', () => {
        expect(getStepLabelFromFieldIndex(3)).toBe('B1');
    });
    test('Testing getStepLabelFromFieldIndex function (B2)', () => {
        expect(getStepLabelFromFieldIndex(4)).toBe('B2');
    });
    test('Testing getStepLabelFromFieldIndex function (B3)', () => {
        expect(getStepLabelFromFieldIndex(5)).toBe('B3');
    });
    test('Testing getStepLabelFromFieldIndex function (C1)', () => {
        expect(getStepLabelFromFieldIndex(6)).toBe('C1');
    });
    test('Testing getStepLabelFromFieldIndex function (C2)', () => {
        expect(getStepLabelFromFieldIndex(7)).toBe('C2');
    });
    test('Testing getStepLabelFromFieldIndex function (C3)', () => {
        expect(getStepLabelFromFieldIndex(8)).toBe('C3');
    });

});
