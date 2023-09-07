import {getCurrentYear} from "./utils.ts";

export default function Copyright () {

    const startYear = '2023'; // Year from which the copyright date begins
    const copyrightName = 'Alexander Bykovskiy'; // The name displayed in the copyright block

    const currentYear = getCurrentYear(); // Get current year function

    const yearData = currentYear === startYear ? startYear : startYear + '-' + currentYear; // Creation of data displayed in the copyright block

    return(
        <div className="absolute bottom-2 right-4 text-xs text-gray-300">
            Copyright &copy; {yearData}. {copyrightName}
        </div>
    )
}
