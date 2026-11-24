class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0){
            return 0;
        }
        let maxBiggest = 0;
        let currBiggest = 1;
        let exists = new Map();
        let checked = new Map();
        for (let i = 0; i < nums.length; i++){
            exists.set(nums[i],1);
            checked.set(nums[i], false);
            

        }
        for (let i = 0; i < nums.length; i++){
            if (checked.get(nums[i])){
                continue;
            }
            let val = nums[i];
            let prev = val-1;
            while (exists.get(prev)==1){
                val = prev;
                prev--;
            }
            currBiggest = 1;
            let next = val+1;
            while (exists.get(next) ==1) {
                currBiggest++;
                checked.set(val, true)

                val = next;
                next ++;
            }
            if (currBiggest > maxBiggest) {
                maxBiggest = currBiggest;
            }
        }
        return maxBiggest;
    }
}
