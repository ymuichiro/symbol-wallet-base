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
import type { AccountKeyLinkNetworkPropertiesDTO } from './AccountKeyLinkNetworkPropertiesDTO';
import {
  AccountKeyLinkNetworkPropertiesDTOFromJSON,
  AccountKeyLinkNetworkPropertiesDTOFromJSONTyped,
  AccountKeyLinkNetworkPropertiesDTOToJSON,
} from './AccountKeyLinkNetworkPropertiesDTO';
import type { AccountRestrictionNetworkPropertiesDTO } from './AccountRestrictionNetworkPropertiesDTO';
import {
  AccountRestrictionNetworkPropertiesDTOFromJSON,
  AccountRestrictionNetworkPropertiesDTOFromJSONTyped,
  AccountRestrictionNetworkPropertiesDTOToJSON,
} from './AccountRestrictionNetworkPropertiesDTO';
import type { AggregateNetworkPropertiesDTO } from './AggregateNetworkPropertiesDTO';
import {
  AggregateNetworkPropertiesDTOFromJSON,
  AggregateNetworkPropertiesDTOFromJSONTyped,
  AggregateNetworkPropertiesDTOToJSON,
} from './AggregateNetworkPropertiesDTO';
import type { HashLockNetworkPropertiesDTO } from './HashLockNetworkPropertiesDTO';
import {
  HashLockNetworkPropertiesDTOFromJSON,
  HashLockNetworkPropertiesDTOFromJSONTyped,
  HashLockNetworkPropertiesDTOToJSON,
} from './HashLockNetworkPropertiesDTO';
import type { MetadataNetworkPropertiesDTO } from './MetadataNetworkPropertiesDTO';
import {
  MetadataNetworkPropertiesDTOFromJSON,
  MetadataNetworkPropertiesDTOFromJSONTyped,
  MetadataNetworkPropertiesDTOToJSON,
} from './MetadataNetworkPropertiesDTO';
import type { MosaicNetworkPropertiesDTO } from './MosaicNetworkPropertiesDTO';
import {
  MosaicNetworkPropertiesDTOFromJSON,
  MosaicNetworkPropertiesDTOFromJSONTyped,
  MosaicNetworkPropertiesDTOToJSON,
} from './MosaicNetworkPropertiesDTO';
import type { MosaicRestrictionNetworkPropertiesDTO } from './MosaicRestrictionNetworkPropertiesDTO';
import {
  MosaicRestrictionNetworkPropertiesDTOFromJSON,
  MosaicRestrictionNetworkPropertiesDTOFromJSONTyped,
  MosaicRestrictionNetworkPropertiesDTOToJSON,
} from './MosaicRestrictionNetworkPropertiesDTO';
import type { MultisigNetworkPropertiesDTO } from './MultisigNetworkPropertiesDTO';
import {
  MultisigNetworkPropertiesDTOFromJSON,
  MultisigNetworkPropertiesDTOFromJSONTyped,
  MultisigNetworkPropertiesDTOToJSON,
} from './MultisigNetworkPropertiesDTO';
import type { NamespaceNetworkPropertiesDTO } from './NamespaceNetworkPropertiesDTO';
import {
  NamespaceNetworkPropertiesDTOFromJSON,
  NamespaceNetworkPropertiesDTOFromJSONTyped,
  NamespaceNetworkPropertiesDTOToJSON,
} from './NamespaceNetworkPropertiesDTO';
import type { SecretLockNetworkPropertiesDTO } from './SecretLockNetworkPropertiesDTO';
import {
  SecretLockNetworkPropertiesDTOFromJSON,
  SecretLockNetworkPropertiesDTOFromJSONTyped,
  SecretLockNetworkPropertiesDTOToJSON,
} from './SecretLockNetworkPropertiesDTO';
import type { TransferNetworkPropertiesDTO } from './TransferNetworkPropertiesDTO';
import {
  TransferNetworkPropertiesDTOFromJSON,
  TransferNetworkPropertiesDTOFromJSONTyped,
  TransferNetworkPropertiesDTOToJSON,
} from './TransferNetworkPropertiesDTO';

/**
 * Plugin related configuration properties.
 * @export
 * @interface PluginsPropertiesDTO
 */
