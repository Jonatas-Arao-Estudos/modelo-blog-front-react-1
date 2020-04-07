export function replaceSpecialChars(str){
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/([^\w]+|\s+)/g, '-')
        // eslint-disable-next-line no-useless-escape
        .replace(/\-\-+/g, '-')
        .replace(/(^-+|-+$)/, '');
}