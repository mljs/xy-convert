import { fromGeneral, fromXxyyArray, fromXyxyArray, fromXyxyObject } from './from';
import { toXxyyArray, toXyxyArray, toXyxyObject } from './to';

/**
 * Convert between different xy formats
 * @param {*} data - input set of points to parse
 * @param {object} [options] - input and output options
 * @param {string} [options.inputFormat] - input format, if not in list infers the kind
 * @param {string} [options.outputFormat = 'xxyyObject'] - output format
 * @return {*} - output set of points
 */
export default function xyConvert(data, options = {}) {
  const { inputFormat, outputFormat = 'xxyyObject' } = options;

  if (inputFormat === outputFormat) return data;

  let middleData;
  switch (inputFormat) {
    case 'xxyyArray':
      middleData = fromXxyyArray(data);
      break;

    case 'xyxyArray':
      middleData = fromXyxyArray(data);
      break;

    case 'xxyyObject':
      // this is the base case
      middleData = data;
      break;

    case 'xyxyObject':
      middleData = fromXyxyObject(data);
      break;

    default:
      middleData = fromGeneral(data);
      break;
  }

  switch (outputFormat) {
    case 'xxyyArray':
      return toXxyyArray(middleData);

    case 'xyxyArray':
      return toXyxyArray(middleData);

    case 'xxyyObject':
      return middleData;

    case 'xyxyObject':
      return toXyxyObject(middleData);

    default:
      throw new TypeError(`unknown output format ${outputFormat}`);
  }
}
