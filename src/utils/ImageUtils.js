// Images allemaal importeren omdat het anders niet werkt op android
import sword from '../assets/images/sword.png';
import bow from '../assets/images/bow.png';
import axe from '../assets/images/axe.png';
import knife from '../assets/images/knife.png';
import spear from '../assets/images/spear.png';
import hammer from '../assets/images/hammer.png';

export const getImagePath = (weaponType) => {
  switch (weaponType) {
    case 'Melee weapon':
      return hammer;
    case 'Ranged weapon':
      return bow;
    default:
      return sword;
  }
};
