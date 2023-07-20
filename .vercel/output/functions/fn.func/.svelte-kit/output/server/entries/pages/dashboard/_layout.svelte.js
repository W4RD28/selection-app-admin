import { c as create_ssr_component, d as compute_rest_props, f as spread, g as escape_object, h as escape_attribute_value, i as add_attribute, e as escape, j as compute_slots, b as subscribe, v as validate_component } from "../../../chunks/index2.js";
/* empty css                   */import { p as page } from "../../../chunks/stores.js";
import classNames from "classnames";
/* empty css                                                       */const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["asideClass"]);
  let { asideClass = "w-64" } = $$props;
  if ($$props.asideClass === void 0 && $$bindings.asideClass && asideClass !== void 0)
    $$bindings.asideClass(asideClass);
  return `<aside${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(asideClass, $$props.class))
      },
      { "aria-label": "Sidebar" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</aside>

`;
});
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "href", "label", "spanClass", "activeClass", "active"]);
  let $$slots = compute_slots(slots);
  let { aClass = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { spanClass = "ml-3" } = $$props;
  let { activeClass = "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { active = false } = $$props;
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(classNames(active ? activeClass : aClass, $$props.class))
      }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``}
    <span${add_attribute("class", spanClass, 0)}>${escape(label)}</span>
    ${$$slots.subtext ? `${slots.subtext ? slots.subtext({}) : ``}` : ``}</a></li>

`;
});
const SidebarBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["site", "aClass", "imgClass", "spanClass"]);
  let { site } = $$props;
  let { aClass = "flex items-center pl-2.5 mb-5" } = $$props;
  let { imgClass = "h-6 mr-3 sm:h-7" } = $$props;
  let { spanClass = "self-center text-xl font-semibold whitespace-nowrap dark:text-white" } = $$props;
  if ($$props.site === void 0 && $$bindings.site && site !== void 0)
    $$bindings.site(site);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(site.href) },
      {
        class: escape_attribute_value(classNames(aClass, $$props.class))
      }
    ],
    {}
  )}><img${add_attribute("src", site.img, 0)}${add_attribute("class", imgClass, 0)}${add_attribute("alt", site.name, 0)}>
  <span${add_attribute("class", spanClass, 0)}>${escape(site.name)}</span></a>

`;
});
const SidebarGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ulClass", "borderClass", "border"]);
  let { ulClass = "space-y-2" } = $$props;
  let { borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700" } = $$props;
  let { border = false } = $$props;
  if (border) {
    ulClass += " " + borderClass;
  }
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  return `<ul${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(ulClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul>

`;
});
const SidebarWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass = "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(divClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>

`;
});
const logo = "/_app/immutable/assets/logo1.5de1a29a.svg";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const site = {
    name: "Digmar Admin",
    href: "/dashboard/users",
    img: logo
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  activeUrl = $page.url.pathname;
  $$unsubscribe_page();
  return `<div class="flex flex-cols-2 h-full">${validate_component(Sidebar, "Sidebar").$$render(
    $$result,
    {
      asideClass: "min-w-3/5 bg-gray-50",
      class: "flex border-solid border-2 border-sky-300 rounded-md"
    },
    {},
    {
      default: () => {
        return `${validate_component(SidebarWrapper, "SidebarWrapper").$$render($$result, { class: "w-full max-h-full min-h-screen" }, {}, {
          default: () => {
            return `${validate_component(SidebarBrand, "SidebarBrand").$$render($$result, { site }, {}, {})}
      ${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(SidebarItem, "SidebarItem").$$render(
                  $$result,
                  {
                    label: "Pengguna",
                    href: "/dashboard/users",
                    active: activeUrl === "/dashboard/users"
                  },
                  {},
                  {}
                )}
        ${validate_component(SidebarItem, "SidebarItem").$$render(
                  $$result,
                  {
                    label: "Pengumuman",
                    href: "/dashboard/announcements",
                    active: activeUrl === "/dashboard/announcements"
                  },
                  {},
                  {}
                )}
        ${validate_component(SidebarItem, "SidebarItem").$$render(
                  $$result,
                  {
                    label: "Pertanyaan Tes Tulis",
                    href: "/dashboard/questions",
                    active: activeUrl === "/dashboard/questions"
                  },
                  {},
                  {}
                )}
        ${validate_component(SidebarItem, "SidebarItem").$$render(
                  $$result,
                  {
                    label: "Administrasi",
                    href: "/dashboard/administration",
                    active: activeUrl === "/dashboard/administration"
                  },
                  {},
                  {}
                )}
        ${validate_component(SidebarItem, "SidebarItem").$$render(
                  $$result,
                  {
                    label: "Tes Tertulis",
                    href: "/dashboard/exam-results",
                    active: activeUrl === "/dashboard/exam-results"
                  },
                  {},
                  {}
                )}
        ${validate_component(SidebarItem, "SidebarItem").$$render(
                  $$result,
                  {
                    label: "Wawancara",
                    href: "/dashboard/interview",
                    active: activeUrl === "/dashboard/interview"
                  },
                  {},
                  {}
                )}
        ${validate_component(SidebarItem, "SidebarItem").$$render(
                  $$result,
                  {
                    label: "Hasil Ujian",
                    href: "/dashboard/results",
                    active: activeUrl === "/dashboard/results"
                  },
                  {},
                  {}
                )}
        ${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Logout" }, {}, {})}`;
              }
            })}`;
          }
        })}`;
      }
    }
  )}
  
  ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
