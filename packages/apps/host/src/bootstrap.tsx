import React from "react";
import ReactDOM  from "react-dom";
import { inject, ServiceContainer } from "@funnelnek/ioc";
import { Provider } from "react-redux";
import { HostApplication, IHostApplication } from "@funnelnek/core";
import { RouterProvider } from "react-router";
import "./routes";

const app = inject<IHostApplication>(HostApplication);

const Application = ReactDOM.render(
    <React.StrictMode>
        <ServiceContainer>
            <Provider store={app.store}>
                <RouterProvider router={app.router} />
            </Provider>
        </ServiceContainer>
    </React.StrictMode>,
    document.getElementById("root")
);

export default app;