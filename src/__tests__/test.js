import xyConvert from '..';

const xxyyArray = [[1, 1, 1], [2, 2, 2]];
const xyxyArray = [[1, 2], [1, 2], [1, 2]];
const xxyyObject = { x: [1, 1, 1], y: [2, 2, 2] };
const xyxyObject = [{ x: 1, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 2 }];

test('default case', () => {
  expect(xyConvert(xxyyArray)).toEqual(xxyyObject);
  expect(xyConvert(xyxyArray)).toEqual(xxyyObject);
  expect(xyConvert(xxyyObject)).toEqual(xxyyObject);
  expect(xyConvert(xyxyObject)).toEqual(xxyyObject);
  expect(xyConvert([])).toEqual({ x: [], y: [] });
});

test('input formats', () => {
  expect(xyConvert(xxyyArray, { inputFormat: 'xxyyArray' })).toEqual(xxyyObject);
  expect(xyConvert(xyxyArray, { inputFormat: 'xyxyArray' })).toEqual(xxyyObject);
  expect(xyConvert(xxyyObject, { inputFormat: 'xxyyObject' })).toEqual(xxyyObject);
  expect(xyConvert(xxyyObject, {
    inputFormat: 'xxyyObject',
    outputFormat: 'xxyyArray'
  })).toEqual(xxyyArray);
  expect(xyConvert(xyxyObject, { inputFormat: 'xyxyObject' })).toEqual(xxyyObject);
});

test('xxyyArray', () => {
  const options = { outputFormat: 'xxyyArray' };
  expect(xyConvert(xxyyArray, options)).toEqual(xxyyArray);
  expect(xyConvert(xyxyArray, options)).toEqual(xxyyArray);
  expect(xyConvert(xxyyObject, options)).toEqual(xxyyArray);
  expect(xyConvert(xyxyObject, options)).toEqual(xxyyArray);
});

test('xyxyArray', () => {
  const options = { outputFormat: 'xyxyArray' };
  expect(xyConvert(xxyyArray, options)).toEqual(xyxyArray);
  expect(xyConvert(xyxyArray, options)).toEqual(xyxyArray);
  expect(xyConvert(xxyyObject, options)).toEqual(xyxyArray);
  expect(xyConvert(xyxyObject, options)).toEqual(xyxyArray);
});

test('xxyyObject', () => {
  const options = { outputFormat: 'xxyyObject' };
  expect(xyConvert(xxyyArray, options)).toEqual(xxyyObject);
  expect(xyConvert(xyxyArray, options)).toEqual(xxyyObject);
  expect(xyConvert(xxyyObject, options)).toEqual(xxyyObject);
  expect(xyConvert(xyxyObject, options)).toEqual(xxyyObject);
});

test('xyxyObject', () => {
  const options = { outputFormat: 'xyxyObject' };
  expect(xyConvert(xxyyArray, options)).toEqual(xyxyObject);
  expect(xyConvert(xyxyArray, options)).toEqual(xyxyObject);
  expect(xyConvert(xxyyObject, options)).toEqual(xyxyObject);
  expect(xyConvert(xyxyObject, options)).toEqual(xyxyObject);
});

test('errors', () => {
  expect(() => xyConvert(xxyyArray, { outputFormat: 'bla' })).toThrow('unknown output format bla');
  expect(() => xyConvert('hi')).toThrow('unknown data format');
});
