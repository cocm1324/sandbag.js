import { BaseError } from "../models/bases";

/**
 * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
 */
export class ServiceUnavailableError extends BaseError {
    constructor(data?: any | any[]) {
        super(data);
        this.name = 'Service Unavailable';
        this.code = 503;
    }
}