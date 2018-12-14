import { core } from '@mediarithmics/plugins-nodejs-sdk';

export interface IExampleAudienceFeedConnectorConnectorInstanceContext extends core.AudienceFeedConnectorBaseInstanceContext {
  technicalConfiguration: ITechnicalConfiguration;
  exampleApiKey: string;
  micsApiToken: string;
  audience_feed_id?: string;
}

export interface ITechnicalConfiguration {
  web_domain: string[];
  mics_api_version: string;
  mics_api_endpoint: string;
  max_retry: string;
}
/* 
export interface RetryResultWrapper<T> {
  attempt: number;
  data: T;
}
 */