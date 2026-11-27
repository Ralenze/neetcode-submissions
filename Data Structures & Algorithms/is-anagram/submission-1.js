class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let valA = new Map();
        for (let i in s){
            valA.set(s[i], valA.get(s[i]) ? valA.get(s[i])+1:1)
        }
        let incr = 0;
        for (let j in t){
            let val = valA.get(t[j]) ?? 0
            if (val <= 0) {
                return false;
            }
            valA.set(t[j], val -1)
            incr++;
        }
        if (incr < s.length){
            return false
        }
        return true;

    }
}
