
const genArr = (length , maxNumber) => {
    const numbers = Array(length).map(()=> Math.round(Math.random()*max))
}


function PercentOfNumbers() {
    const numbers = [...new Array(1000)].map(()=> Math.round(Math.random()*5))
    console.log (numbers)
    let counters = {}

    for (let num of numbers) {
        if (counters[num] === undefined){
            counters[num] = 1
        } else {
            counters[num]++;
        }
    }
    console.log(counters)

    const percents = {}

    for (let count in counters) {
        percents[count] = counters[count] / 1000 * 100 + "%"
    }
    console.log(percents)


}
PercentOfNumbers()





