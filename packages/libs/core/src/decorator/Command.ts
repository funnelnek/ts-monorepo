import { Type } from "@funnelnek/ioc";
import { PrepareAction } from "@reduxjs/toolkit";
import { PipeTransform } from "../contracts";
import { ICommandHandler } from "../contracts/ICommandHandler";



export const Command = <T = any, R = T>(validator: Type<PipeTransform<T, R>>)  => {
    return (proto: ICommandHandler<T>, execute: "execute", descriptor?: TypedPropertyDescriptor<PrepareAction<R>>): void => {

    }
}