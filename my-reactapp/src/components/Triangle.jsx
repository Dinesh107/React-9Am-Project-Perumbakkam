import StoringAreaForShape from "./StoringAreaForShape";

function Triangle() {
  
  // const isShapeStoreOpened = false;

  // const shape = "rectangle";
  // const length = 45;
  // const breadth = 30;
  const shapeInfo = {
    shape: "triangle",
    length: 45,
    breadth: 30,
  }
  // const shapeInfo = {};

  const shapeList = [

    {
      shape: "rectangle",
      length: 45,
      breadth: 30,
    },
    {
      shape: "square",
      length: 45,
      breadth: 45, 
    },
    {
      shape: "triangle",
      length: 45,
      breadth: 30,
    },
    {
      shape: "circle",
    },
    // {

  ];

  const numberList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]
   
  const showShapeInfo = shapeInfo.shape !== undefined && shapeInfo.length !== undefined && shapeInfo.breadth !== undefined ;

    return (
      <>
        <div className="triangle">
           {/* <StoringAreaForShape shapeValue = {shape} length = {40} breadth = "50"/> */}
           {/* { showShapeInfo ? <StoringAreaForShape shapeInfo = {shapeInfo} /> : null
           }  */}
           {/* { showShapeInfo && <StoringAreaForShape shapeInfo = {shapeInfo} /> 
           }  */}
           {/* { isShapeStoreOpened ?
           <h2>Shape Store is open</h2> : <h2>Shape Store is closed</h2>
           } */}
           <ul>
              {shapeList.map((shapeInfo) => <li> key = {shapeInfo.shape} <StoringAreaForShape  shapeInfo={shapeInfo}/> </li>)}
           </ul>
           <ul>
             {numberList.map((number, index) => <p key={index} >{number}</p>)}

           </ul>
        </div>
      </>
    );
  }

  export default Triangle;
  