class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let exists = new Map();
        for (let i in nums){
            let val = exists.get(target-nums[i])
            if (val){
                return [parseInt(val), parseInt(i)]

            }
            exists.set(nums[i], i)

        }
    }
}
