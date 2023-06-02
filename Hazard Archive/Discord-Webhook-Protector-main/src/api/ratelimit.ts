import { rateLimitTimeout } from '../settings.js';
import type { rateLimit } from '../types/types.js';

export default class RateLimit implements rateLimit {
  /**
   * Ratelimits unauthorized ip's
   * @access public
   **/
  limit: Set<string>;
  constructor() {
    this.limit = new Set();
  }

  public exist(ip: string): boolean {
    /**
     * if ip is already ratelimited
     *
     * @returns {boolean}
     */
    if (this.limit.has(ip)) return true;
    return false;
  }
  public timeout(ip: string): void {
    /**
     * sets a 30 sec ratelimit on the ip or the rateLimitTimeout amount in config.json
     *
     * @returns {void}
     */
    this.limit.add(ip);
    setTimeout(() => {
      this.limit.delete(ip);
    }, rateLimitTimeout || 30000);
  }
}
