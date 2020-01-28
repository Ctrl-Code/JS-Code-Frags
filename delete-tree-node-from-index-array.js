/**
 *  eg deleteTreeNodeFromIndexArray(object,"[0,0,1]")
 *  sample object kept in 'object.js' file
 * */ 

let getTreeNode = require('./get-tree-node-from-index-array');
let object = require('./object');

function deleteTreeNodeFromIndexArray(object, jsonArray){
    let parsedArray = JSON.parse(jsonArray);

    let indexToBeDeleted = parsedArray.slice(-1)[0];
    let processingArray = parsedArray.slice(0,-1);

    let parentElement = getTreeNode(object, JSON.stringify(processingArray));

    let parentElementLength = parentElement.length;

    // delete the node
    switch(parentElementLength >= 0){
        case true: {
            // is array
            parentElement.splice(indexToBeDeleted,1);
        } break;

        case false: {
            // is object
            Object.values(parentElement)[0].splice(indexToBeDeleted,1);
        }
        default: ;
    }
    return undefined;
}

module.exports = deleteTreeNodeFromIndexArray;