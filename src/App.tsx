import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import RoleCircle from "./component/RoleCircle";
import SkillCircle from "./component/SkillCircle";
import { calculateLineCoords } from "./utils/sharedFunctions";
import { yourData } from "./data/data";
// import {Role} from './@types/types';

interface Role {
  name: string;
  mainSkills: string[];
  otherSkills: string[];
  isActive?: boolean;
}
function translit(word) {
  var answer = "";
  var converter = {
    // 'C':'С',
    // 'Q': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
    // 'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
    // 'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
    // 'о': 'o',    'п': 'p',    'р': 'r',    'с': 'c',    'т': 't',
    // 'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
    // 'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
    // 'э': 'e',    'ю': 'yu',   'я': 'ya',

    // 'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
    // 'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
    // 'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
    // 'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'C',    'Т': 'T',
    // 'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
    // 'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
    // 'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'

    // C: "С",
    С: "C",
  };

  for (var i = 0; i < word.length; i++) {
    if (converter[word[i]] == undefined) {
      answer += word[i];
    } else {
      answer += converter[word[i]];
    }
  }
  // console.log(answer)
  return answer;
}
const App = () => {
  const [rolesData, setRolesData] = useState(yourData); // replace yourData with the data you provided
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
    // console.log(skillsMap);
    return skillsMap;
  }

  function getUniqueSkills(professions) {
    const allSkills = new Set(); // Используем Set для хранения уникальных навыков

    professions.forEach((profession) => {
      profession.mainSkills.forEach((skill) => {
        if (skill === translit(skill)) {
          console.log(skill);
          allSkills.add(skill); // Добавляем каждый навык в Set, автоматически убирая дубликаты
        }
        // allSkills.add(skill); // Добавляем каждый навык в Set, автоматически убирая дубликаты
      });
      profession.otherSkills.forEach((skill) => {
        if (skill === translit(skill)) {
          console.log(skill);
          allSkills.add(skill); // Добавляем каждый навык в Set, автоматически убирая дубликаты
        }
        // allSkills.add(skill); // Добавляем каждый навык в Set, автоматически убирая дубликаты
      });
    });

    return Array.from(allSkills); // Преобразуем Set обратно в массив и возвращаем его
  }
  const allSkills = mapSkillsToProfessions(yourData);
  const prof = getUniqueSkills(yourData);

  const handleRoleClick = (role) => {
    setActiveRole(role);
    // Update rolesData to set the active state for the selected role
    const updatedRoles = rolesData.map((r) => ({
      ...r,
      isActive: r.name === role.name,
    }));
    setRolesData(updatedRoles);
  };

  //-====
  const [activeRole, setActiveRole] = useState<Role | null>(null);
  const [lineCoordsOther, setLineCoordsOther] = useState<Coord[]>([]);
  const [lineCoords, setLineCoords] = useState<Coord[]>([]);
  const rolesRef = useRef<{ [key: string]: HTMLDivElement }>({});
  const skillsRef = useRef<{ [key: string]: HTMLDivElement }>({});

  // Update line coordinates when activeRole changes
  useEffect(() => {
    if (activeRole) {
      const coords = activeRole.mainSkills?.map((skill) => {
        return calculateLineCoords(
          rolesRef.current[activeRole?.name],
          skillsRef.current[translit(skill)],
          "#FF7A00"
        );
      });
      // console.log(coords)
      setLineCoords(coords);
   
      const coordsOther = activeRole?.otherSkills?.map((skill) => {
        return calculateLineCoords(
          rolesRef?.current[activeRole?.name],
          skillsRef?.current[translit(skill)],
   
          "#8F59B9"
        );
       
      
    });
    // console.log(coordsOther)
    setLineCoordsOther(coordsOther);
    }
  }, [activeRole]);

  return (
    <div className="diagram-container">
      <svg className="lines" width="100%" height="100%">
        <g>
          {lineCoords?.map((coord, index) => (
            <path
              key={index}
              d={coord}
              stroke="#FF7A00"
              fill="transporant"
              strokeWidth="2"
            />
          ))}
        </g>
      </svg>
      <svg className="lines" width="100%" height="100%">
        <g>
          {lineCoordsOther?.map((coord, index) => (
            <path
              key={index}
              d={coord}
              stroke="#8F59B9"
              fill="transporant"
              strokeWidth="2"
            />
          ))}
        </g>
      </svg>
      <div className="inner-circle">
        {rolesData.map((role, id) => (
          <RoleCircle
            key={role.name}
            role={role}
            i={id}
            n={rolesData.length}
            onRoleClick={handleRoleClick}
            ref={(el) => (rolesRef.current[role.name] = el!)}
          />
        ))}
      </div>
      <div className="outer-circle">
        {/* {rolesData
          .flatMap((role) => role.mainSkills.concat(role.otherSkills)) */}

        {prof.map((skill, index) => (
          <SkillCircle
            i={index}
            key={index}
            ref={(el) => (skillsRef.current[skill] = el!)}
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
