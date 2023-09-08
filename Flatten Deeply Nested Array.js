/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    const res = [];

    function helper(arr,depth) {
        for(const val of arr) {
            if(typeof(val) === 'object' && depth < n) {
                helper(val,depth + 1);
            } else {
                res.push(val);
            }
        }
        return res;
    }
    return helper(arr,0);
};
