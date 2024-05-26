const generateUrl = (relativeUrl: string) => {
  return new URL(relativeUrl, process.env.NEXT_PUBLIC_APP_BASE_URL);
};

export const PUBLIC_PAGES_FOR_LOGGED_OUT_USERS_ONLY = {
  registration: generateUrl("registration"),
  verification: generateUrl("verification"),
};

export const PUBLIC_PAGES_FOR_LOGGED_OUT_AND_LOGGED_IN_USERS = {};

export const PUBLIC_PAGES = {
  ...PUBLIC_PAGES_FOR_LOGGED_OUT_USERS_ONLY,
  ...PUBLIC_PAGES_FOR_LOGGED_OUT_AND_LOGGED_IN_USERS,
};

export const PRIVATE_PAGES = {
  dashboard: generateUrl("dashboard"),
  profile: generateUrl("profile"),
};

export const ALL_PRIVATE_PAGES = {
  ...PRIVATE_PAGES,
};

export const PAGES = {
  ...PUBLIC_PAGES,
  ...ALL_PRIVATE_PAGES,
};

export const pathsOf = (pages: Partial<typeof PAGES>): string[] =>
  Object.values(pages).map((page) => page.pathname);

export const pageNamesOf = (
  pages: Partial<typeof PAGES>
): (keyof typeof pages)[] => Object.keys(pages) as (keyof typeof pages)[];

export const firstPathSegmentIsIdentical = (path1: string, path2: string) =>
  path1.split("/")[1] === path2.split("/")[1];
