function myEach(collection, callbackFunc) {
    let array;
    if (Array.isArray(collection) == false) {
        array = Object.values(collection)
    }
    else {
        array = collection
    }
    for (const val of array) {
        callbackFunc(val)
    }
    return collection
}


function myMap(collection, callbackFunc) {
    let newVals = [];
    let array;
    if (Array.isArray(collection) == false) {
        array = Object.values(collection)
    }
    else {
        array = collection
    }
    
    for (const val of array) {
        newVals.push(callbackFunc(val))
    }    
    return newVals
}

function myReduce(collection, callbackFunc, start) {
    let answer;
    let array;
    if (Array.isArray(collection) == false) {
        array = Object.values(collection)
    }
    else {
        array = collection
    }
    
    if (start) {
        answer = start;
        for (let i = 0; i < array.length; i++) {
        answer = callbackFunc(answer, array[i])
        }
    }
    else {
        answer = array[0]
        for (let i = 1; i < array.length; i++) {
            answer = callbackFunc(answer, array[i])
        }
    }
    return answer
}


function myFind(collection, booleanFunc) {
    let pass;
    let array;
    if (Array.isArray(collection) == false) {
        array = Object.values(collection)
    }
    else {
        array = collection
    }

    for (const val of array) {
        if (booleanFunc(val) == true) {
            pass = val
            break
        }
    }
    return pass
}


function myFilter(collection, booleanFunc) {
    let pass = [];
    let array;
    if (Array.isArray(collection) == false) {
        array = Object.values(collection)
    }
    else {
        array = collection
    }

    for (const val of array) {
        if (booleanFunc(val) == true) {
            pass.push(val)
        }
    }
    return pass
}


function mySize(collection) {

    let array;
    if (Array.isArray(collection) == false) {
        array = Object.values(collection)
    }
    else {
        array = collection
    }
    return array.length
}

function myFirst(collection, int) {
    let array;
    let value;
    if (Array.isArray(collection) == false) {
        array = Object.values(collection)
    }
    else {
        array = collection
    }

    if (int) {
        value = array.slice(0, int)
    }
    else {
        value = array[0]
    }
    return value
}

function myLast(collection, int) {
    let array;
    let value;
    if (Array.isArray(collection) == false) {
        array = Object.values(collection)
    }
    else {
        array = collection
    }

    if (int) {
        value = array.slice(-int)
    }
    else {
        value = array[array.length -1]
    }
    return value
}

function myKeys(obj) {
    let keys = Object.keys(obj)
    return keys
}

function myValues(obj) {
    let values = Object.values(obj)
    return values
}