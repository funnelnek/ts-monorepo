import { ActionFunction, LoaderFunction, RouteObject, ShouldRevalidateFunction } from "react-router";

export interface Routing {
    path?: string;
    index?: boolean;
    children?: React.ReactNode;
    caseSensitive?: boolean;
    id?: string;
    loader?: LoaderFunction;
    action?: ActionFunction;
    element?: React.ReactNode | null;
    errorElement?: React.ReactNode | null;
    handle?: RouteObject["handle"];
    shouldRevalidate?: ShouldRevalidateFunction;
}