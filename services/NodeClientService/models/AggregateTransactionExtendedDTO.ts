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
import type { CosignatureDTO } from './CosignatureDTO';
import { CosignatureDTOFromJSON, CosignatureDTOFromJSONTyped, CosignatureDTOToJSON } from './CosignatureDTO';
import type { EmbeddedTransactionInfoDTO } from './EmbeddedTransactionInfoDTO';
import {
  EmbeddedTransactionInfoDTOFromJSON,
  EmbeddedTransactionInfoDTOFromJSONTyped,
  EmbeddedTransactionInfoDTOToJSON,
} from './EmbeddedTransactionInfoDTO';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
import { NetworkTypeEnumFromJSON, NetworkTypeEnumFromJSONTyped, NetworkTypeEnumToJSON } from './NetworkTypeEnum';

/**
 * Transaction to combine multiple transactions together.
 * @export
 * @interface AggregateTransactionExtendedDTO
 */
export interface AggregateTransactionExtendedDTO {
  /**
   * A number that allows uint 32 values.
   * @type {number}
   * @memberof AggregateTransactionExtendedDTO
   */
  size: number;
  /**
   * Entity's signature generated by the signer.
   * @type {string}
   * @memberof AggregateTransactionExtendedDTO
   */
  signature: string;
  /**
   * Public key.
   * @type {string}
   * @memberof AggregateTransactionExtendedDTO
   */
  signerPublicKey: string;
  /**
   * Entity version.
   * @type {number}
   * @memberof AggregateTransactionExtendedDTO
   */
  version: number;
  /**
   *
   * @type {NetworkTypeEnum}
   * @memberof AggregateTransactionExtendedDTO
   */
  network: NetworkTypeEnum;
  /**
   *
   * @type {number}
   * @memberof AggregateTransactionExtendedDTO
   */
  type: number;
  /**
   * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
   * @type {string}
   * @memberof AggregateTransactionExtendedDTO
   */
  maxFee: string;
  /**
   * Duration expressed in number of blocks.
   * @type {string}
   * @memberof AggregateTransactionExtendedDTO
   */
  deadline: string;
  /**
   *
   * @type {string}
   * @memberof AggregateTransactionExtendedDTO
   */
  transactionsHash: string;
  /**
   * Array of transaction cosignatures.
   * @type {Array<CosignatureDTO>}
   * @memberof AggregateTransactionExtendedDTO
   */
  cosignatures: Array<CosignatureDTO>;
  /**
   * Array of transactions initiated by different accounts.
   * @type {Array<EmbeddedTransactionInfoDTO>}
   * @memberof AggregateTransactionExtendedDTO
   */
  transactions: Array<EmbeddedTransactionInfoDTO>;
}

/**
 * Check if a given object implements the AggregateTransactionExtendedDTO interface.
 */
export function instanceOfAggregateTransactionExtendedDTO(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'size' in value;
  isInstance = isInstance && 'signature' in value;
  isInstance = isInstance && 'signerPublicKey' in value;
  isInstance = isInstance && 'version' in value;
  isInstance = isInstance && 'network' in value;
  isInstance = isInstance && 'type' in value;
  isInstance = isInstance && 'maxFee' in value;
  isInstance = isInstance && 'deadline' in value;
  isInstance = isInstance && 'transactionsHash' in value;
  isInstance = isInstance && 'cosignatures' in value;
  isInstance = isInstance && 'transactions' in value;

  return isInstance;
}

export function AggregateTransactionExtendedDTOFromJSON(json: any): AggregateTransactionExtendedDTO {
  return AggregateTransactionExtendedDTOFromJSONTyped(json, false);
}

export function AggregateTransactionExtendedDTOFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AggregateTransactionExtendedDTO {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    size: json['size'],
    signature: json['signature'],
    signerPublicKey: json['signerPublicKey'],
    version: json['version'],
    network: NetworkTypeEnumFromJSON(json['network']),
    type: json['type'],
    maxFee: json['maxFee'],
    deadline: json['deadline'],
    transactionsHash: json['transactionsHash'],
    cosignatures: (json['cosignatures'] as Array<any>).map(CosignatureDTOFromJSON),
    transactions: (json['transactions'] as Array<any>).map(EmbeddedTransactionInfoDTOFromJSON),
  };
}

export function AggregateTransactionExtendedDTOToJSON(value?: AggregateTransactionExtendedDTO | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    size: value.size,
    signature: value.signature,
    signerPublicKey: value.signerPublicKey,
    version: value.version,
    network: NetworkTypeEnumToJSON(value.network),
    type: value.type,
    maxFee: value.maxFee,
    deadline: value.deadline,
    transactionsHash: value.transactionsHash,
    cosignatures: (value.cosignatures as Array<any>).map(CosignatureDTOToJSON),
    transactions: (value.transactions as Array<any>).map(EmbeddedTransactionInfoDTOToJSON),
  };
}