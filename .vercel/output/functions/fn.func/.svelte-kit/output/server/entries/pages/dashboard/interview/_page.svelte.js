import { c as create_ssr_component, v as validate_component, o as each, e as escape, p as is_promise, n as noop } from "../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../chunks/Heading.js";
import { B as ButtonGroup } from "../../../../chunks/ButtonGroup.js";
/* empty css                                                          */import { T as Table, a as TableHead, b as TableHeadCell, e as TableBodyCell, c as TableBody, d as TableBodyRow } from "../../../../chunks/TableHeadCell.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let interviewData;
  let { data } = $$props;
  async function getUserInterviewResult(user_id) {
    const { data: result, error } = await data.supabase.from("test_results").select("*").eq("user_id", user_id).single();
    if (error)
      console.log(error);
    else
      return result;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ interviewData } = data);
  return `${$$result.head += `<!-- HEAD_svelte-1i8ixxq_START -->${$$result.title = `<title>Dashboard Wawancara</title>`, ""}<!-- HEAD_svelte-1i8ixxq_END -->`, ""}

<div class="ml-10 mt-5 w-3/4">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
    default: () => {
      return `Dashboard Wawancara`;
    }
  })}
  ${validate_component(Table, "Table").$$render($$result, { tiled: true }, {}, {
    default: () => {
      return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Nomor Peserta`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Link Ruangan`;
            }
          })}
      ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
            default: () => {
              return `Tanggal`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Waktu`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Kelulusan`;
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
          return `${each(interviewData, (item) => {
            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.user_id)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "max-w-sm" }, {}, {
                  default: () => {
                    return `${escape(item.room_link)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.date)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.time)}`;
                  }
                })}
        ${function(__value) {
                  if (is_promise(__value)) {
                    __value.then(null, noop);
                    return `
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Mengambil...`;
                      }
                    })}
        `;
                  }
                  return function(userResults) {
                    return `
        ${!userResults ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Tidak Ada`;
                      }
                    })}` : `${userResults.interview_result ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(userResults?.interview_result)}`;
                      }
                    })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Belum Ada`;
                      }
                    })}`}`}
        `;
                  }(__value);
                }(getUserInterviewResult(item.user_id))}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Button, "Button").$$render(
                          $$result,
                          {
                            color: "blue",
                            href: "/dashboard/interview/" + item.id,
                            target: "_blank"
                          },
                          {},
                          {
                            default: () => {
                              return `Detail`;
                            }
                          }
                        )}
        `;
                      }
                    })}`;
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
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {})}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      href: "/dashboard/interview/create",
                      target: "_blank"
                    },
                    {},
                    {
                      default: () => {
                        return `Tambahkan Wawancara`;
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
