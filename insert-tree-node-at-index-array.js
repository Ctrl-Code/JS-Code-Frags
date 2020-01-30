/**
 *  eg insertTreeNodeAtIndexArray(object,"[0,0,1]")
 *  sample object kept in 'object.js' file
 * */ 

const object = require('./object');
let getTreeNode = require('./get-tree-node-from-index-array');

function insertTreeNodeAtIndexArray(object, jsonArray, objectNode){
    let currentNode = getTreeNode(object, jsonArray)
    let type = typeof(currentNode);
    
    let objectType = (currentNode) => {
        currentNode[Object.keys(currentNode)[0]].push(objectNode);
    },
    stringType = (currentNode) => {
        // get it's parent and remove it from the place and put the object instead
        let parsedArray = JSON.parse(jsonArray);
        let indexToBeRemoved = parsedArray.splice(-1,1)[0];
        let parentNode = getTreeNode(object,JSON.stringify(parsedArray));
        let parentArray = Object.values(parentNode)[0];
        
        // creating a new Object to be inserted at it's place
        let newObject = {}
        newObject[currentNode] = [objectNode];

        // form new array
        let newArray = parentArray.map((item, index) =>{
            if(index === indexToBeRemoved){
                return newObject;
            }
            else{
                return item;
            }
        });

        // insert new array in element
        parentNode[Object.keys(parentNode)[0]] = newArray;
    }

    switch(type){
        case 'string': stringType(currentNode); break;
        case 'object': objectType(currentNode); break;
        default: ;
    }
}

module.exports = insertTreeNodeAtIndexArray;