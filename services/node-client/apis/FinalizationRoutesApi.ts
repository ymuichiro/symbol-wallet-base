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

import * as runtime from '../runtime';
import type { FinalizationProofDTO, ModelError } from '../models/index';
import {
  FinalizationProofDTOFromJSON,
  FinalizationProofDTOToJSON,
  ModelErrorFromJSON,
  ModelErrorToJSON,
} from '../models/index';

export interface GetFinalizationProofAtEpochRequest {
  epoch: number;
}

export interface GetFinalizationProofAtHeightRequest {
  height: string;
}

/**
 *
 */
export class FinalizationRoutesApi extends runtime.BaseAPI {
  /**
   * Gets finalization proof for the greatest height associated with the given epoch.
   * Get finalization proof
   */
  async getFinalizationProofAtEpochRaw(
    requestParameters: GetFinalizationProofAtEpochRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<FinalizationProofDTO>> {
    if (requestParameters.epoch === null || requestParameters.epoch === undefined) {
      throw new runtime.RequiredError(
        'epoch',
        'Required parameter requestParameters.epoch was null or undefined when calling getFinalizationProofAtEpoch.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/finalization/proof/epoch/{epoch}`.replace(
          `{${'epoch'}}`,
          encodeURIComponent(String(requestParameters.epoch))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => FinalizationProofDTOFromJSON(jsonValue));
  }

  /**
   * Gets finalization proof for the greatest height associated with the given epoch.
   * Get finalization proof
   */
  async getFinalizationProofAtEpoch(
    requestParameters: GetFinalizationProofAtEpochRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<FinalizationProofDTO> {
    const response = await this.getFinalizationProofAtEpochRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Gets finalization proof at the given height.
   * Get finalization proof
   */
  async getFinalizationProofAtHeightRaw(
    requestParameters: GetFinalizationProofAtHeightRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<runtime.ApiResponse<FinalizationProofDTO>> {
    if (requestParameters.height === null || requestParameters.height === undefined) {
      throw new runtime.RequiredError(
        'height',
        'Required parameter requestParameters.height was null or undefined when calling getFinalizationProofAtHeight.'
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/finalization/proof/height/{height}`.replace(
          `{${'height'}}`,
          encodeURIComponent(String(requestParameters.height))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => FinalizationProofDTOFromJSON(jsonValue));
  }

  /**
   * Gets finalization proof at the given height.
   * Get finalization proof
   */
  async getFinalizationProofAtHeight(
    requestParameters: GetFinalizationProofAtHeightRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction
  ): Promise<FinalizationProofDTO> {
    const response = await this.getFinalizationProofAtHeightRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
