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


/**
 * Metadata type:
 * * 0 - Account.
 * * 1 - Mosaic.
 * * 2 - Namespace.
 * 
 * @export
 */
export const MetadataTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type MetadataTypeEnum = typeof MetadataTypeEnum[keyof typeof MetadataTypeEnum];


export function MetadataTypeEnumFromJSON(json: any): MetadataTypeEnum {
    return MetadataTypeEnumFromJSONTyped(json, false);
}

export function MetadataTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataTypeEnum {
    return json as MetadataTypeEnum;
}

export function MetadataTypeEnumToJSON(value?: MetadataTypeEnum | null): any {
    return value as any;
}

