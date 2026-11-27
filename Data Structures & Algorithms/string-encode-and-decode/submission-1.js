class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newString = "";
        for (let i in strs){
            newString+= (strs[i].length).toString();
            if(i!=strs.length-1)
            {newString+="+";
            }
        }
        newString+= "X";
        for (let i in strs){
            newString+=strs[i];
        }
        return newString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // nothing in original string, return empty
        if (str == "X") {
            return []
        }
        let arr=[];
        let currIndex = 0;
        let prefix="";
        let suffix = "";
        for(let i = 0; i < str.length;i++){
            if (str[i]=="X"){
                prefix=str.slice(0,i);
                suffix=str.slice(i+1);
                break;
            }
        }
        let prefixArr = prefix.split("+").map((item) => parseInt(item));
        for(let i in prefixArr){

            arr.push(suffix.slice(currIndex,currIndex + prefixArr[i]))
            currIndex+=prefixArr[i]
        }
        return arr;

    }
}
