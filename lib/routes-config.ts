export type EachRoute = {
  title: string;
  href: `/${string}`;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Web Programming",
    href: "/web-programming",
    noLink: true,
    items: [
      {
        title: "Pertemuan 1: HTML Dasar",
        href: "/pertemuan-1",
      },
      {
        title: "Pertemuan 2: CSS Dasar",
        href: "/pertemuan-2",
      },
      {
        title: "Pertemuan 3: React JS + Vite untuk Note App",
        href: "/pertemuan-3",
      },
      {
        title: "Pertemuan 4: State Management Dasar",
        href: "/pertemuan-4",
      },
      {
        title: "Pertemuan 5: Form, Validasi, dan List Rendering di React",
        href: "/pertemuan-5",
      },
      {
        title: "Pertemuan 6: Coming Soon",
        href: "/pertemuan-6",
      },
      {
        title: "Pertemuan 7: Coming Soon",
        href: "/pertemuan-7",
      },
      {
        title: "Pertemuan 8: Coming Soon",
        href: "/pertemuan-8",
      },
      {
        title: "Pertemuan 9: Coming Soon",
        href: "/pertemuan-9",
      },
      {
        title: "Pertemuan 10: Coming Soon",
        href: "/pertemuan-10",
      },
      {
        title: "Pertemuan 11: Coming Soon",
        href: "/pertemuan-11",
      },
      {
        title: "Pertemuan 12: Coming Soon",
        href: "/pertemuan-12",
      },
      {
        title: "Pertemuan 13: Coming Soon",
        href: "/pertemuan-13",
      },
      {
        title: "Pertemuan 14: Coming Soon",
        href: "/pertemuan-14",
      },
      {
        title: "Pertemuan 15: Coming Soon",
        href: "/pertemuan-15",
      },
      {
        title: "Pertemuan 16: Coming Soon",
        href: "/pertemuan-16",
      },
    ],
  },
];

type Page = { title: string; href: string };

function normalizeRouteHref(href: string): `/${string}` {
  const trimmed = href.trim();
  if (!trimmed) {
    throw new Error("Route href tidak boleh kosong");
  }
  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const normalized =
    withLeadingSlash.length > 1
      ? withLeadingSlash.replace(/\/+$/, "")
      : withLeadingSlash;
  if (normalized.includes("//")) {
    throw new Error(`Route href tidak valid: ${href}`);
  }
  return normalized as `/${string}`;
}

function joinRouteHref(
  parentHref: `/${string}`,
  childHref: `/${string}`,
): `/${string}` {
  if (parentHref === "/") return normalizeRouteHref(childHref);
  const joined = `${parentHref}/${childHref.replace(/^\/+/, "")}`;
  return normalizeRouteHref(joined);
}

function validateRouteNode(
  node: EachRoute,
  fullHref: `/${string}`,
  seen: Set<string>,
) {
  if (!node.title.trim()) {
    throw new Error(`Route title tidak boleh kosong: ${fullHref}`);
  }
  if (seen.has(fullHref)) {
    throw new Error(`Duplikat route terdeteksi: ${fullHref}`);
  }
  seen.add(fullHref);
}

function getRecursiveAllLinks(
  node: EachRoute,
  parentHref?: `/${string}`,
  seen = new Set<string>(),
): Page[] {
  const currentHref = parentHref
    ? joinRouteHref(parentHref, normalizeRouteHref(node.href))
    : normalizeRouteHref(node.href);

  validateRouteNode(node, currentHref, seen);

  const links: Page[] = [];
  if (!node.noLink) {
    links.push({ title: node.title, href: currentHref });
  }
  if (!node.items?.length) {
    return links;
  }

  for (const item of node.items) {
    links.push(...getRecursiveAllLinks(item, currentHref, seen));
  }
  return links;
}

export const page_routes = ROUTES.flatMap((route) =>
  getRecursiveAllLinks(route),
);
