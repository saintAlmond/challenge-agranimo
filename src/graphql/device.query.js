import gql from "graphql-tag";

export const GET_DEVICES = gql`
  query GET_DEVICES {
    devices {
      success
      nodes
      error
      message
    }
  }
`;
export const GET_DEVICE_DATA = gql`
  query GET_DEVICE_DATA( $params: ResponseInput ) {
    data (params: $params){
      success
      nodes
      error
      message
    }
  }
`;
