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
 * @interface NamespaceMetadataTransactionBodyDTO
 */
export interface NamespaceMetadataTransactionBodyDTO {
    /**
     * Address expressed in Base32 format. If the bit 0 of byte 0 is not set (like in 0x90), then it is a
     * regular address. Example: TAOXUJOTTW3W5XTBQMQEX3SQNA6MCUVGXLXR3TA. 
     * Otherwise (e.g. 0x91) it represents a namespace id which starts at byte 1. Example: THBIMC3THGH5RUYAAAAAAAAAAAAAAAAAAAAAAAA
     * 
     * @type {string}
     * @memberof NamespaceMetadataTransactionBodyDTO
     */
    targetAddress: string;
    /**
     * Metadata key scoped to source, target and type expressed.
     * @type {string}
     * @memberof NamespaceMetadataTransactionBodyDTO
     */
    scopedMetadataKey: string;
    /**
     * Namespace identifier.
     * @type {string}
     * @memberof NamespaceMetadataTransactionBodyDTO
     */
    targetNamespaceId?: string;
    /**
     * Change in value size in bytes.
     * @type {number}
     * @memberof NamespaceMetadataTransactionBodyDTO
     */
    valueSizeDelta: number;
    /**
     * A number that allows uint 32 values.
     * @type {number}
     * @memberof NamespaceMetadataTransactionBodyDTO
     */
    valueSize: number;
    /**
     * Metadata value. If embedded in a transaction, this is calculated as xor(previous-value, value).
     * @type {string}
     * @memberof NamespaceMetadataTransactionBodyDTO
     */
    value: string;
}

/**
 * Check if a given object implements the NamespaceMetadataTransactionBodyDTO interface.
 */
export function instanceOfNamespaceMetadataTransactionBodyDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "targetAddress" in value;
    isInstance = isInstance && "scopedMetadataKey" in value;
    isInstance = isInstance && "valueSizeDelta" in value;
    isInstance = isInstance && "valueSize" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function NamespaceMetadataTransactionBodyDTOFromJSON(json: any): NamespaceMetadataTransactionBodyDTO {
    return NamespaceMetadataTransactionBodyDTOFromJSONTyped(json, false);
}

export function NamespaceMetadataTransactionBodyDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceMetadataTransactionBodyDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'targetAddress': json['targetAddress'],
        'scopedMetadataKey': json['scopedMetadataKey'],
        'targetNamespaceId': !exists(json, 'targetNamespaceId') ? undefined : json['targetNamespaceId'],
        'valueSizeDelta': json['valueSizeDelta'],
        'valueSize': json['valueSize'],
        'value': json['value'],
    };
}

export function NamespaceMetadataTransactionBodyDTOToJSON(value?: NamespaceMetadataTransactionBodyDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'targetAddress': value.targetAddress,
        'scopedMetadataKey': value.scopedMetadataKey,
        'targetNamespaceId': value.targetNamespaceId,
        'valueSizeDelta': value.valueSizeDelta,
        'valueSize': value.valueSize,
        'value': value.value,
    };
}

