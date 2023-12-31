import { getAbilityType, hasRange } from './RollUtils';
import { weaponsData } from '../assets/data/weaponsData.js';
import { attacksData } from '../assets/data/attacksData.js';
import { weaponsDetailData } from '../assets/data/weaponDetailData.js';
import { weaponPropertiesData } from '../assets/data/weaponPropertiesData.js';

export const apiUrl = 'https://dnd-weapons.azurewebsites.net';

export const getWeaponsByName = async (search) => {
  return await fetch(`${apiUrl}/weapons/search?query=${search}`)
    .then((res) => res.json())
    .then((data) => data.sort((a, b) => a.name.localeCompare(b.name)))
    .catch((error) => {
      console.error('Error getting weapons', error);
      return weaponsData; // voorbeeld data als api niet werkt
    });
};

export const getWeapon = async (id) => {
  return await fetch(`${apiUrl}/weapons/${id}`)
    .then((res) => res.json())
    .catch((error) => {
      console.log(`Error getting weapon with id=${id}`, error);
      return weaponsDetailData; // voorbeeld data als api niet werkt
    });
};

export const getWeaponWithProperties = async (id) => {
  return await fetch(`${apiUrl}/weapons/${id}/properties`)
    .then((res) => res.json())
    .catch((error) => {
      console.log(`Error getting weapon with id=${id}`, error);
      return weaponPropertiesData; // voorbeeld data als api niet werkt
    });
};

export const putAttack = async (attack) => {
  const {
    id,
    name,
    damageModifier,
    abilityType,
    damageRolls,
    range,
    range: { rangeType, normalRange, longRange },
  } = attack;

  if (!hasRange(rangeType)) {
    range.normalRange = null;
    range.longRange = null;
  } else if (longRange < normalRange) {
    range.longRange = normalRange;
  }

  await fetch(`${apiUrl}/attacks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      damageModifier: damageModifier,
      abilityType: abilityType,
      damageRolls: damageRolls,
      range: range,
    }),
  }).catch((error) => {
    console.error('Error putting attack', error);
  });
};

export const postAttacks = async (weapon) => {
  const { attacks, damageModifier, properties } = weapon;
  for (let { name, range, damageRolls } of attacks) {
    await fetch(`${apiUrl}/attacks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        damageModifier: damageModifier,
        abilityType: getAbilityType(range, properties),
        damageRolls: damageRolls,
        range: range,
      }),
    }).catch((error) => {
      console.error('Error posting attack', error);
    });
  }
};

export const getAttacks = async () => {
  return await fetch(`${apiUrl}/attacks`)
    .then((res) => res.json())
    .then((data) => data.sort((a, b) => a.name.localeCompare(b.name)))
    .catch((error) => {
      console.log('Error getting attacks', error);
      return attacksData; // voorbeeld data als api niet werkt
    });
};

export const deleteAttack = async (id) => {
  await fetch(`${apiUrl}/attacks/${id}`, {
    method: 'DELETE',
  }).catch((error) => {
    console.error('Error deleting attack', error);
  });
};
