import { core } from "@mediarithmics/plugins-nodejs-sdk";

export interface IExampleAudienceFeedConnector extends core.AudienceFeedConnectorBaseInstanceContext {
    exampleApiKey: string;
    audienceFeedId: string;
    audienceFeedName: string;
}

export interface IExampleAudienceFeedPayloadPushUser {
    type: string;
	id: IExampleAudienceFeedPayloadUserId;
	payload: string[];
	logger: string;
}

export interface IExampleAudienceFeedPayloadUserId {
    id: string;
}

export interface IExampleAudienceFeedPayloadEmail {
    action: string;
    email: string;
}

export interface IExampleAudienceFeedPayloadCustomAudience {
    audienceId: string;
}

export interface IExampleCreateCustomAudienceResponse{
    status: string;
    data: { audienceId: string};
}

export interface IExampleApiKey{
    exampleApiKey: string;
}

export interface MicsRequestData {
	feed_id: string;
	datamartId: string;
	segmentId: string;
}

export interface IExampleAudienceFeedUpdate {
    action: string;
    id: string;
}

export interface IExampleAudienceFeedCreateCustomAudienceResponse {
	results: {audienceId: string}; // audience ID
}

export interface ExampleAudiencePropertiesWrapper extends core.PropertiesWrapper {
	property:string;
	technical_name:string;
	technical_id:string;
}