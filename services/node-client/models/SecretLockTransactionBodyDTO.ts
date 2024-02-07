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
import type { LockHashAlgorithmEnum } from './LockHashAlgorithmEnum';
import {
  LockHashAlgorithmEnumFromJSON,
  LockHashAlgorithmEnumFromJSONTyped,
  LockHashAlgorithmEnumToJSON,
} from './LockHashAlgorithmEnum';

/**
 *
 * @export
 * @interface SecretLockTransactionBodyDTO
 */
export interface SecretLockTransactionBodyDTO {
  /**
   * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
   * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA.
   * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
   *
   * @type {string}
   * @memberof SecretLockTransactionBodyDTO
   */
  recipientAddress: string;
  /**
   *
   * @type {string}
   * @memberof SecretLockTransactionBodyDTO
   */
  secret: string;
  /**
   * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
   * is used instead of the real mosaic identifier.
   *
   * @type {string}
   * @memberof SecretLockTransactionBodyDTO
   */
  mosaicId: string;
  /**
   * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
   * @type {string}
   * @memberof SecretLockTransactionBodyDTO
   */
  amount: string;
  /**
   * Duration expressed in number of blocks.
   * @type {string}
   * @memberof SecretLockTransactionBodyDTO
   */
  duration: string;
  /**
   *
   * @type {LockHashAlgorithmEnum}
   * @memberof SecretLockTransactionBodyDTO
   */
  hashAlgorithm: LockHashAlgorithmEnum;
}

/**
 * Check if a given object implements the SecretLockTransactionBodyDTO interface.
 */
export function instanceOfSecretLockTransactionBodyDTO(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'recipientAddress' in value;
  isInstance = isInstance && 'secret' in value;
  isInstance = isInstance && 'mosaicId' in value;
  isInstance = isInstance && 'amount' in value;
  isInstance = isInstance && 'duration' in value;
  isInstance = isInstance && 'hashAlgorithm' in value;

  return isInstance;
}

export function SecretLockTransactionBodyDTOFromJSON(json: any): SecretLockTransactionBodyDTO {
  return SecretLockTransactionBodyDTOFromJSONTyped(json, false);
}

export function SecretLockTransactionBodyDTOFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SecretLockTransactionBodyDTO {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    recipientAddress: json['recipientAddress'],
    secret: json['secret'],
    mosaicId: json['mosaicId'],
    amount: json['amount'],
    duration: json['duration'],
    hashAlgorithm: LockHashAlgorithmEnumFromJSON(json['hashAlgorithm']),
  };
}

export function SecretLockTransactionBodyDTOToJSON(value?: SecretLockTransactionBodyDTO | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    recipientAddress: value.recipientAddress,
    secret: value.secret,
    mosaicId: value.mosaicId,
    amount: value.amount,
    duration: value.duration,
    hashAlgorithm: LockHashAlgorithmEnumToJSON(value.hashAlgorithm),
  };
}
