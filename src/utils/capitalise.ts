/**
 *
 * @param word string
 * @returns capitalised string
 */

const capitalise = (word: string) => word.charAt(0).toUpperCase() + word?.slice(1);

export default capitalise;
