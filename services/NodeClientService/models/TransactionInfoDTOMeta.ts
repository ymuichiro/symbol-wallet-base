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
import type { EmbeddedTransactionMetaDTO } from './EmbeddedTransactionMetaDTO';
import {
  EmbeddedTransactionMetaDTOFromJSON,
  EmbeddedTransactionMetaDTOFromJSONTyped,
  EmbeddedTransactionMetaDTOToJSON,
} from './EmbeddedTransactionMetaDTO';
import type { TransactionMetaDTO } from './TransactionMetaDTO';
import {
  TransactionMetaDTOFromJSON,
  TransactionMetaDTOFromJSONTyped,
  TransactionMetaDTOToJSON,
} from './TransactionMetaDTO';

/**
 *
 * @export
 * @interface TransactionInfoDTOMeta
 */
export interface TransactionInfoDTOMeta {
  /**
   * Height of the blockchain.
   * @type {string}
   * @memberof TransactionInfoDTOMeta
   */
  height: string;
  /**
   *
   * @type {string}
   * @memberof TransactionInfoDTOMeta
   */
  hash: string;
  /**
   *
   * @type {string}
   * @memberof TransactionInfoDTOMeta
   */
  merkleComponentHash: string;
  /**
   * Transaction index within the aggregate.
   * @type {number}
   * @memberof TransactionInfoDTOMeta
   */
  index: number;
  /**
   * Number of milliseconds elapsed since the creation of the nemesis block. This value can be converted to epoch time by adding the network's 'epochAdjustment'.
   * @type {string}
   * @memberof TransactionInfoDTOMeta
   */
  timestamp?: string;
  /**
   * Fee multiplier applied to transactions contained in block.
   * @type {number}
   * @memberof TransactionInfoDTOMeta
   */
  feeMultiplier?: number;
  /**
   *
   * @type {string}
   * @memberof TransactionInfoDTOMeta
   */
  aggregateHash: string;
  /**
   * Identifier of the aggregate transaction.
   * @type {string}
   * @memberof TransactionInfoDTOMeta
   */
  aggregateId: string;
}

/**
 * Check if a given object implements the TransactionInfoDTOMeta interface.
 */
export function instanceOfTransactionInfoDTOMeta(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'height' in value;
  isInstance = isInstance && 'hash' in value;
  isInstance = isInstance && 'merkleComponentHash' in value;
  isInstance = isInstance && 'index' in value;
  isInstance = isInstance && 'aggregateHash' in value;
  isInstance = isInstance && 'aggregateId' in value;

  return isInstance;
}

export function TransactionInfoDTOMetaFromJSON(json: any): TransactionInfoDTOMeta {
  return TransactionInfoDTOMetaFromJSONTyped(json, false);
}

export function TransactionInfoDTOMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionInfoDTOMeta {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    height: json['height'],
    hash: json['hash'],
    merkleComponentHash: json['merkleComponentHash'],
    index: json['index'],
    timestamp: !exists(json, 'timestamp') ? undefined : json['timestamp'],
    feeMultiplier: !exists(json, 'feeMultiplier') ? undefined : json['feeMultiplier'],
    aggregateHash: json['aggregateHash'],
    aggregateId: json['aggregateId'],
  };
}

export function TransactionInfoDTOMetaToJSON(value?: TransactionInfoDTOMeta | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    height: value.height,
    hash: value.hash,
    merkleComponentHash: value.merkleComponentHash,
    index: value.index,
    timestamp: value.timestamp,
    feeMultiplier: value.feeMultiplier,
    aggregateHash: value.aggregateHash,
    aggregateId: value.aggregateId,
  };
}