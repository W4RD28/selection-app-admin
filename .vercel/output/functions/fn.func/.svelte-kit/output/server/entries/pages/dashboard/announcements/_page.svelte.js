import { c as create_ssr_component, v as validate_component, o as each, e as escape } from "../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../chunks/Heading.js";
import { B as ButtonGroup } from "../../../../chunks/ButtonGroup.js";
/* empty css                                                          */import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../chunks/TableHeadCell.js";
import { A } from "../../../../chunks/A.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let announcementsData;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ announcementsData } = data);
  return `${$$result.head += `<!-- HEAD_svelte-1merx10_START -->${$$result.title = `<title>Dashboard Pengumuman</title>`, ""}<!-- HEAD_svelte-1merx10_END -->`, ""}

<div class="ml-10 mt-5 w-3/4">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
    default: () => {
      return `Dashboard Pengumuman`;
    }
  })}
  ${validate_component(Table, "Table").$$render($$result, { tiled: true }, {}, {
    default: () => {
      return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `ID`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Judul`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Isi`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Tanggal`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Aksi`;
            }
          })}`;
        }
      })}
    ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
        default: () => {
          return `${each(announcementsData, (announcement) => {
            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(announcement.id)}`;
                  }
                })}
          ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(announcement.title)}`;
                  }
                })}
          ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(announcement.content.slice(0, 50) + "...")}`;
                  }
                })}
          ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(new Date(announcement.created_at).toLocaleDateString("id-ID"))}`;
                  }
                })}
          ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Button, "Button").$$render(
                          $$result,
                          {
                            color: "blue",
                            target: "_blank",
                            href: "/dashboard/announcements/" + announcement.id
                          },
                          {},
                          {
                            default: () => {
                              return `Edit`;
                            }
                          }
                        )}
              ${validate_component(Button, "Button").$$render($$result, { color: "red" }, {}, {
                          default: () => {
                            return `Hapus`;
                          }
                        })}
            `;
                      }
                    })}
          `;
                  }
                })}
        `;
              }
            })}`;
          })}
      ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(A, "A").$$render(
                    $$result,
                    {
                      href: "/dashboard/announcements/create",
                      target: "_blank"
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
                          default: () => {
                            return `Tambahkan Pengumuman`;
                          }
                        })}`;
                      }
                    }
                  )}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
