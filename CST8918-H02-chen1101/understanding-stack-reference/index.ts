import * as pulumi from "@pulumi/pulumi";

const config = new pulumi.Config();
const stack = pulumi.getStack();
const org = config.require("org");

const stackRef = new pulumi.StackReference(`${org}/typescript_pulumi_tutorial/${stack}`)

export const shopUrl = stackRef.getOutput("url");
