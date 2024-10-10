import React from "react";
function StoringAreaForShape(props) {
  // const { shapeValue, length, breadth } = props;
  const { shapeInfo } = props;
  const { shape, length, breadth } = shapeInfo;
  const text = `hai, i am a ${shape} shape, my length is ${length}, my breadth is ${breadth}`;
  return (
    <>
      {/* <h1>Which shape is in my store</h1> */}
      <h1>{text}</h1>
      {/* <Triangle/> */}
    </>
  );
}

export default StoringAreaForShape;
