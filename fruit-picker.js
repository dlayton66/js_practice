import { notify } from './notifier';
import { order } from './grocer';

/**
 * @return void
 */
export function onSuccess() {
  notify({message: 'SUCCESS'});
}

/**
 * @return void
 */
export function onError() {
  notify({message: 'ERROR'});
}

/**
 * @param {GrocerQuery} query
 * @param {FruitPickerSuccessCallback} onSuccessCallback
 * @param {FruitPickerErrorCallback} onErrorCallback
 * @return void
 */
export function orderFromGrocer(query, onSuccess, onError) {
  order(query, onSuccess, onError);
}

/**
 * @param {string} variety
 * @param {number} quantity
 * @return void
 */
export function postOrder(variety, quantity) {
  orderFromGrocer({variety: variety, quantity: quantity}, onSuccess, onError);
}
