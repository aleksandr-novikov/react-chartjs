export const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const COLORS = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba'
];

export const AGES = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65];

function generateRandomIntegerInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
   Generates comparable Chart.js data
*/
export function generateSalesChartData() {
    return {
        labels: MONTHS,
        datasets: [{
            label: 'Sales',
            backgroundColor: COLORS[generateRandomIntegerInRange(0, COLORS.length)],
            data: MONTHS.map(d => generateRandomIntegerInRange(10, 100))
        }]
    };
};

/*
   Generates distributed Chart.js data
*/
export function generateSalaryChartData() {
    const baseSalary = 40000;
    let salary = baseSalary;
    return {
        datasets: [{
            label: 'Age / Average Salary',
            backgroundColor: COLORS[generateRandomIntegerInRange(0, COLORS.length)],
            data: AGES.map((age, i) => {
                salary = age < 45 ? Math.floor(salary + 20000 * Math.random()) : Math.floor(salary - 20000 * Math.random());
                return { x: age, y: salary, r: (salary / baseSalary) * 5 }
            })
        }]
    };
};