/**
 * Некорректная постановка задачи, потому что не понятно, когда считать объект уникальным.
 * Либо когда у объектов разные ID, либо когда разные значения всех свойств.
 * 
 * Данная функция ниже, все таки полагается только на уникализацию по ID.
 */

function uniqueFilter(array) {
    const setIDs = new Set();
    return array.filter((item) => {
        if (setIDs.has(item.id)) {
            return false;
        }
        setIDs.add(item.id);
        return true;
    });
}

console.log(uniqueFilter([
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
]));