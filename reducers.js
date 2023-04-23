'use strict';
// Don't add or change anything above this comment.

/**
 * See assignment description for the requirements
 */
function reducer1(previousValue, currentValue) {

   if (typeof previousValue !== 'number') {
        previousValue = 0;
   }  

   if (typeof currentValue === 'number') {
        return previousValue + currentValue;
   } 
   return previousValue;
};

/**
 * See assignment description for the requirements
 */
function reducer2(previousValue, currentValue) { 

    if (typeof currentValue !== 'number' || typeof previousValue !== 'number') {
        throw new TypeError('My error message');
    } 
    return previousValue + currentValue;  
};

// Don't add or change anything below this comment.
module.exports = { reducer1, reducer2 };