// Convert number index to step label (A3, B1, C2...)
export const getStepLabelFromStepIndex = (stepIndex: number): string => {

    const stepLabelArr = [];

    // Add latter
    if (stepIndex < 3) {
        stepLabelArr.push('A');
    } else if (stepIndex < 6) {
        stepLabelArr.push('B');
    } else if (stepIndex < 9) {
        stepLabelArr.push('C');
    }

    // Add number
    if (stepIndex % 3 === 0) {
        stepLabelArr.push('1');
    } else if (stepIndex % 3 === 1) {
        stepLabelArr.push('2');
    } else if (stepIndex % 3 === 2) {
        stepLabelArr.push('3');
    }

    return stepLabelArr.join('');
}
