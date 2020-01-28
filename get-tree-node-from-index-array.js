let obj = [
    {
        "North India":[
            {'Haryana': ['Sonipat','Panipat']},
            'Punjab',
        ]
    },
    {
        "South India":[
            'Tamil Nadu',
            {
                'Karnataka':[{'Kormangla': ['North',{'South':['1st Main','2nd Main']}]}, 'BTM']
            },
        ]
    },
    'East India',
    {
        'West India': [
            {
                'GJ': [{"Gandhinagar":['area-1','area-2']}]   
            }
        ]
    }
];

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

console.log(getTreeNodeFromIndexArray(obj,'[0,0,0]'));