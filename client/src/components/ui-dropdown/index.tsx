import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import styles from './styles.module.scss';
import { SortTypes } from '../../redux/slices/posts/types';

interface DropdownProps {
  list: SortTypes[];
  selected: SortTypes;
  onSetSort: (obj: SortTypes) => void;
}

type PopupClick = MouseEvent & {
  path: Node[];
};

export const UIDropdown: React.FC<DropdownProps> = React.memo(({ list, selected, onSetSort }) => {
  const [visibleList, setVisibleList] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const toggleSelectItem = (obj: SortTypes) => {
    onSetSort(obj);
    setVisibleList(false);
  };

  useEffect(() => {
    const clickOffSortPopup = (event: MouseEvent) => {
      const _event = event as PopupClick;
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setVisibleList(false);
      }
    };

    document.body.addEventListener('click', clickOffSortPopup);

    return () => document.body.removeEventListener('click', clickOffSortPopup);
  }, []);

  return (
    <div ref={sortRef} className={styles.uiDropdown}>
      <div className={styles.sortLabel}>
        <span>
          <b className={clsx(styles.caret, { [styles.caretActive]: visibleList })}>
            <FontAwesomeIcon icon={faCaretDown} />
            Sort By:
          </b>
          <span onClick={() => setVisibleList(!visibleList)} className={styles.selectSort}>
            {selected.label}
          </span>
        </span>
      </div>
      <ul className={clsx(styles.sortList, { [styles.visibleList]: visibleList })}>
        {list &&
          list.map((el, index) => {
            return (
              <li
                key={`${el.name}_${index}`}
                onClick={() => toggleSelectItem(el)}
                className={clsx(styles.sortListItem, {
                  [styles.active]: selected.label === el.label,
                })}>
                {el.label}
              </li>
            );
          })}
      </ul>
    </div>
  );
});
