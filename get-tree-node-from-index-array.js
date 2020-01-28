/**
 *  eg getTreeNodeFromIndexArray(object,"[0,0,1]")
 *  sample object kept in 'object.js' file
 * */ 

let object = require('./object');

function getTreeNodeFromIndexArray(treeObject,stringifiedArray){
    let parsedArray = JSON.parse(stringifiedArray);
    
    function getNodeRecursively(obj, array){
        if(array.length){
            if(obj.length >= 0){
                newObj = obj[array[0]];
                newArray = array.slice(1);
                return getNodeRecursively(newObj,newArray);
            }
            else{
                newObj = Object.values(obj)[0][array[0]];
                newArray = array.slice(1);
                return getNodeRecursively(newObj, newArray);
            }
        }
        else
            return obj;
    }

    let node = getNodeRecursively(treeObject, parsedArray);
    return node;
}

module.exports = getTreeNodeFromIndexArray;