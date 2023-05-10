import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Branding, Button, Drawer, Icon, Navigation, PaneHeader } from "./components";
import { Carousel } from "./components/carousel";
import { Slide } from "./components/carousel/Slide";
import { Image } from "./components/image/Image";
import elina from "./resources/images/elina.jpg";
import ivan from "./resources/images/ivan.jpg";
import pincalo from "./resources/images/pincalo.jpg";
import polina1 from "./resources/images/polina1.jpg";
import polina2 from "./resources/images/polina2.jpg";


const router = createBrowserRouter([
    {
        path: "/",
        Component: () => (
            <div className="app">
                <Drawer open>
                    <PaneHeader>
                        <Branding name="Funnelnek" />
                        <Button>
                            <Icon name="bars" />
                        </Button>
                    </PaneHeader>
                    <Navigation>

                    </Navigation>
                </Drawer>
                <div className="stage">
                    <Carousel>
                        <Slide><Image src={elina} alt="elina" /></Slide>
                        <Slide><Image src={ivan} alt="ivan" /></Slide>
                        <Slide><Image src={pincalo} alt="pincalo" /></Slide>
                        <Slide><Image src={polina1} alt="polina" /></Slide>
                        <Slide><Image src={polina2} alt="polina" /></Slide>
                    </Carousel>
                </div>
            </div>
        )
    }
]);

export const Themes = () => {
    return (
        <RouterProvider router={router} />
    );
}
