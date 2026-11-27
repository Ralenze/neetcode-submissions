class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let fullProduct = 1;
        // do a check for two 0's?
        let numZero = 0;
        let zeroPos = -1;
        let returnArr = new Array(nums.length).fill(0)

        for (let i in nums){
            if (nums[i]==0){
                numZero++;
                if (numZero==2){
                    return returnArr;
                }
                zeroPos=i;
            }
            else {
                fullProduct*=nums[i];
            }
        }

        if (numZero ==1){
            returnArr[zeroPos]=fullProduct;
            return returnArr;
        }
        for(let i in nums){
            returnArr[i] =(fullProduct/nums[i]);
        }
        return returnArr;
    }
}
