let ourObject = [
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
                'Karnataka':[{'Kormangla': ['North',{'South':['1st Main','2nd Main']}]}, 'Domlur']
            },
        ]
    },
    'East India',
];

// get tabed string
function getTabedString(str,tab){
    tab = tab * 5;
    let returnStr = "";
    for(i=0;i!=tab;++i){
        returnStr = returnStr + " ";
    }
    returnStr = returnStr + str;
    return returnStr;
}

function traverse(obj,tabs,incrementTab=1){
    if(incrementTab)
        ++tabs;

    obj.forEach( item=>{
        /**
         * item could be of 2 types
         *  string
         *  object
         */

        switch(typeof item){
            case 'string': console.log(getTabedString(item,tabs)); break;
            case 'object': {
                switch(String(item.length >= 0)){
                    case 'true':{
                        
                        // array
                        traverse(item,tabs,incrementTab = 0);

                    }; break;

                    case 'false': {
                        
                        // object
                        let key = Object.keys(item);
                        let values = Object.values(item);
                        console.log(getTabedString(key,tabs))
                        traverse(values,tabs);

                    }; break;
                    default: ;
                }
            }; break;
            default : ;
        }
    })
}

traverse(ourObject,-1);