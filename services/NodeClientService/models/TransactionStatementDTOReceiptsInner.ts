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
import type { BalanceChangeReceiptDTO } from './BalanceChangeReceiptDTO';
import {
  BalanceChangeReceiptDTOFromJSON,
  BalanceChangeReceiptDTOFromJSONTyped,
  BalanceChangeReceiptDTOToJSON,
} from './BalanceChangeReceiptDTO';
import type { BalanceTransferReceiptDTO } from './BalanceTransferReceiptDTO';
import {
  BalanceTransferReceiptDTOFromJSON,
  BalanceTransferReceiptDTOFromJSONTyped,
  BalanceTransferReceiptDTOToJSON,
} from './BalanceTransferReceiptDTO';
import type { InflationReceiptDTO } from './InflationReceiptDTO';
import {
  InflationReceiptDTOFromJSON,
  InflationReceiptDTOFromJSONTyped,
  InflationReceiptDTOToJSON,
} from './InflationReceiptDTO';
import type { MosaicExpiryReceiptDTO } from './MosaicExpiryReceiptDTO';
import {
  MosaicExpiryReceiptDTOFromJSON,
  MosaicExpiryReceiptDTOFromJSONTyped,
  MosaicExpiryReceiptDTOToJSON,
} from './MosaicExpiryReceiptDTO';
import type { NamespaceExpiryReceiptDTO } from './NamespaceExpiryReceiptDTO';
import {
  NamespaceExpiryReceiptDTOFromJSON,
  NamespaceExpiryReceiptDTOFromJSONTyped,
  NamespaceExpiryReceiptDTOToJSON,
} from './NamespaceExpiryReceiptDTO';
import type { ReceiptTypeEnum } from './ReceiptTypeEnum';
import { ReceiptTypeEnumFromJSON, ReceiptTypeEnumFromJSONTyped, ReceiptTypeEnumToJSON } from './ReceiptTypeEnum';

/**
 *
 * @export
 * @interface TransactionStatementDTOReceiptsInner
 */
export interface TransactionStatementDTOReceiptsInner {
  /**
   * Version of the receipt.
   * @type {number}
   * @memberof TransactionStatementDTOReceiptsInner
   */
  version: number;
  /**
   *
   * @type {ReceiptTypeEnum}
   * @memberof TransactionStatementDTOReceiptsInner
   */
  type: ReceiptTypeEnum;
  /**
   * Mosaic identifier.
   * @type {string}
   * @memberof TransactionStatementDTOReceiptsInner
   */
  mosaicId: string;
  /**
   * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
   * @type {string}
   * @memberof TransactionStatementDTOReceiptsInner
   */
  amount: string;
  /**
   * Address encoded using a 32-character set.
   * @type {string}
   * @memberof TransactionStatementDTOReceiptsInner
   */
  senderAddress: string;
  /**
   * Address encoded using a 32-character set.
   * @type {string}
   * @memberof TransactionStatementDTOReceiptsInner
   */
  recipientAddress: string;
  /**
   * Address encoded using a 32-character set.
   * @type {string}
   * @memberof TransactionStatementDTOReceiptsInner
   */
  targetAddress: string;
  /**
   * Mosaic identifier.
   * @type {string}
   * @memberof TransactionStatementDTOReceiptsInner
   */
  artifactId: string;
}

/**
 * Check if a given object implements the TransactionStatementDTOReceiptsInner interface.
 */
export function instanceOfTransactionStatementDTOReceiptsInner(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'version' in value;
  isInstance = isInstance && 'type' in value;
  isInstance = isInstance && 'mosaicId' in value;
  isInstance = isInstance && 'amount' in value;
  isInstance = isInstance && 'senderAddress' in value;
  isInstance = isInstance && 'recipientAddress' in value;
  isInstance = isInstance && 'targetAddress' in value;
  isInstance = isInstance && 'artifactId' in value;

  return isInstance;
}

export function TransactionStatementDTOReceiptsInnerFromJSON(json: any): TransactionStatementDTOReceiptsInner {
  return TransactionStatementDTOReceiptsInnerFromJSONTyped(json, false);
}

export function TransactionStatementDTOReceiptsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TransactionStatementDTOReceiptsInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    version: json['version'],
    type: ReceiptTypeEnumFromJSON(json['type']),
    mosaicId: json['mosaicId'],
    amount: json['amount'],
    senderAddress: json['senderAddress'],
    recipientAddress: json['recipientAddress'],
    targetAddress: json['targetAddress'],
    artifactId: json['artifactId'],
  };
}

export function TransactionStatementDTOReceiptsInnerToJSON(value?: TransactionStatementDTOReceiptsInner | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    version: value.version,
    type: ReceiptTypeEnumToJSON(value.type),
    mosaicId: value.mosaicId,
    amount: value.amount,
    senderAddress: value.senderAddress,
    recipientAddress: value.recipientAddress,
    targetAddress: value.targetAddress,
    artifactId: value.artifactId,
  };
}