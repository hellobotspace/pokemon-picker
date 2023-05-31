export interface Pokemon {
  name: string;
  abbreviation: string;
  type: PokemonType;
}

export enum PokemonType {
  allRounder = "allRounder",
  attacker = "attacker",
  defender = "defender",
  speedster = "speedster",
  supporter = "supporter",
}

export const pokemonTypes: PokemonType[] = Object.values(PokemonType);

export function getType2Poks(): Record<PokemonType, Pokemon[]> {
  var poks: Record<PokemonType, Pokemon[]> = {
    [PokemonType.allRounder]: [],
    [PokemonType.attacker]: [],
    [PokemonType.defender]: [],
    [PokemonType.supporter]: [],
    [PokemonType.speedster]: [],
  };
  for (const pok of pokemons) poks[pok.type].push(pok);
  return poks;
}

export var pokemons: Pokemon[] = [
  { type: PokemonType.attacker, name: "皮卡丘", abbreviation: "皮卡" },
  { type: PokemonType.attacker, name: "閃焰王牌", abbreviation: "閃焰" },
  { type: PokemonType.attacker, name: "妙蛙花", abbreviation: "妙蛙" },
  { type: PokemonType.attacker, name: "鋁鋼龍", abbreviation: "鋁鋼" },
  { type: PokemonType.attacker, name: "冰伊布", abbreviation: "冰伊" },
  { type: PokemonType.attacker, name: "妖火紅狐", abbreviation: "火狐" },
  { type: PokemonType.attacker, name: "太陽伊布", abbreviation: "太陽" },
  { type: PokemonType.attacker, name: "忍蛙", abbreviation: "忍蛙" },
  { type: PokemonType.attacker, name: "古月鳥", abbreviation: "古月" },
  { type: PokemonType.attacker, name: "沙奈朵", abbreviation: "沙奈" },
  { type: PokemonType.attacker, name: "仙子伊布", abbreviation: "仙子" },
  { type: PokemonType.attacker, name: "樹梟", abbreviation: "樹梟" },
  { type: PokemonType.attacker, name: "夢幻", abbreviation: "夢幻" },
  { type: PokemonType.attacker, name: "多龍", abbreviation: "多龍" },
  { type: PokemonType.attacker, name: "九尾", abbreviation: "九尾" },
  { type: PokemonType.attacker, name: "水晶燈", abbreviation: "水晶" },
  { type: PokemonType.allRounder, name: "怪力", abbreviation: "怪力" },
  { type: PokemonType.allRounder, name: "烈咬陸鯊", abbreviation: "鯊魚" },
  { type: PokemonType.allRounder, name: "噴火龍", abbreviation: "噴火" },
  { type: PokemonType.allRounder, name: "蒼響", abbreviation: "蒼響" },
  { type: PokemonType.allRounder, name: "甜冷", abbreviation: "甜冷" },
  { type: PokemonType.allRounder, name: "路卡", abbreviation: "路卡" },
  { type: PokemonType.allRounder, name: "快龍", abbreviation: "快龍" },
  { type: PokemonType.allRounder, name: "劍怪", abbreviation: "劍怪" },
  { type: PokemonType.allRounder, name: "瑪力露麗", abbreviation: "瑪力" },
  { type: PokemonType.allRounder, name: "爆肌蚊", abbreviation: "蚊子" },
  { type: PokemonType.allRounder, name: "班基拉斯", abbreviation: "班基" },
  { type: PokemonType.allRounder, name: "螳螂", abbreviation: "螳螂" },
  { type: PokemonType.allRounder, name: "雄獅", abbreviation: "雄獅" },
  { type: PokemonType.defender, name: "岩殿居蟹", abbreviation: "螃蟹" },
  { type: PokemonType.defender, name: "朽木妖", abbreviation: "木妖" },
  { type: PokemonType.defender, name: "象牙豬", abbreviation: "象牙" },
  { type: PokemonType.defender, name: "呆殼獸", abbreviation: "呆殼" },
  { type: PokemonType.defender, name: "藏飽栗鼠", abbreviation: "栗鼠" },
  { type: PokemonType.defender, name: "水箭龜", abbreviation: "水箭" },
  { type: PokemonType.defender, name: "卡比獸", abbreviation: "卡比" },
  { type: PokemonType.defender, name: "黏美龍", abbreviation: "黏美" },
  { type: PokemonType.defender, name: "拉普拉斯", abbreviation: "乘龍" },
  { type: PokemonType.supporter, name: "環環", abbreviation: "環環" },
  { type: PokemonType.supporter, name: "勾魂眼", abbreviation: "勾魂" },
  { type: PokemonType.supporter, name: "幸福蛋", abbreviation: "幸福" },
  { type: PokemonType.supporter, name: "胖可丁", abbreviation: "胖可" },
  { type: PokemonType.supporter, name: "魔牆", abbreviation: "魔牆" },
  { type: PokemonType.supporter, name: "白蓬蓬", abbreviation: "白蓬" },
  { type: PokemonType.supporter, name: "胡帕", abbreviation: "胡帕" },
  { type: PokemonType.supporter, name: "皮皮", abbreviation: "皮皮" },
  { type: PokemonType.speedster, name: "捷拉奧拉", abbreviation: "捷拉" },
  { type: PokemonType.speedster, name: "索羅雅克", abbreviation: "索羅" },
  { type: PokemonType.speedster, name: "耿鬼", abbreviation: "耿鬼" },
  { type: PokemonType.speedster, name: "阿勃", abbreviation: "阿勃" },
  { type: PokemonType.speedster, name: "烈箭鷹", abbreviation: "烈箭" },
  { type: PokemonType.speedster, name: "嘟嘟", abbreviation: "嘟嘟" },
];

// var datas: Record<PokemonType, Pokemon[]> = {
//   attacker: [
//     { name: "皮卡丘", abbreviation: "皮卡", type: "attacker" },
//     { name: "閃焰王牌", abbreviation: "閃焰", type: "attacker" },
//     { name: "妙蛙花", abbreviation: "妙蛙", type: "attacker" },
//     { name: "鋁鋼龍", abbreviation: "鋁鋼", type: "attacker" },
//     { name: "冰伊布", abbreviation: "冰伊", type: "attacker" },
//     { name: "妖火紅狐", abbreviation: "火狐", type: "attacker" },
//     { name: "太陽伊布", abbreviation: "太陽", type: "attacker" },
//     { name: "忍蛙", abbreviation: "忍蛙", type: "attacker" },
//     { name: "古月鳥", abbreviation: "古月", type: "attacker" },
//     { name: "沙奈朵", abbreviation: "沙奈", type: "attacker" },
//     { name: "仙子伊布", abbreviation: "仙子", type: "attacker" },
//     { name: "樹梟", abbreviation: "樹梟", type: "attacker" },
//     { name: "夢幻", abbreviation: "夢幻", type: "attacker" },
//     { name: "多龍", abbreviation: "多龍", type: "attacker" },
//     { name: "九尾", abbreviation: "九尾", type: "attacker" },
//   ],
//   allRounder: [],
//   defender: [],
//   speedster: [],
//   supporter: [],
// };
