
export const toCamelCase = (text: string): string => {
    return text
        .replace(/^\w|[A-Z]|\b\w/g, (word, index) =>
            index === 0 ? word.toLowerCase() : word.toUpperCase()
        )
        .replace(/\s+/g, '');
}
