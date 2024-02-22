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
import type { AliasDTO } from './AliasDTO';
import { AliasDTOFromJSON, AliasDTOFromJSONTyped, AliasDTOToJSON } from './AliasDTO';
import type { NamespaceRegistrationTypeEnum } from './NamespaceRegistrationTypeEnum';
import {
  NamespaceRegistrationTypeEnumFromJSON,
  NamespaceRegistrationTypeEnumFromJSONTyped,
  NamespaceRegistrationTypeEnumToJSON,
} from './NamespaceRegistrationTypeEnum';

/**
 *
 * @export
 * @interface NamespaceDTO
 */
export interface NamespaceDTO {
  /**
   * The version of the state
   * @type {number}
   * @memberof NamespaceDTO
   */
  version: number;
  /**
   *
   * @type {NamespaceRegistrationTypeEnum}
   * @memberof NamespaceDTO
   */
  registrationType: NamespaceRegistrationTypeEnum;
  /**
   * Level of the namespace.
   * @type {number}
   * @memberof NamespaceDTO
   */
  depth: number;
  /**
   * Namespace identifier.
   * @type {string}
   * @memberof NamespaceDTO
   */
  level0: string;
  /**
   * Namespace identifier.
   * @type {string}
   * @memberof NamespaceDTO
   */
  level1?: string;
  /**
   * Namespace identifier.
   * @type {string}
   * @memberof NamespaceDTO
   */
  level2?: string;
  /**
   *
   * @type {AliasDTO}
   * @memberof NamespaceDTO
   */
  alias: AliasDTO;
  /**
   * Namespace identifier.
   * @type {string}
   * @memberof NamespaceDTO
   */
  parentId: string;
  /**
   * Address encoded using a 32-character set.
   * @type {string}
   * @memberof NamespaceDTO
   */
  ownerAddress: string;
  /**
   * Height of the blockchain.
   * @type {string}
   * @memberof NamespaceDTO
   */
  startHeight: string;
  /**
   * Height of the blockchain.
   * @type {string}
   * @memberof NamespaceDTO
   */
  endHeight: string;
}

/**
 * Check if a given object implements the NamespaceDTO interface.
 */
export function instanceOfNamespaceDTO(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'version' in value;
  isInstance = isInstance && 'registrationType' in value;
  isInstance = isInstance && 'depth' in value;
  isInstance = isInstance && 'level0' in value;
  isInstance = isInstance && 'alias' in value;
  isInstance = isInstance && 'parentId' in value;
  isInstance = isInstance && 'ownerAddress' in value;
  isInstance = isInstance && 'startHeight' in value;
  isInstance = isInstance && 'endHeight' in value;

  return isInstance;
}

export function NamespaceDTOFromJSON(json: any): NamespaceDTO {
  return NamespaceDTOFromJSONTyped(json, false);
}

export function NamespaceDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceDTO {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    version: json['version'],
    registrationType: NamespaceRegistrationTypeEnumFromJSON(json['registrationType']),
    depth: json['depth'],
    level0: json['level0'],
    level1: !exists(json, 'level1') ? undefined : json['level1'],
    level2: !exists(json, 'level2') ? undefined : json['level2'],
    alias: AliasDTOFromJSON(json['alias']),
    parentId: json['parentId'],
    ownerAddress: json['ownerAddress'],
    startHeight: json['startHeight'],
    endHeight: json['endHeight'],
  };
}

export function NamespaceDTOToJSON(value?: NamespaceDTO | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    version: value.version,
    registrationType: NamespaceRegistrationTypeEnumToJSON(value.registrationType),
    depth: value.depth,
    level0: value.level0,
    level1: value.level1,
    level2: value.level2,
    alias: AliasDTOToJSON(value.alias),
    parentId: value.parentId,
    ownerAddress: value.ownerAddress,
    startHeight: value.startHeight,
    endHeight: value.endHeight,
  };
}