export interface PluginsPropertiesDTO {
  /**
   *
   * @type {AccountKeyLinkNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  accountlink?: AccountKeyLinkNetworkPropertiesDTO;
  /**
   *
   * @type {AggregateNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  aggregate?: AggregateNetworkPropertiesDTO;
  /**
   *
   * @type {HashLockNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  lockhash?: HashLockNetworkPropertiesDTO;
  /**
   *
   * @type {SecretLockNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  locksecret?: SecretLockNetworkPropertiesDTO;
  /**
   *
   * @type {MetadataNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  metadata?: MetadataNetworkPropertiesDTO;
  /**
   *
   * @type {MosaicNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  mosaic?: MosaicNetworkPropertiesDTO;
  /**
   *
   * @type {MultisigNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  multisig?: MultisigNetworkPropertiesDTO;
  /**
   *
   * @type {NamespaceNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  namespace?: NamespaceNetworkPropertiesDTO;
  /**
   *
   * @type {AccountRestrictionNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  restrictionaccount?: AccountRestrictionNetworkPropertiesDTO;
  /**
   *
   * @type {MosaicRestrictionNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  restrictionmosaic?: MosaicRestrictionNetworkPropertiesDTO;
  /**
   *
   * @type {TransferNetworkPropertiesDTO}
   * @memberof PluginsPropertiesDTO
   */
  transfer?: TransferNetworkPropertiesDTO;
}

/**
 * Check if a given object implements the PluginsPropertiesDTO interface.
 */
export function instanceOfPluginsPropertiesDTO(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function PluginsPropertiesDTOFromJSON(json: any): PluginsPropertiesDTO {
  return PluginsPropertiesDTOFromJSONTyped(json, false);
}

export function PluginsPropertiesDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): PluginsPropertiesDTO {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    accountlink: !exists(json, 'accountlink')
      ? undefined
      : AccountKeyLinkNetworkPropertiesDTOFromJSON(json['accountlink']),
    aggregate: !exists(json, 'aggregate') ? undefined : AggregateNetworkPropertiesDTOFromJSON(json['aggregate']),
    lockhash: !exists(json, 'lockhash') ? undefined : HashLockNetworkPropertiesDTOFromJSON(json['lockhash']),
    locksecret: !exists(json, 'locksecret') ? undefined : SecretLockNetworkPropertiesDTOFromJSON(json['locksecret']),
    metadata: !exists(json, 'metadata') ? undefined : MetadataNetworkPropertiesDTOFromJSON(json['metadata']),
    mosaic: !exists(json, 'mosaic') ? undefined : MosaicNetworkPropertiesDTOFromJSON(json['mosaic']),
    multisig: !exists(json, 'multisig') ? undefined : MultisigNetworkPropertiesDTOFromJSON(json['multisig']),
    namespace: !exists(json, 'namespace') ? undefined : NamespaceNetworkPropertiesDTOFromJSON(json['namespace']),
    restrictionaccount: !exists(json, 'restrictionaccount')
      ? undefined
      : AccountRestrictionNetworkPropertiesDTOFromJSON(json['restrictionaccount']),
    restrictionmosaic: !exists(json, 'restrictionmosaic')
      ? undefined
      : MosaicRestrictionNetworkPropertiesDTOFromJSON(json['restrictionmosaic']),
    transfer: !exists(json, 'transfer') ? undefined : TransferNetworkPropertiesDTOFromJSON(json['transfer']),
  };
}

export function PluginsPropertiesDTOToJSON(value?: PluginsPropertiesDTO | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    accountlink: AccountKeyLinkNetworkPropertiesDTOToJSON(value.accountlink),
    aggregate: AggregateNetworkPropertiesDTOToJSON(value.aggregate),
    lockhash: HashLockNetworkPropertiesDTOToJSON(value.lockhash),
    locksecret: SecretLockNetworkPropertiesDTOToJSON(value.locksecret),
    metadata: MetadataNetworkPropertiesDTOToJSON(value.metadata),
    mosaic: MosaicNetworkPropertiesDTOToJSON(value.mosaic),
    multisig: MultisigNetworkPropertiesDTOToJSON(value.multisig),
    namespace: NamespaceNetworkPropertiesDTOToJSON(value.namespace),
    restrictionaccount: AccountRestrictionNetworkPropertiesDTOToJSON(value.restrictionaccount),
    restrictionmosaic: MosaicRestrictionNetworkPropertiesDTOToJSON(value.restrictionmosaic),
    transfer: TransferNetworkPropertiesDTOToJSON(value.transfer),
  };
}
