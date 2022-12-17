import { faPlusCircle, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import { UILabel } from '../ui-label';
import styles from './styles.module.scss';

interface InputUploadProps {
  onChange: (file: ImageUpload) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  id?: string;
  name?: string;
  error?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  customClass?: string;
  label?: string;
  accept?: string;
  multiple?: boolean;
  file: ImageUpload;
}

export type ImageUpload = {
  file: File | null | any;
  imagePreviewUrl: string;
  fileLoaded: boolean;
};

export const UIImageUploader = React.forwardRef<HTMLInputElement, InputUploadProps>(
  (
    {
      onChange,
      placeholder,
      id,
      name,
      onBlur,
      error,
      onClick,
      customClass,
      label,
      accept = 'image/*',
      multiple,
      file,
    },
    ref,
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        let image = e.target.files[0];
        const formData = new FormData();
        formData.append('image', image);
        onChange({
          file: formData,
          imagePreviewUrl: URL.createObjectURL(image),
          fileLoaded: true,
        });
      }
    };

    const removeImage = () => {
      onChange({ file: null, imagePreviewUrl: '', fileLoaded: false });
    };

    return (
      <div className={styles.uploadWrapper}>
        {!file?.fileLoaded ? (
          <div className={styles.shUploadInput}>
            {label && (
              <UILabel htmlFor={id ? id : ''}>
                <FontAwesomeIcon icon={faPlusCircle} color="#fff" size="2xl" />
              </UILabel>
            )}
            <input
              id={id}
              onBlur={onBlur}
              name={name}
              type="file"
              onChange={handleChange}
              className={clsx(styles.root, customClass, { [styles.error]: error })}
              ref={ref}
              placeholder={placeholder}
              onClick={onClick}
              accept={accept}
              multiple={multiple}
              value=""
            />
            {error && <span className={styles.errorTxt}>{error}</span>}
          </div>
        ) : (
          <>
            <div className={styles.preview}>
              <img src={file?.imagePreviewUrl as string} alt={file?.file?.name as string} />
            </div>
            <div className={styles.removeBtn} onClick={removeImage}>
              <FontAwesomeIcon icon={faRemove} color="red" size="2xs" />
            </div>
          </>
        )}
      </div>
    );
  },
);
