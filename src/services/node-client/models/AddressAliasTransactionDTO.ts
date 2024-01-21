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
import type { AliasActionEnum } from './AliasActionEnum';
import {
    AliasActionEnumFromJSON,
    AliasActionEnumFromJSONTyped,
    AliasActionEnumToJSON,
} from './AliasActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
import {
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';

/**
 * Transaction to link a namespace to an account.
 * @export
 * @interface AddressAliasTransactionDTO
 */
export interface AddressAliasTransactionDTO {
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof AddressAliasTransactionDTO
     */
    size: number;
    /**
     * Entity's signature generated by the signer.
     * @type {string}
     * @memberof AddressAliasTransactionDTO
     */
    signature: string;
    /**
     * Public key.
     * @type {string}
     * @memberof AddressAliasTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof AddressAliasTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof AddressAliasTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof AddressAliasTransactionDTO
     */
    type: number;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof AddressAliasTransactionDTO
     */
    maxFee: string;
    /**
     * Duration expressed in number of blocks.
     * @type {string}
     * @memberof AddressAliasTransactionDTO
     */
    deadline: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof AddressAliasTransactionDTO
     */
    namespaceId: string;
    /**
     * Address encoded using a 32-character set.
     * @type {string}
     * @memberof AddressAliasTransactionDTO
     */
    address: string;
    /**
     * 
     * @type {AliasActionEnum}
     * @memberof AddressAliasTransactionDTO
     */
    aliasAction: AliasActionEnum;
}

/**
 * Check if a given object implements the AddressAliasTransactionDTO interface.
 */
export function instanceOfAddressAliasTransactionDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "size" in value;
    isInstance = isInstance && "signature" in value;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "maxFee" in value;
    isInstance = isInstance && "deadline" in value;
    isInstance = isInstance && "namespaceId" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "aliasAction" in value;

    return isInstance;
}

export function AddressAliasTransactionDTOFromJSON(json: any): AddressAliasTransactionDTO {
    return AddressAliasTransactionDTOFromJSONTyped(json, false);
}

export function AddressAliasTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressAliasTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'size': json['size'],
        'signature': json['signature'],
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'maxFee': json['maxFee'],
        'deadline': json['deadline'],
        'namespaceId': json['namespaceId'],
        'address': json['address'],
        'aliasAction': AliasActionEnumFromJSON(json['aliasAction']),
    };
}

export function AddressAliasTransactionDTOToJSON(value?: AddressAliasTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'size': value.size,
        'signature': value.signature,
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'maxFee': value.maxFee,
        'deadline': value.deadline,
        'namespaceId': value.namespaceId,
        'address': value.address,
        'aliasAction': AliasActionEnumToJSON(value.aliasAction),
    };
}

