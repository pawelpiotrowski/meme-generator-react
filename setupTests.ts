import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import "jest-canvas-mock";
import "@testing-library/jest-dom";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(__dirname, true, { info: () => null, error: console.error });
