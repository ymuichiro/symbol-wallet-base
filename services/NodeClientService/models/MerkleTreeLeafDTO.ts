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
import type { MerkleTreeNodeTypeEnum } from './MerkleTreeNodeTypeEnum';
import {
  MerkleTreeNodeTypeEnumFromJSON,
  MerkleTreeNodeTypeEnumFromJSONTyped,
  MerkleTreeNodeTypeEnumToJSON,
} from './MerkleTreeNodeTypeEnum';

/**
 * Merkle tree leaf node.
 * @export
 * @interface MerkleTreeLeafDTO
 */
export interface MerkleTreeLeafDTO {
  /**
   *
   * @type {MerkleTreeNodeTypeEnum}
   * @memberof MerkleTreeLeafDTO
   */
  type: MerkleTreeNodeTypeEnum;
  /**
   * Leaf path.
   * @type {string}
   * @memberof MerkleTreeLeafDTO
   */
  path: string;
  /**
   * Encoded leaf path.
   * @type {string}
   * @memberof MerkleTreeLeafDTO
   */
  encodedPath: string;
  /**
   * Nibble count.
   * @type {number}
   * @memberof MerkleTreeLeafDTO
   */
  nibbleCount: number;
  /**
   * Leaf value (sha256 hash).
   * @type {string}
   * @memberof MerkleTreeLeafDTO
   */
  value: string;
  /**
   *
   * @type {string}
   * @memberof MerkleTreeLeafDTO
   */
  leafHash: string;
}

/**
 * Check if a given object implements the MerkleTreeLeafDTO interface.
 */
export function instanceOfMerkleTreeLeafDTO(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'type' in value;
  isInstance = isInstance && 'path' in value;
  isInstance = isInstance && 'encodedPath' in value;
  isInstance = isInstance && 'nibbleCount' in value;
  isInstance = isInstance && 'value' in value;
  isInstance = isInstance && 'leafHash' in value;

  return isInstance;
}

export function MerkleTreeLeafDTOFromJSON(json: any): MerkleTreeLeafDTO {
  return MerkleTreeLeafDTOFromJSONTyped(json, false);
}

export function MerkleTreeLeafDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerkleTreeLeafDTO {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    type: MerkleTreeNodeTypeEnumFromJSON(json['type']),
    path: json['path'],
    encodedPath: json['encodedPath'],
    nibbleCount: json['nibbleCount'],
    value: json['value'],
    leafHash: json['leafHash'],
  };
}

export function MerkleTreeLeafDTOToJSON(value?: MerkleTreeLeafDTO | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    type: MerkleTreeNodeTypeEnumToJSON(value.type),
    path: value.path,
    encodedPath: value.encodedPath,
    nibbleCount: value.nibbleCount,
    value: value.value,
    leafHash: value.leafHash,
  };
}