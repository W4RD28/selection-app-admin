import { c as create_ssr_component, v as validate_component, o as each, e as escape, p as is_promise, n as noop } from "../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../chunks/Heading.js";
/* empty css                                                          */import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../chunks/TableHeadCell.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let administrationData;
  let { data } = $$props;
  async function getUserAdministrationDoneAndResult(id) {
    const { data: resultData } = await data.supabase.from("test_results").select("administration_done, administration_result").eq("user_id", id).single();
    return resultData;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ administrationData } = data);
  return `${$$result.head += `<!-- HEAD_svelte-17xx8xh_START -->${$$result.title = `<title>Dashboard Administrasi</title>`, ""}<!-- HEAD_svelte-17xx8xh_END -->`, ""}

<div class="ml-10 mt-5 w-3/4">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
    default: () => {
      return `Dashboard Administrasi`;
    }
  })}
  ${validate_component(Table, "Table").$$render($$result, { tiled: true }, {}, {
    default: () => {
      return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `ID Peserta`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Nama Peserta`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Asal`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Bootcamp`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Status`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Selesai?`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Lulus?`;
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
          return `${each(administrationData, (item) => {
            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.user.id)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.user.first_name + " " + item.user.last_name)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.user.kelurahan + ", " + item.user.kecamatan + ", " + item.user.kota)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.user.course)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.user.status)}`;
                  }
                })}
        ${function(__value) {
                  if (is_promise(__value)) {
                    __value.then(null, noop);
                    return `
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
        `;
                  }
                  return function(userIsDone) {
                    return `
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(userIsDone?.administration_done)}`;
                      }
                    })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(userIsDone?.administration_result)}`;
                      }
                    })}
        `;
                  }(__value);
                }(getUserAdministrationDoneAndResult(item.user.id))}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        color: "blue",
                        href: "/dashboard/administration/" + item.id,
                        target: "_blank"
                      },
                      {},
                      {
                        default: () => {
                          return `Detail`;
                        }
                      }
                    )}`;
                  }
                })}
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
