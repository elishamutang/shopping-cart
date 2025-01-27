import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import createFetchMock from "vitest-fetch-mock";

const fetchMocker = createFetchMock(vi);

fetchMocker.enableMocks();

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
