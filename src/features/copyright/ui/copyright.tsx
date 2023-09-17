import {getCurrentYear} from "../../../shared/utils/get-current-year.ts";

const Copyright = () => {

    const startYear = '2023'; // Year from which the copyright date begins
    const copyrightName = 'Alexander Bykovskiy'; // The name displayed in the copyright block
    const copyrightLink = 'https://github.com/AlexanderBykovskiy'; // The link to your GitHub

    const currentYear = getCurrentYear(); // Get current year function

    const yearData = currentYear === startYear ? startYear : startYear + '-' + currentYear; // Creation of data displayed in the copyright block

    return(
        <div className="text-right text-xs text-gray-400">
            Copyright &copy; {yearData}. <a href={copyrightLink} target="_blank" className="hover:underline">{copyrightName}</a>
        </div>
    )
}

export default Copyright;
