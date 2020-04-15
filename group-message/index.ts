import { AzureFunction, Context, HttpRequest } from "@azure/functions"

type ResponsePayload = {
    target: string,
    arguments: any[]
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<ResponsePayload> {
    return {
        "target": "newMessage",
        "arguments": [ req.body ]
    };
};

export default httpTrigger;
