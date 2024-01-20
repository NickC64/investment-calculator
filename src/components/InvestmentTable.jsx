import { calculateInvestmentResults } from "../util/investment"
import { formatter } from "../util/investment";

export default function InvestmentTable( { formInputs } ) {

    const investmentData = calculateInvestmentResults(formInputs);
    

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {investmentData.map((row, index) => 
                    <tr key={index}>
                        <td>{row.year}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(row.totalInterest)}</td>
                        <td>{formatter.format(row.investedCapital)}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}