import { c as create_ssr_component, v as validate_component, o as each, e as escape } from "../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../chunks/Heading.js";
import { B as ButtonGroup } from "../../../../chunks/ButtonGroup.js";
/* empty css                                                          */import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../chunks/TableHeadCell.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let usersData;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ usersData } = data);
  return `${$$result.head += `<!-- HEAD_svelte-11rba22_START -->${$$result.title = `<title>Dashboard Pengguna</title>`, ""}<!-- HEAD_svelte-11rba22_END -->`, ""}

<div class="ml-10 mt-5 w-3/4">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
    default: () => {
      return `Dashboard Pengguna`;
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
              return `Adalah admin?`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Nama`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Asal`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Tanggal Lahir`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Bootcamp`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Aktif?`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Aksi`;
            }
          })}`;
        }
      })}
    ${validate_component(TableBody, "TableBody").$$render($$result, { class: "divide-y" }, {}, {
        default: () => {
          return `${each(usersData, (users) => {
            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(users.id)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(users.role)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(users.first_name + " " + users.last_name)}`;
                  }
                })}
        ${users.role == "admin" ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(users.status)}`;
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
                            href: "/dashboard/users/" + users.id
                          },
                          {},
                          {
                            default: () => {
                              return `Detail`;
                            }
                          }
                        )}
          ${validate_component(Button, "Button").$$render($$result, { color: "red" }, {}, {
                          default: () => {
                            return `Jadikan Pengguna`;
                          }
                        })}
          ${users.status == "active" ? `${validate_component(Button, "Button").$$render($$result, { color: "yellow" }, {}, {
                          default: () => {
                            return `Nonaktifkan pengguna`;
                          }
                        })}` : `${users.status == "suspended" ? `${validate_component(Button, "Button").$$render($$result, { color: "yellow" }, {}, {
                          default: () => {
                            return `Aktifkan pengguna`;
                          }
                        })}` : ``}`}
        `;
                      }
                    })}
        `;
                  }
                })}` : `${users.role == "user" ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(users.kelurahan + ", " + users.kecamatan + ", " + users.kota)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(users.birth_date)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(users.course)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(users.status)}`;
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
                            href: "/dashboard/users/" + users.id,
                            target: "_blank"
                          },
                          {},
                          {
                            default: () => {
                              return `Detail`;
                            }
                          }
                        )}
          ${validate_component(Button, "Button").$$render($$result, { color: "red" }, {}, {
                          default: () => {
                            return `Jadikan Admin`;
                          }
                        })}
          ${users.status == "active" ? `${validate_component(Button, "Button").$$render($$result, { color: "yellow" }, {}, {
                          default: () => {
                            return `Nonaktifkan pengguna`;
                          }
                        })}` : `${users.status == "suspended" ? `${validate_component(Button, "Button").$$render($$result, { color: "yellow" }, {}, {
                          default: () => {
                            return `Aktifkan pengguna`;
                          }
                        })}` : ``}`}
        `;
                      }
                    })}
        `;
                  }
                })}` : ``}`}
      `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
