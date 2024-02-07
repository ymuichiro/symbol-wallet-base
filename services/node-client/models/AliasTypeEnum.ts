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
 * Type of alias:
 * * 0 - No alias.
 * * 1 - Mosaic id alias.
 * * 2 - Addres alias.
 *
 * @export
 */
export const AliasTypeEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
export type AliasTypeEnum = (typeof AliasTypeEnum)[keyof typeof AliasTypeEnum];

export function AliasTypeEnumFromJSON(json: any): AliasTypeEnum {
  return AliasTypeEnumFromJSONTyped(json, false);
}

export function AliasTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AliasTypeEnum {
  return json as AliasTypeEnum;
}

export function AliasTypeEnumToJSON(value?: AliasTypeEnum | null): any {
  return value as any;
}
