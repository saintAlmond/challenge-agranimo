import React from "react";
import './matchMedia.mock.js';

import { expect } from "chai";
import enzyme, { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { MockedProvider } from "@apollo/react-testing";

import { dummy_devices, DeviceList } from "../components/device";
import { GET_DEVICES } from "../graphql/device.query";

import { act } from "react-dom/test-utils";

const customWait =  async (ms = 0) => {
  await act( () => {
      return new Promise(resolve => {
        setTimeout(resolve, ms);
      });
    }
  );
};

configure({ adapter: new Adapter() });
describe("DeviceList tests", () => {
  
  let mocks = {};
  const devices = dummy_devices;
  beforeEach(() => {
    mocks = { 
      request: { query: GET_DEVICES, variables: {} },
      result : {}
     };
  });
  
  it("DeviceList renders without error", () => {
    mocks.result = {
      demoDevices: devices
    };
    enzyme.mount(
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <DeviceList />
      </MockedProvider>
    );
  });

});