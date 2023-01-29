import { InfinitySpin } from 'react-loader-spinner';

import styles from './Loader.module.css';
const Loader = () => {
  return (
    <div className={styles.loaderSpam}>
      <InfinitySpin width="200" color="white" />
    </div>
  );
};
export default Loader;
