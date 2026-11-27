class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dupCheck = new Map();
        for (let i in nums ){
            if (dupCheck.get(nums[i]) > 0){
                return true;
            }
            dupCheck.set(nums[i], 1);
        }
        return false;
    }
}
