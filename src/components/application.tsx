import { useReducer } from 'react';
import SavedColors from './saved-colors';
import RelatedColors from './related-colors';
import AdjustColors from './adjust-colors';
import ColorPicker from './color-picker';
import { colorReducer, initialState } from '../colors-reducers';

const Application = () => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 p-8 pb-40 dark:bg-slate-900 dark:text-white sm:grid-cols-2">
      <ColorPicker
        hexColor={hexColor}
        onChange={(e) =>
          dispatch({
            type: 'update-hex-color',
            payload: { hexColor: e.target.value },
          })
        }
      />
      <AdjustColors hexColor={hexColor} />
      <RelatedColors hexColor={hexColor} />
      <SavedColors hexColor={hexColor} />
    </div>
  );
};

export default Application;
