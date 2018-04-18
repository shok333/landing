export function getIndexUsingId(arrayOfObject, id, idVariableName = 'authorId') { //Массив должен быть отсортирован по id по возрастанию
    if (arrayOfObject.length === 0) {
        return -1;
    }

    let
        targetId = -1,
        mid, low = 0,
        high = arrayOfObject.length-1;

    while (arrayOfObject[low][idVariableName] < id && arrayOfObject[high][idVariableName] > id)
    {
        mid = low + Math.floor( ((id-arrayOfObject[low][idVariableName])*(high-low))/(arrayOfObject[high][idVariableName]-arrayOfObject[low][idVariableName]) );

        if (arrayOfObject[mid][idVariableName] < id) {
            low = mid + 1;
        } else if (arrayOfObject[mid][idVariableName] > id) {
            high = mid-1;
        }
        else {
            targetId = mid;
            break;
        }
    }

    if (arrayOfObject[low][idVariableName] === id) {
        targetId = low;
    }
    else if (arrayOfObject[high][idVariableName] === id) {
        targetId = high;
    }

    return targetId;
};