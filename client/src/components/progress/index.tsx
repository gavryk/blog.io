import clsx from 'clsx';
import styles from './styles.module.scss';

interface ProgressProps {
  position?: 'top' | 'bottom';
}

export const Progress: React.FC<ProgressProps> = ({ position = 'top' }) => {
  return (
    <div className={clsx(styles.progressBar, styles[position])}>
      <span className={styles.progress}></span>
    </div>
  );
};
