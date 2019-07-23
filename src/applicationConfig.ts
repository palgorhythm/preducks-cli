import * as interfaces from './InterfaceDefinitions';
import cloneDeep from './cloneDeep';
import {storeConfigTTTMultiReducer} from './dummyData';

const appComponent: interfaces.ComponentInt = {
  id: 1,
  stateful: false,
  componentState: [],
  title: 'App',
  color: '#FF6D00',
  props: [],
  nextPropId: 1,
  childrenArray: [],
  nextChildId: 1,
  focusChildId: 0,
  selectors: [],
  actions: [],
};

const initialApplicationFocusChild: interfaces.ChildInt = {
  childId: 0,
  componentName: null,
  childType: null,
  childSort: 0,
  childComponentId: 0,
  color: null,
  htmlElement: null,
  HTMLInfo: null,
};

const applicationConfig: interfaces.ApplicationStateInt = {
  totalComponents: 1,
  nextId: 2,
  successOpen: false,
  errorOpen: false,
  focusComponent: appComponent,
  selectableChildren: [],
  ancestors: [],
  initialApplicationFocusChild,
  focusChild: cloneDeep<interfaces.ChildInt>(initialApplicationFocusChild),
  components: [appComponent],
  appDir: '',
  loading: false,
  storeConfig: storeConfigTTTMultiReducer,
};

export default applicationConfig;