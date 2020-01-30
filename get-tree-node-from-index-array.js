/**
 *  eg getTreeNodeFromIndexArray(object,"[0,0,1]")
 *  sample object kept in 'object.js' file
 * */ 

let object = require('./object');

function getTreeNodeFromIndexArray(treeObject,stringifiedArray){
    let parsedArray = JSON.parse(stringifiedArray);
    
    function getNodeRecursively(obj, array){

        if(typeof(obj) === 'string' && array.length)
            return undefined;

        else{

            if(array.length){
                if(obj.length >= 0){
                    let newObj = obj[array[0]];
                    let newArray = array.slice(1);
                    return getNodeRecursively(newObj,newArray);
                }

                else{
                    let newObj = Object.values(obj)[0][array[0]];
                    let newArray = array.slice(1);
                    return getNodeRecursively(newObj, newArray);
                }
            }

            return obj;
        }
    }

    let node = getNodeRecursively(treeObject, parsedArray);
    return node;
}

module.exports = getTreeNodeFromIndexArray;