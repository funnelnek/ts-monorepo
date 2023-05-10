import { Type, Injectable } from "@funnelnek/ioc"
import { IHostApplication } from "../contracts"
import { HostApplication } from "../HostApplication";


export const HostGateway = () => {
    return (app: Type<IHostApplication>) =>{
        Injectable({
            alias: HostApplication
        })(app);
    }
}