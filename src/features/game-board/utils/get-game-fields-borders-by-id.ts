export const getGameFieldsBordersById = (index: number) => {
    const borderStylesArr = [];
    if (index === 0 || index === 3 || index === 6) borderStylesArr.push('border-r');
    if (index === 0 || index === 1 || index === 2) borderStylesArr.push('border-b');
    if (index === 2 || index === 5 || index === 8) borderStylesArr.push('border-l');
    if (index === 6 || index === 7 || index === 8) borderStylesArr.push('border-t');
    return borderStylesArr.join(' ');
}
