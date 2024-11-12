import {stringify} from 'qs';
import {HttpError} from '../../errors';

export class ApiClient {
    /**
     * @param {import('node-fetch').default} client
     * @param {string} apiUrl
     */
    constructor(client, apiUrl) {
        this.client = client;
        this.apiUrl = apiUrl;
    }

    /**
     * @typedef {Object<string, *>} QueryParams
     * @param {string} path
     * @param {QueryParams} queryParams
     * @returns {string}
     */
    url(path, queryParams = {}) {
        let baseUrl = `${this.apiUrl}${path}`;

        if (Object.keys(queryParams).length > 0) {
            baseUrl = baseUrl.concat(`?${stringify(queryParams)}`);
        }

        return baseUrl;
    }

    /**
     * @typedef {Object<string, string>} Headers
     * @param {Headers?} headers
     * @returns {Headers}
     */
    headers(headers = {}) {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers,
        };
    }

    /**
     * @param {object} payload
     * @returns {string}
     */
    body(payload) {
        return JSON.stringify(payload);
    }

    /**
     * @param {import('node-fetch').Response} response
     * @param {object?} data
     * @returns {HttpError}
     */
    // eslint-disable-next-line no-unused-vars
    mapApiError(response, data = {}) {
        return new HttpError(response.status, response.statusText);
    }

    /**
     * @typedef {{
     *  method: 'GET'|'POST'|'PUT'|'OPTIONS'|'PATCH'|'DELETE'
     *  headers: Headers,
     *  body: string?
     * }} RequestOptions
     * @typedef {'json'|'text'|'blob'} ResponseType
     * @param {string} requestUrl
     * @param {RequestOptions} options
     * @param {ResponseType} responeType
     * @throws {HttpError|Error}
     * @returns {Promise<*>}
     */
    async request(
        requestUrl,
        options = {method: 'GET', headers: this.headers()},
        responeType = 'json',
    ) {
        const response = await fetch(requestUrl, options);

        const data = await response[responeType]();

        if (!response.ok) {
            throw this.mapApiError(response, data);
        }

        return data;
    }

    /**
     * @param {string} apiUrl
     * @returns {ApiClient}
     */
    static create(apiUrl) {
        return new ApiClient(window.fetch, apiUrl);
    }
}
