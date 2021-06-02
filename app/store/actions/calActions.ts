import * as types from './types';
export function calculate(data: string) {
  return {
    type: types.CALCULATE,
    data,
  };
}
export function updateCalValue(data: string) {
  return {
    type: types.UPDATE_VALUE,
    data,
  };
}
