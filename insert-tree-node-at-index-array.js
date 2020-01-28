/**
 *  eg insertTreeNodeAtIndexArray(object,"[0,0,1]")
 *  sample object kept in 'object.js' file
 * */ 

const object = require('./object');
let getTreeNode = require('./get-tree-node-from-index-array');

function insertTreeNodeAtIndexArray(object, jsonArray, objectNode){
    let parsedArray = JSON.parse(jsonArray);

    let insertionIndex = parsedArray.slice(-1)[0];
    let processingArray = parsedArray.slice(0,-1);

    let parentElement = getTreeNode(object, JSON.stringify(processingArray));

    let parentElementLength = parentElement.length;

    // insert the node
    switch(parentElementLength >= 0){
        case true: {
            // is array
            parentElement.splice(insertionIndex, 0, objectNode);
        } break;

        case false: {
            // is object
            Object.values(parentElement)[0].splice(insertionIndex, 0, objectNode);
        } break;
        
        default: ;
    }
    return undefined;
}

module.exports = insertTreeNodeAtIndexArray;