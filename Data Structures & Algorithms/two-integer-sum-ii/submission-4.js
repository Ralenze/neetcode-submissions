class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let choice = numbers.length-1

       
        let lPtr = 0;
        while(numbers[lPtr] + numbers[choice] != target){
            if (numbers[lPtr] + numbers[choice] > target){
                choice--;
            }
            else {
                lPtr++;
            }
        }
        return [lPtr+1, choice+1]        

    }
}
