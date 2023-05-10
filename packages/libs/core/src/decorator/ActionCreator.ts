import { Type } from "@funnelnek/ioc"
import { ICommandHandler } from "../contracts"


export const ActionCreator = () => {
    return <T = any>(type: Type<ICommandHandler<T>>) => {

    }
}