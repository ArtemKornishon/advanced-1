export default function orderByProps(obj, props) {
    const arr = []
    const objCopy = {...obj};

    for (let i = 0; i < props.length; i +=1) {
        const key1 = props[i];
        delete objCopy[key1]
        arr.push({key: key1, value:obj[key1]});
    }

    const sortedArr = (Object.keys(objCopy)).sort();
    for (let i = 0; i < sortedArr.length; i += 1) {
        arr.push({key: sortedArr[i], value: obj[sortedArr[i]]})
    }
    return arr
};
