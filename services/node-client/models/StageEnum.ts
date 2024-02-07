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
 * Type of stage:
 * * 0 - Prevote.
 * * 1 - Precommit.
 * * 2 - Count.
 *
 * @export
 */
export const StageEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const;
export type StageEnum = (typeof StageEnum)[keyof typeof StageEnum];

export function StageEnumFromJSON(json: any): StageEnum {
  return StageEnumFromJSONTyped(json, false);
}

export function StageEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): StageEnum {
  return json as StageEnum;
}

export function StageEnumToJSON(value?: StageEnum | null): any {
  return value as any;
}
