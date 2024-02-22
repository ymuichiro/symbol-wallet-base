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
/**
 *
 * @export
 * @interface Pagination
 */
export interface Pagination {
  /**
   *
   * @type {number}
   * @memberof Pagination
   */
  pageNumber: number;
  /**
   *
   * @type {number}
   * @memberof Pagination
   */
  pageSize: number;
}

/**
 * Check if a given object implements the Pagination interface.
 */
export function instanceOfPagination(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'pageNumber' in value;
  isInstance = isInstance && 'pageSize' in value;

  return isInstance;
}

export function PaginationFromJSON(json: any): Pagination {
  return PaginationFromJSONTyped(json, false);
}

export function PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pagination {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    pageNumber: json['pageNumber'],
    pageSize: json['pageSize'],
  };
}

export function PaginationToJSON(value?: Pagination | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    pageNumber: value.pageNumber,
    pageSize: value.pageSize,
  };
}