// Images allemaal importeren omdat het anders niet werkt op android
import axe from '../assets/images/axe.png';
import blowgun from '../assets/images/blowgun.png';
import bow from '../assets/images/bow.png';
import crossbow from '../assets/images/crossbow.png';
import dart from '../assets/images/dart.png';
import glaive from '../assets/images/glaive.png';
import hammer from '../assets/images/hammer.png';
import knife from '../assets/images/knife.png';
import mace from '../assets/images/mace.png';
import pickaxe from '../assets/images/pickaxe.png';
import spear from '../assets/images/spear.png';
import staff from '../assets/images/staff.png';
import sword from '../assets/images/sword.png';
import trident from '../assets/images/trident.png';
import whip from '../assets/images/whip.png';

export const getImagePath = (weaponType) => {
  switch (weaponType) {
    case 'Axe':
      return axe;
    case 'Blowgun':
      return blowgun;
    case 'Bow':
      return bow;
    case 'Crossbow':
      return crossbow;
    case 'Dart':
      return dart;
    case 'Glaive':
      return glaive;
    case 'Hammer':
      return hammer;
    case 'Knife':
      return knife;
    case 'Mace':
      return mace;
    case 'Pickaxe':
      return pickaxe;
    case 'Spear':
      return spear;
    case 'Staff':
      return staff;
    case 'Sword':
      return sword;
    case 'Trident':
      return trident;
    case 'Whip':
      return whip;
    case 'Melee weapon':
      return sword;
    case 'Ranged weapon':
      return bow;
    default:
      return sword;
  }
};
