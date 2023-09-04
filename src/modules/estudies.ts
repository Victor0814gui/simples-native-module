import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  add: (a: number, b: number, callback: (value: number) => void) => void;
}

export default TurboModuleRegistry.get<Spec>(
  'Estudies'
) as Spec | null;