import type { Response, Request, Query } from 'express-serve-static-core';
import type { PathLike } from 'fs';

export type Resp = Response<any, Record<string, never>, number>;
export type Requ = Request<{}, any, any, Query, Record<string, unknown>>;

export interface webhookFileType {
  hook: string;
  file: PathLike;
}

export interface webhookPayloadType {
  hook: string;
  payload: object;
}

export type fileType = formidable.Files;

export type NoParamCallback = (err: NodeJS.ErrnoException | null) => void;
export interface rateLimit {
  limit: Set<string>;
  public exist(ip: string): boolean;
  public timeout(ip: string): void;
}
