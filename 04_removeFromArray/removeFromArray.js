const removeFromArray = function(array, ...elementsToRemove) {
    // let output = [];
    // let removalSet = new Set(elementsToRemove);
    // for (elt of array) {
    //     if (!removalSet.has(elt)) {
    //         output.push(elt);
    //     }
    // }
    // return output;

    return array.filter(elt => !elementsToRemove.includes(elt));
};

// Do not edit below this line
module.exports = removeFromArray;
