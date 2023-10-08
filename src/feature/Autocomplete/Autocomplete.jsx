import { useEffect } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

import s from './Autocomplete.module.scss';

// eslint-disable-next-line react/prop-types
export const Autocomplete = ({ isLoaded, onSelect }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    init,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = e => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description })
        .then(results => {
          const { lat, lng } = getLatLng(results[0]);
          console.log('📍 Coordinates: ', { lat, lng });
          onSelect({ lat, lng });
        })
        .catch(error => {
          console.log('ERROR:', error);
        });
    };

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          className={s.listItem}
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [isLoaded, init]);

  return (
    <div className={s.root} ref={ref}>
      <input
        type="text"
        className="bg-transparent border border-gray-300 text-gray-200 text-sm rounded-lg block w-full p-2.5 hover:ring-gray-200"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Your location"
      />
      {status === 'OK' && (
        <ul className={s.suggestions}>{renderSuggestions()}</ul>
      )}
    </div>
  );
};
