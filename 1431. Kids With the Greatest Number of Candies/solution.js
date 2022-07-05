var kidsWithCandies = function(candies, extraCandies) {
    let ans=[];
    let maxValue= Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        if(candies[i]+extraCandies>=maxValue){
            ans.push(true);
        } else{
            ans.push(false);
        }}
        return ans;
    };