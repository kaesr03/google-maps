import { User } from './User';
import { Company } from './Company';

/// <reference types="@types/google.maps" />

import { Map } from './Map';

const user = new User();
const company = new Company();
const customMap = new Map('map');

customMap.addMarker(user);
customMap.addMarker(company);

// (async () => {
//   const user = new User();
//   const customMap = new Map('map');
//   await customMap.addUsermarker(user);
// })();
