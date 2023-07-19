const getLongestSubstringLen = (s1,s2,n1,n2,mem,len) => {
    if(n1<=0 || n2<=0){
        return len;
    }
    if(mem[n1-1][n2-1]!==-1){
        return mem[n1-1][n2-1];
    }
    let poss1 = getLongestSubstringLen(s1,s2,n1-1,n2,mem,0)
    let poss2 = getLongestSubstringLen(s1,s2,n1,n2-1,mem,0)
    let poss3 = 0
    if(s1[n1-1]==s2[n2-1]){
        poss3 = 1 + getLongestSubstringLen(s1,s2,n1-1,n2-1,mem,len)
    }
    mem[n1-1][n2-1] = Math.max(poss1,poss2,poss3);
    return mem[n1-1][n2-1];
}

const getDistance = (string1,string2) => {
    let n1 = string1.length;
    let n2 = string2.length;
    let mem = new Array(n1).fill(new Array(n2).fill(-1));
    let res = getLongestSubstringLen(string1,string2,n1,n2,mem,0)
    console.log(mem)
    return res
}

console.log("hello")
console.log(getDistance("hi","hello"))
console.log(getDistance("hi","hi"))
console.log(getDistance("aytala","sakkathala"))
export {getDistance};
