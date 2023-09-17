import {getStepLabelFromFieldIndex} from "./get-step-label-from-field-index.ts";

test('Testing getStepLabelFromFieldIndex function', () => {
    expect(getStepLabelFromFieldIndex(0)).toBe('A1');
    expect(getStepLabelFromFieldIndex(1)).toBe('A2');
    expect(getStepLabelFromFieldIndex(2)).toBe('A3');
    expect(getStepLabelFromFieldIndex(3)).toBe('B1');
    expect(getStepLabelFromFieldIndex(4)).toBe('B2');
    expect(getStepLabelFromFieldIndex(5)).toBe('B3');
    expect(getStepLabelFromFieldIndex(6)).toBe('C1');
    expect(getStepLabelFromFieldIndex(7)).toBe('C2');
    expect(getStepLabelFromFieldIndex(8)).toBe('C3');
});

