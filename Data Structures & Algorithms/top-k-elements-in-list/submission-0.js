class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        let listOfNums = [];
        let biggestVal= 0;
        for (let i in nums){
            freqMap.set(nums[i], (freqMap.get(nums[i]) ?? 0) + 1);
            if (freqMap.get(nums[i]) == 1){
                listOfNums.push(nums[i])

            }
            if (freqMap.get(nums[i]) > biggestVal){
                biggestVal = freqMap.get(nums[i]);
            }
        }
    
        let arr = Array.from({ length: biggestVal+1 }, () => []);
        for (let i in listOfNums){
            let frq = freqMap.get(listOfNums[i]);
            arr[frq].push(listOfNums[i])
        }
        let kArr = [];
        for(let i = arr.length-1; i >= 0; i--){
            kArr = kArr.concat(arr[i]);
            if(kArr.length >=k){
                break;
            }
        }
        return kArr.slice(0,k)

        // now we have a unique list of nums. 
        // we can generate a minHeap at this point

        
        
    }
}
