/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Pagination } from './Pagination';
import { PaginationFromJSON, PaginationFromJSONTyped, PaginationToJSON } from './Pagination';
import type { TransactionInfoDTO } from './TransactionInfoDTO';
import {
  TransactionInfoDTOFromJSON,
  TransactionInfoDTOFromJSONTyped,
  TransactionInfoDTOToJSON,
} from './TransactionInfoDTO';

/**
 *
 * @export
 * @interface TransactionPage
 */
export interface TransactionPage {
  /**
   * Array of transactions.
   * @type {Array<TransactionInfoDTO>}
   * @memberof TransactionPage
   */
  data: Array<TransactionInfoDTO>;
  /**
   *
   * @type {Pagination}
   * @memberof TransactionPage
   */
  pagination: Pagination;
}

/**
 * Check if a given object implements the TransactionPage interface.
 */
export function instanceOfTransactionPage(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'data' in value;
  isInstance = isInstance && 'pagination' in value;

  return isInstance;
}

export function TransactionPageFromJSON(json: any): TransactionPage {
  return TransactionPageFromJSONTyped(json, false);
}

export function TransactionPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPage {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: (json['data'] as Array<any>).map(TransactionInfoDTOFromJSON),
    pagination: PaginationFromJSON(json['pagination']),
  };
}

export function TransactionPageToJSON(value?: TransactionPage | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: (value.data as Array<any>).map(TransactionInfoDTOToJSON),
    pagination: PaginationToJSON(value.pagination),
  };
}