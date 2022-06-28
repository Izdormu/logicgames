function PercentOfNumbers(numofarr,maxnum) {
    const arrWinners = []
    for( i=0 ;i<100 ;i++){
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
    //   console.log(counters)

    const percents = {}
    for (let count in counters) {
        percents[count] = counters[count] / numofarr * 100 + "%"
    }
    //   console.log(percents)

    let max = 0;
    let maxKey = "";
    
    for(let count in counters){
      if(counters[count]> max){
        max = counters[count]
        maxKey= count
      
      }
    } 
      console.log(maxKey)
      console.log(max)
    
    
    arrWinners.push(maxKey)

    }
    winners = arrWinners.map(Number)
    winTimes = {}
    console.log(winners)
    

    for (let num of winners) {
        if (winTimes[num] === undefined) {
            winTimes[num] = 1
        } else {
            winTimes[num]++;
        }
    }
     console.log(winTimes)


    let winnerCount = 0;
    let winner = "";
   
    for(let win in winTimes){
        if(winTimes[win]> winnerCount){
         winnerCount =winTimes[win]
         winner= win
        
        }
      } 
       console.log(winnerCount)
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
PercentOfNumbers(10000,5)
