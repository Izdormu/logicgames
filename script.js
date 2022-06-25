function PercentOfNumbers(numofarr,maxnum) {
    const arrWinners = []
    for( i=1 ;i<1000 ;i++){
    const numbers = [...new Array(numofarr)].map(() => Math.round(Math.random() * maxnum))
    // console.log(numbers)
    const counters = {}

    for (let num of numbers) {
        if (counters[num] === undefined) {
            counters[num] = 1
        } else {
            counters[num]++;
        }
    }
    // console.log(counters)

    const percents = {}
    for (let count in counters) {
        percents[count] = counters[count] / numofarr * 100 + "%"
    }
    // console.log(percents)

    let max = 0;
    let maxKey = "";
    
    for(let count in counters){
      if(counters[count]> max){
        max = counters[count]
        maxKey= count
      
      }
    } 
    // console.log(maxKey)
    // console.log(max)
    
    
    arrWinners.push(maxKey)

    }
    winners = arrWinners.map(Number)
    winner = Math.max.apply(Math,winners)
    console.log(arrWinners)
    console.log(winner)


//   for( i=1 ;i<10 ;i++){
//    firstwin = 0
//    keys = Object.keys(counters)
//    if (counters[0] > counters[1]){
    
//     console.log("0 win")
//    }else{
//     console.log("1 win")
//    }
//    console.log(firstwin)
//   }

}
PercentOfNumbers(10000,100)
