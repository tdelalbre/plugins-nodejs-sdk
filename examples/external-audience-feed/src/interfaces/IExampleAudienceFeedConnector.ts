import { core } from "@mediarithmics/plugins-nodejs-sdk";


export interface IExampleAudienceFeedConnector extends core.AudienceFeedConnectorBaseInstanceContext {
    api_key: string;
}