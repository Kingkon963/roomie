// eslint-disable-next-line import/no-unresolved
import PropertyPanel from './propertyPanel';
// eslint-disable-next-line import/no-unresolved
import ObjectPanel from './objectPanel';

import styles from '../styles/rightPanel.module.scss';

export default function RightPanel() {
  return (
    <div className={styles.rightPanel}>
      <PropertyPanel />

      <ObjectPanel />
    </div>
  );
}
