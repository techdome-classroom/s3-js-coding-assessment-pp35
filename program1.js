/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
   
    const stack = [];
    
   
    for (let char of s) {
        if (brackets[char]) {
            
            const bracket = stack.length > 0 ? stack.pop() : '#'  
            if (brackets[char] !== bracket) {
                return false 
            }
        } else {
            
            stack.push(char)
        }
    }
    
    
    return stack.length === 0
};

module.exports = { isValid }
//console.log(isValid("()")); 

