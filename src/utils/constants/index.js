export const OIDC = 'OIDC';
export const NONE = 'NONE';
export const AUTHENTICATION_TYPE_ENUM = [NONE, OIDC];

export const HOUSEHOLD = 'household';
export const BUSINESS = 'business';

export const COOKIE_CONSENT = 'cookie-consent';

export const READ_ONLY = 'readonly';
export const GUEST_USER = {
  lastName: 'Guest',
  firstName: 'Guest',
  id: 'Guest',
  roles: ['Guest'],
};
export const SIMPSONS = 'simpsons';
export const TIC = 'tic';
export const DEFAULT = 'default';
export const LOGEMENT = 'logement';
export const FAMILLE = 'famille';
export const BUSINESS_EXAMPLE = 'businessExample';
export const SUGG = 'sug';

export const QUESTIONNAIRE_EXAMPLES = [
  SIMPSONS,
  TIC,
  LOGEMENT,
  FAMILLE,
  SUGG,
  BUSINESS_EXAMPLE,
];

export const AUTHORIZED_ROLES = ['Guest', 'offline_access'];

export const QUESTIONNAIRE_EXAMPLE_URL = (q) =>
  `${window.location.origin}/static/questionnaire/${q}/form.json`;
export const METADATA_EXAMPLE_URL = (q) =>
  `${window.location.origin}/static/questionnaire/${q}/metadata.json`;
export const DATA_EXAMPLE_URL = (q) =>
  `${window.location.origin}/static/questionnaire/${q}/data.json`;

export const NOMENCLATURE_EXAMPLE_URL = (q) => {
  if (q === SUGG)
    return JSON.stringify({
      'cog-communes': `${window.location.origin}/static/nomenclature/communes-2019.json`,
    });
  return JSON.stringify({});
};
export const DEFAULT_DATA_URL = DATA_EXAMPLE_URL(DEFAULT);
export const DEFAULT_METADATA_URL = METADATA_EXAMPLE_URL(DEFAULT);
export const FULL_METADATA_URL = `${window.location.origin}/static/metadata/full.json`;
export const DEFAULT_NOMENCLATURE_URL = NOMENCLATURE_EXAMPLE_URL(DEFAULT);

export const FULL_OVERLOAD_EXAMPLE_URL = `${
  window.location.origin
}/visualize?questionnaire=${encodeURIComponent(
  QUESTIONNAIRE_EXAMPLE_URL(SIMPSONS)
)}&metadata=${encodeURIComponent(FULL_METADATA_URL)}`;

export * from './paradata';
