import {LambdaRestApi, Resource} from "@aws-cdk/aws-apigateway";
import {Construct} from "@aws-cdk/core";
import {LambdaPublicRestApiProperties} from "./LambdaPublicRestApiProperties";
import {HttpMethod} from "./HttpMethod";
import {IllegalArgumentException} from "../../exception/IllegalArgumentException";

export class LambdaBackedPublicRestApi extends LambdaRestApi {

    constructor(scope: Construct, properties: LambdaPublicRestApiProperties) {
        super(scope, properties.apiName, properties.toLambdaRestApiProps());
    }

    addEndpoint(resourcePath: string, httpMethod: HttpMethod) {
        if (resourcePath.startsWith("/"))
            throw new IllegalArgumentException(
                `${resourcePath} should not begin with a / while adding a rest endpoint`
            );

        const resource = this.addAllResourcesUsing(resourcePath);
        resource.addMethod(httpMethod);
    }

    private addAllResourcesUsing(resourcePath: string): Resource {
        function add(resources: string[], rootResource: Resource): Resource {
            if (resources.length === 0)
                return rootResource;
            else
                return add(
                    resources.slice(1, resources.length),
                    LambdaBackedPublicRestApi.getOrAdd(resources[0], rootResource)
                );
        }

        return add(resourcePath.split("/"), (this.root as Resource));
    }

    private static getOrAdd(resourcePath: string, rootResource: Resource): Resource {
        const alreadyPresentResource = rootResource.getResource(resourcePath) as Resource;
        return alreadyPresentResource || rootResource.addResource(resourcePath)
    }
}