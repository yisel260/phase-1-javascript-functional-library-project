function myEach(collection, callBack) {

        if (Array.isArray(collection)) {
           for (let i= 0; i< collection.length;i++){
            callBack(collection[i]);
           }
        }

        else {
            for (let key in collection){
                callBack(collection [key]);
            }
            

    }
    return collection;
    
  }


    function myMap(collection, callBack) {
      const newArray = [];
    
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newArray.push(callBack(collection[i]));
        }
      } else {
        const copyOfCollectionObj = Object.assign({}, collection);
    
        for (let key in copyOfCollectionObj) {
          newArray.push(callBack(copyOfCollectionObj[key]));
        }
      }
    
      return newArray;
    }
    
    

    function myReduce (collection, callBack, acc = collection[0]){

        let newTotal = acc;

        if (Array.isArray(collection)) {
            for (let i= 0; i< collection.length;i++){
             newTotal += callBack(newTotal,collection[i], collection);
            }
         }
 
         else {
           const  ObjectValuesArray = Object.values (collection);

             for (let value in ObjectValuesArray){
                 newTotal +=  callBack(newTotal,ObjectValuesArray [value], ObjectValuesArray);
             }
             
     }
     return newTotal;

    }

    function myReduce(collection, callBack, acc) {
        let newCollection = convertCollection(collection)

if (!acc){
    acc = newCollection[0]
    newCollection = newCollection.slice(1)
}
             
          for (let i = 0; i < newCollection.length; i++) {
            acc = callBack(acc, newCollection[i],newCollection);
          }
      
        return acc;
      }

function convertCollection(collection){
    if (Array.isArray(collection)) {

        return collection.slice()

    }
    else {
        return Object.values(collection)
    }
    

}
      function myFind ( collection, predicate ) {

        if (Array.isArray(collection)){

            for(let value of collection ){
                if (predicate (value)) {
                    return value 
                }
            }
        }  
        
        else {
            const objectValuesArray = Object.values(collection);
        
            for (let value in objectValuesArray) {
                if (predicate (value)) {
                    return value 
            }
          }
      }
    }

    function myFilter (collection, predicate){

        let filteredArray = []
        
        if (Array.isArray(collection)){

            for(let value of collection ){
                if (predicate (value)) {
                    filteredArray.push(value)
                }
            }
        }  
        
        else {
            const objectValuesArray = Object.values(collection);
        
            for (let value in objectValuesArray) {
                if (predicate (value)) {
                    filteredArray.push(value)
            }
          }
      }

      return filteredArray
    }

    function mySize (collection){

        let count = 0;

        if (Array.isArray(collection)){

                for (let item in collection) {
                  count++;
                }
                return count;
        }
        else {

            const objectValuesArray = Object.keys(collection)

                for (let key in objectValuesArray) {
                  count++;
                }

            return count 

        }
    } 

    function myFirst(array, n  =  0){

        let newArray = []

        if (n != 0 ) {
        
            for (let i = 0 ; i < n; i++){
                newArray.push(array[i])
            }
            return newArray

        } 
        else {
            return array[0]
        }

    } 

    function myLast (array, n = false  ) {
        return n ? array.slice(array.length - n , array.length): array[array.length-1]

}

function myKeys(object){

    let keys = [];
    for (let key in object) {
    keys.push(key)
    }
    return keys 
    
}


function myValues ( object){
    let values = [];
    for (let key in object) {
    values.push(object[key]);
    }
  return values
}
