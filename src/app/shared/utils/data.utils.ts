/**
 * Simple sort comparator for example columns (for client-side sorting).
 *
 * @param {string | number} a  first value to compare
 * @param {string | number} b second value to compare
 * @param {boolean} isAsc should the comparation be carried out in acsending/descending order
 * @returns {number} negative number if a < b, positive if a > b, zero if a and b are equal
 */
export function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

/**
 * Calculate frequency of values for a given input type property.
 *
 * @template Item array item type
 * @param {Item[]} data source data to calculate the stats
 * @param {keyof Item} prop property of each item to be used for the calculation
 * @returns {Map<string, number>} map of value name and value frequency
 */
export function getValueStats<Item>(data: Item[], prop: keyof Item): Map<string, number> {
  const valueMap = new Map<string, number>();
  data.forEach((item: Item) => {
    const valueString = String(item[prop]);
    const currentValueCount = valueMap.get(valueString) ?? 0;
    valueMap.set(valueString, currentValueCount + 1);
  });
  return valueMap;
}
