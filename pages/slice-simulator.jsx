import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import { components } from "../slices";

const SliceSimulatorPage = () => (
  <SliceSimulator
    sliceZone={({ slices }) => (
      <SliceZone slices={slices} components={components} />
    )}
    state={{}}
  />
);

export default SliceSimulatorPage;

// import { SliceSimulator } from "@prismicio/slice-simulator-react";
//   import SliceZone from "next-slicezone";

//   import * as Slices from "../slices";
//   const resolver = ({ sliceName }) => Slices[sliceName];

//   const SliceSimulatorPage = () => (<SliceSimulator
//   	sliceZone={(props) => <SliceZone {...props} resolver={resolver} />}
//   	state={{}}
//   />);

//   export default SliceSimulatorPage;