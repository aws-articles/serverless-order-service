import {Node10LambdaFunction} from "../../function/Node10LambdaFunction";
import {LambdaRestApiProps, MethodLoggingLevel} from "@aws-cdk/aws-apigateway";
import {IFunction} from "@aws-cdk/aws-lambda";

export class LambdaPublicRestApiProperties {

    constructor(readonly apiName: string,
                private readonly stageName: string,
                private handler: Node10LambdaFunction) {
    }

    toLambdaRestApiProps(): LambdaRestApiProps {
        return {
            restApiName: this.apiName,
            deployOptions: {
                stageName: this.stageName,
                loggingLevel: MethodLoggingLevel.INFO
            },
            proxy: false,
            handler: this.handler as IFunction
        }
    }
}