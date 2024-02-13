import React, { useState } from "react";
import "./App.scss";
import RoleCircle from "./component/RoleCircle";
import SkillCircle from "./component/SkillCircle";

const App = () => {
  const yourData = [
    {
      name: "Финансовый аналитик",
      mainSkills: ["Excel", "SQL", "VBA", "1C"],
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

  function mapSkillsToProfessions(professions) {
    const skillsMap = {};

    professions.forEach((profession) => {
      profession.mainSkills.forEach((skill) => {
        // Проверяем, существует ли уже такой навык в нашем объекте
        if (!skillsMap[skill]) {
          skillsMap[skill] = [profession.name]; // Если нет, создаем новый массив с названием профессии
        } else {
          // Если навык уже есть, добавляем название профессии в существующий массив,
          // только если это название еще не было добавлено (чтобы избежать дубликатов)
          if (!skillsMap[skill].includes(profession.name)) {
            skillsMap[skill].push(profession.name);
          }
        }
      });
    });
    return skillsMap;
  }

  function getUniqueSkills(professions) {
    const allSkills = new Set(); // Используем Set для хранения уникальных навыков

    professions.forEach((profession) => {
      profession.mainSkills.forEach((skill) => {
        allSkills.add(skill); // Добавляем каждый навык в Set, автоматически убирая дубликаты
      });
    });

    return Array.from(allSkills); // Преобразуем Set обратно в массив и возвращаем его
  }
  const allSkills = mapSkillsToProfessions(yourData);
  const prof = getUniqueSkills(yourData);
  console.log(prof.length);
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
        {rolesData.map((role, id) => (
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
              n={prof.length}
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
