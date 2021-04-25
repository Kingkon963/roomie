// eslint-disable-next-line import/no-unresolved
import PropertyPanel from './propertyPanel';
// eslint-disable-next-line import/no-unresolved
import ObjectPanel from './objectPanel';

export default function RightPanel() {
  return (
    <div>
      <PropertyPanel />
      <ObjectPanel />
    </div>
  );
}
