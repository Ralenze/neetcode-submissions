class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let length = heights.length - 1;
        let lPos = 0
        let rPos = length;
        let maxPos = 0;
        let currMax= 0;
        while (lPos<rPos){
            
        currMax = Math.min(heights[lPos],heights[rPos]) * length;
        if (currMax > maxPos){
            maxPos = currMax;
        }
        if (heights[lPos] > heights[rPos]){
            rPos--;
        }
        else {
            lPos++;
        }
        length--;
        }
            return maxPos

    }

}
