import { lazy } from "react";
import App from "./App";

export const EnglishTranslatorApplication = lazy<typeof App>(() => import("./App"));