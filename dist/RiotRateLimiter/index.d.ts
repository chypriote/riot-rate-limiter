import { STRATEGY } from '../RateLimiter';
import { RateLimit, RATELIMIT_TYPE, RateLimitOptions } from '../RateLimit';
export type RiotRateLimiterConstructorOptions = {
    strategy?: STRATEGY;
    debug?: boolean;
};
export type RiotRateLimiterOptions = {
    limits: RateLimitOptions[];
    strategy: STRATEGY;
    platformId: string;
    apiMethod: string;
};
export declare class RiotRateLimiter {
    private readonly limitersPerPlatformId;
    private strategy;
    private readonly debug;
    private appLimits;
    constructor({ strategy, debug }?: RiotRateLimiterConstructorOptions);
    executing({ url, token, resolveWithFullResponse }: {
        url: any;
        token: any;
        resolveWithFullResponse?: boolean;
    }): Promise<unknown>;
    private executingScheduledCallback;
    private static extractPlatformIdAndMethodFromUrl;
    static extractRateLimitFromHeader(type: RATELIMIT_TYPE, rateLimitHeader: string): RateLimitOptions[];
    static extractRateLimitCountsFromHeader(type: RATELIMIT_TYPE, rateLimitCountHeader: string): RateLimitOptions[];
    private static addRequestsCountFromHeader;
    toString(url: string): string;
    setStrategy(strategy: STRATEGY): void;
    getLimitsForPlatformId(platformId: string): {
        [apiMethod: string]: RateLimit[];
    };
    getLimits(): {
        [platformId: string]: {
            [apiMethod: string]: RateLimit[];
        };
    };
    private updateAppRateLimits;
}
