"use client";

import Image from "next/image";
import React from "react";

function TechStack() {
  const [type, setType] = React.useState<number>(1);
  const data= techStackdata.find((data)=>data.id === type)

  return (
    <div className=" md:h-[60vh] w-full bg-gray-50  px-2 md:px-10 lg:px-56 pt-[150px] flex  flex-col items-center mt-[250px] lg:mt-0">
      <h1 className="text-4xl font-bold ">Tech Stack </h1>
      <NavigationComponent setState={setType} state={type} />
      <div className="flex gap-8 flex-wrap">
    
      {
        data?.type.map((data,idx) => <TechStactComponent {...data} key={idx} />)
      }
      </div>
    </div>
  );
}

export default TechStack;

const TechStactComponent: React.FC<tech> = ({imgUrl,name}) => {
  return (
    <>
      <div className="flex flex-col items-center  gap-2 md:p-2    ">
        <div className="bg-slate-100 rounded-full p-3 md:p-5 ">
          <Image
            src={imgUrl}
            width={60}
            height={60}
            alt=""
          />
        </div>
        <p className="font-semibold ">{name}</p>
      </div>
    </>
  );
};

const NavigationComponent: React.FC<{ setState: Function; state: number }> = ({
  setState,
  state,
}) => {
  return (
    <>
      {" "}
      <div className="py-2 px-4    bg-white shadow-md shadow-gray-200 rounded-md mt-6 flex gap-1  mb-4 ">
        <Button setState={setState} state={state} text="Frontend" id={1} />
        <Button setState={setState} state={state} text="Backend" id={2} />
        <Button setState={setState} state={state} text="Mobile" id={3} />
        <Button setState={setState} state={state} text="Others" id={4} />
      </div>
    </>
  );
};

const Button: React.FC<{
  id: number;
  state: number;
  setState: Function;
  text: string;
}> = ({ id, setState, state, text }) => {
  function handleClick() {
    setState(id);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`py-1.5 px-2 md:px-4  ${
          id === state ? " bg-purple-500 text-white font-semibold" : "bg-white"
        } rounded transition-all`}
      >
        {text}
      </button>
    </>
  );
};

interface tech {
  name: string;
  imgUrl: string;
}

const frontEnd: Array<tech> = [
  {
    name: "React",
    imgUrl: "/assets/tech/react.webp",
  },
  {
    name: "Angular",
    imgUrl: "/assets/tech/angular.webp",
  },
  {
    name: "Next js",
    imgUrl: "/assets/tech/next.webp",
  },
  {
    name: "Vue js ",
    imgUrl: "/assets/tech/vue.webp",
  },
];

const Backend:Array<tech>=[{
  name:"node js",
  imgUrl: "/assets/tech/nodejs.webp"
},{
  name:"express js",
  imgUrl: "/assets/tech/express.webp"
},{
  name:"nest js",
  imgUrl: "/assets/tech/nest.webp"
},]

const mobile:Array<tech>=[{
  name:"React Native",
  imgUrl: "/assets/tech/reactNative.webp"
}]
const others:Array<tech>=[{
  name:"C++",
  imgUrl: "/assets/tech/C++.webp"
},{
  name:"C",
  imgUrl: "/assets/tech/c.webp"
},{
  name:"python",
  imgUrl: "/assets/tech/python.webp"
},
]


interface TechStackdata{
 id:number,
 type:Array<tech>
}

const techStackdata:Array<TechStackdata>=[
  {
    id:1,
    type:frontEnd
  },
  {
    id:2,
    type:Backend
  },  {
    id:3,
    type:mobile
  }, {
    id:4,
    type:others
  },
]

