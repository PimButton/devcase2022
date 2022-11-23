export const getTrimmedString = (str: string, length: number) => {
    if(str.length > length) {
        return {
            text: `${str.substring(0, length)}...`,
            isTrimmed: true
        }
    }
    return {
        text: str,
        isTrimmed: false
    }
}