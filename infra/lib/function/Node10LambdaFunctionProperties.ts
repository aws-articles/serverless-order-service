import {Code, FunctionProps, Runtime} from "@aws-cdk/aws-lambda";

export class Node10LambdaFunctionProperties {
    constructor(private readonly code: Code,
                private readonly handler: string,
                readonly functionName: string,
                private readonly environmentVariables?: { [key: string]: string }) {
    }

    toFunctionProps(): FunctionProps {
        return {
            code: this.code,
            handler: this.handler,
            runtime: Runtime.NODEJS_10_X,
            functionName: this.functionName,
            environment: this.environmentVariables
        }
    }
}