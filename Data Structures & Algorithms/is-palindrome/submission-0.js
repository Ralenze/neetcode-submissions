class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        const isAlphaNumeric = (char) => /^[a-z0-9]$/i.test(char);

        let lPtr = 0;
        let rPtr = s.length-1;
        while (rPtr>lPtr){
            if(!isAlphaNumeric(s[rPtr])){
                rPtr--;
                continue;
            }
            if(!isAlphaNumeric(s[lPtr])){
                lPtr++;
                continue;
            }            
            if (s[lPtr].toUpperCase()!=s[rPtr].toUpperCase()){
                return false;
            }
            lPtr++;
            rPtr--;
        }
        return true;
    }
}
