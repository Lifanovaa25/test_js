// import React from "react";
// import "./App.css";
// import { transform } from "esbuild";

// function App() {
//   const Items = [
//     {
//       name: "Финансовый аналитик",
//       mainSkills: ["Excel", "SQL", "VBA", "1С"],
//       otherSkills: ["Power BI", "Python"],
//     },
//     {
//       name: "Предприниматель",
//       mainSkills: ["1C", "Excel", "Power BI"],
//       otherSkills: [
//         "Google Analytics",
//         "Яндекс.Метрика",
//         "Python",
//         "SQL",
//         "Tilda",
//       ],
//     },
//     {
//       name: "Продуктовый дизайнер",
//       mainSkills: [
//         "Figma",
//         "Sketch",
//         "Illustrator",
//         "Photoshop",
//         "Principle",
//         "Tilda",
//       ],
//       otherSkills: ["Shopify", "Protopie", "Cinema 4D"],
//     },
//     {
//       name: "Менеджер проекта",
//       mainSkills: [
//         "Visio",
//         "1C",
//         "Google Analytics",
//         "Яндекс.Метрика",
//         "Python",
//         "SQL",
//         "Tilda",
//       ],
//       otherSkills: ["Figma", "Sketch", "Shopify"],
//     },
//     {
//       name: "Финансовый менеджер",
//       mainSkills: ["1C", "Excel", "Power BI"],
//       otherSkills: ["BPMN"],
//     },
//     {
//       name: "Руководитель финансового департамента компании",
//       mainSkills: ["Sketch", "Figma"],
//       otherSkills: ["Shopify", "HQL"],
//     },

//     {
//       name: "Продуктовый аналитик",
//       mainSkills: [
//         "Google Analytics",
//         "Яндекс.Метрика",
//         "SQL",
//         "Power BI",
//         "Python",
//         "Excel",
//       ],
//       otherSkills: ["HQL", "Tableau", "R", "Machine learning"],
//     },

//     {
//       name: "Руководитель финансового продукта",
//       mainSkills: ["Visio"],
//       otherSkills: ["Python"],
//     },
//     {
//       name: "Менеджер по маркетингу",
//       mainSkills: [
//         "Google Analytics",
//         "Яндекс.Метрика",
//         "Google Ads",
//         "Ahrefs",
//         "Главред",
//         "My Target",
//       ],
//       otherSkills: ["Tilda", "Photoshop", "Xenu", "Python"],
//     },

//     {
//       name: "Менеджер по цифровой трансформации",
//       mainSkills: [
//         "Visio",
//         "Google Analytics",
//         "Яндекс.Метрика",
//         "Python",
//         "SQL",
//         "Tilda",
//       ],
//       otherSkills: ["Figma", "Sketch", "Shopify"],
//     },
//   ];
//   const [Item, mainSkills, otherSkills] = Items;

//   const theta = [
//     0,
//     Math.PI / 6,
//     Math.PI / 4,
//     Math.PI / 3,
//     Math.PI / 2,
//     2 * (Math.PI / 3),
//     3 * (Math.PI / 4),
//     5 * (Math.PI / 6),
//     Math.PI,
//     7 * (Math.PI / 6),
//     5 * (Math.PI / 4),
//     4 * (Math.PI / 3),
//     3 * (Math.PI / 2),
//     5 * (Math.PI / 3),
//     7 * (Math.PI / 4),
//     11 * (Math.PI / 6),
//   ];
// function otherSkillsToArray(Items) {
//     const otherSkillsAr = Object.entries(otherSkills);
//     otherSkillsAr.forEach(([index, value]) => {
//       otherSkillsAr[index] = value;
//     });
//     return  otherSkillsAr
//   }
//   function mainSkillsToArray(Items) {
//     const mainSkillsAr = Object.entries(mainSkills);
//     mainSkillsAr.forEach(([index, value]) => {
//       mainSkillsAr[index] = value;
//     });
//     return  mainSkillsAr
//   }
//   const otherSkillsAr = otherSkillsToArray(Items)
//   const mainSkillsAr = mainSkillsToArray(Items)

//   // const N = otherSkillsAr.length + mainSkillsAr.length;
//   const N = 10;
//   const radius = 256 / 2;

//   function positionX(i) {

//     var a: number = 0;
//     var x: number = 0;
//     var y: number = 0;
// const radian = i*( 2* Math.PI / 6)

//     // for (let i = 0; i < Items.length; i++) {
//     // console.log(radius);

//     a = (i * 360) / N + 90;
//     // x = Math.round(radius * Math.cos(theta[i]));
//     // y = Math.round(radius * Math.sin(theta[i]));
//     x = radius * Math.cos(radian);
//     y = radius * Math.sin(radian);
//     // }
//     return x;
//   }
//   function positionY(i) {
// const radian = i*( 2* Math.PI / 6)
//     var a: number = 0;
//     var x: number = 0;
//     var y: number = 0;
//     // for (let i = 0; i < Items.length; i++) {
//     console.log(radian);

