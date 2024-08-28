import { rgb } from 'color-convert';

type UpdateHEXColorAction = {
  type: 'update-hex-color';
  payload: {
    hexColor: string;
  };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: {
    rgb: [number, number, number];
  };
};

type ColorActions = UpdateHEXColorAction | UpdateRGBColorAction;

type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BAD555',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: ColorActions,
) => {
  switch (action.type) {
    case 'update-hex-color': {
      const { hexColor } = action.payload;
      return {
        ...state,
        hexColor,
      };
    }

    case 'update-rgb-color': {
      const hexColor = rgb.hex(action.payload.rgb);
      return {
        ...state,
        hexColor,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
