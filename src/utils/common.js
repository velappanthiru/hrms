// import { appAxios } from './axios-base-utils';


import avatar1 from "../images/avatars/1.jpg";
import avatar2 from "../images/avatars/2.jpg";
import avatar3 from "../images/avatars/3.jpg";
import avatar4 from "../images/avatars/4.jpg";
import avatar6 from "../images/avatars/6.jpg";
import avatar7 from "../images/avatars/7.jpg";
import avatar8 from "../images/avatars/8.jpg";
import avatar9 from "../images/avatars/9.jpg";
import avatar11 from "../images/avatars/11.jpg";
import avatar12 from "../images/avatars/12.jpg";
import avatar13 from "../images/avatars/13.jpg";
import avatar14 from "../images/avatars/14.jpg";
import avatar15 from "../images/avatars/15.jpg";

export const avatarImgs = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
];

const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export const stringAvatar = (name) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },

    children: `${name.split(' ')[0][0]}${name.split(' ')[0][1]}`,
  };
}

export const avatarColors = [
  "#ffdd00",
  "#fbb034",
  "#ff4c4c",
  "#c1d82f",
  "#f48924",
  "#7ac143",
  "#30c39e",
  "#06BCAE",
  "#0695BC",
  "#037ef3",
  "#146eb4",
  "#8e43e7",
  "#ea1d5d",
  "#fc636b",
  "#ff6319",
  "#e01f3d",
  "#a0ac48",
  "#00d1b2",
  "#472f92",
  "#388ed1",
  "#a6192e",
  "#4a8594",
  "#7B9FAB",
  "#1393BD",
  "#5E13BD",
  "#E208A7",
];

export function _getAvatarRd() {
  return avatarImgs[Math.floor(Math.random() * avatarImgs.length)];
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