//     a = (i * 360) / N + 90;
//     // x = Math.round(radius * Math.cos(theta[i]));
//     // y = Math.round(radius * Math.sin(theta[i]));
//     x = radius * Math.cos(radian);
//     y = radius * Math.sin(radian);
//     // }
//     return y;
//   }

//   return (
//     <>
//       <div className="circle min_circle">
//         {Items.map((item, id) => (
//           <div
//             className="skill"
//             data-id={id}
//             style={{ top: `${positionX(id)}px` , left: ` ${positionY(id)}px` }}
//           >
//             {/* <div className="skill "  style={{ top: `${positionX(id)}px` , left: ` ${positionY(id)}px` }}></div> */}
//             <div className="name">
//             {item.name}</div>
//             {/* {positionX(id)} */}
//           </div>
//         ))}

//         {/* <div className=" circle min_circle"></div> */}
//       </div>
//     </>
//   );
// }
// export default App;

import React, { useState } from "react";
import "./App.scss";
import RoleCircle from "./component/RoleCircle";
import SkillCircle from "./component/SkillCircle";



const App = () => {
  const yourData = [
    {
      name: "Финансовый аналитик",
      mainSkills: ["Excel", "SQL", "VBA", "1С"],
      otherSkills: ["Power BI", "Python"],
    },
    {
      name: "Предприниматель",
      mainSkills: ["1C", "Excel", "Power BI"],
      otherSkills: [
        "Google Analytics",
        "Яндекс.Метрика",
        "Python",
        "SQL",
        "Tilda",
      ],
    },
    {
      name: "Продуктовый дизайнер",
      mainSkills: [
        "Figma",
        "Sketch",
        "Illustrator",
        "Photoshop",
        "Principle",
        "Tilda",
      ],
      otherSkills: ["Shopify", "Protopie", "Cinema 4D"],
    },
    {
      name: "Менеджер проекта",
      mainSkills: [
        "Visio",
        "1C",
        "Google Analytics",
        "Яндекс.Метрика",
        "Python",
        "SQL",
        "Tilda",
      ],
      otherSkills: ["Figma", "Sketch", "Shopify"],
    },
    {
      name: "Финансовый менеджер",
      mainSkills: ["1C", "Excel", "Power BI"],
      otherSkills: ["BPMN"],
    },
    {
      name: "Руководитель финансового департамента компании",
      mainSkills: ["Sketch", "Figma"],
      otherSkills: ["Shopify", "HQL"],
    },

    {
      name: "Продуктовый аналитик",
      mainSkills: [
        "Google Analytics",
        "Яндекс.Метрика",
        "SQL",
        "Power BI",
        "Python",
        "Excel",
      ],
      otherSkills: ["HQL", "Tableau", "R", "Machine learning"],
    },

    {
      name: "Руководитель финансового продукта",
      mainSkills: ["Visio"],
      otherSkills: ["Python"],
    },
    {
      name: "Менеджер по маркетингу",
      mainSkills: [
        "Google Analytics",
        "Яндекс.Метрика",
        "Google Ads",
        "Ahrefs",
        "Главред",
        "My Target",
      ],
      otherSkills: ["Tilda", "Photoshop", "Xenu", "Python"],
    },

    {
      name: "Менеджер по цифровой трансформации",
      mainSkills: [
        "Visio",
        "Google Analytics",
        "Яндекс.Метрика",
        "Python",
        "SQL",
        "Tilda",
      ],
      otherSkills: ["Figma", "Sketch", "Shopify"],
    },
  ];

  const [rolesData, setRolesData] = useState(yourData); // replace yourData with the data you provided
  const [activeRole, setActiveRole] = useState(null);
  const [Item, mainSkills, otherSkills] = yourData;


const mainSkillsArray =yourData.mainSkills?.split(',')
console.log(otherSkills)
  const handleRoleClick = (role) => {
    setActiveRole(role);
    // Update rolesData to set the active state for the selected role
    const updatedRoles = rolesData.map((r) => ({
      ...r,
      isActive: r.name === role.name,
    }));
    setRolesData(updatedRoles);
  };

  return (
    <div className="diagram-container">
      <div className="inner-circle">
        {rolesData.map((role,id) => (
          <RoleCircle
            key={role.name}
            role={role}
            i={id}
            n={rolesData.length}
            onRoleClick={handleRoleClick}
          />
        ))}
      </div>
      <div className="outer-circle">
        {rolesData
          .flatMap((role) => role.mainSkills.concat(role.otherSkills))
          .map((skill, index) => (
            <SkillCircle
            i={index}
            // n={(mainSkills?.concat(otherSkills)).length}
              key={index}
              skill={skill}
              isActive={
                activeRole?.mainSkills.includes(skill) ||
                activeRole?.otherSkills.includes(skill)
              }
            />
          ))}
      </div>
    </div>
  );
};

export default App;
