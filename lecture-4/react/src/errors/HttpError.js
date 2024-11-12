export class HttpError extends Error {
    /**
     * @param {number} status
     * @param {string} message
     * @param {(string|null)?} description
     * @param {object?} metadata
     */
    constructor(status, message, description = null, metadata = {}) {
        super(message);
        this.status = status;
        this.description = description;
        this.metadata = metadata;
    }
}
