import { c as create_ssr_component, v as validate_component, o as each, e as escape } from "../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../chunks/Heading.js";
import { B as ButtonGroup } from "../../../../chunks/ButtonGroup.js";
/* empty css                                                          */import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../chunks/TableHeadCell.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questionData;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ questionData } = data);
  return `${$$result.head += `<!-- HEAD_svelte-12sfbys_START -->${$$result.title = `<title>Dashboard Pertanyaan</title>`, ""}<!-- HEAD_svelte-12sfbys_END -->`, ""}

<div class="ml-10 mt-5 w-3/4">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
    default: () => {
      return `Dashboard Pertanyaan`;
    }
  })}
  ${validate_component(Table, "Table").$$render($$result, { tiled: true, divClass: "w-3/4" }, {}, {
    default: () => {
      return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Nomor`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Soal`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Jawaban`;
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
          return `${each(questionData, (item) => {
            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.id)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "max-w-sm" }, {}, {
                  default: () => {
                    return `${escape(item.question.slice(0, 50) + "...")}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.answer)}`;
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
                            href: "/dashboard/questions/" + item.id,
                            target: "_blank"
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
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Button, "Button").$$render(
                    $$result,
                    {
                      href: "/dashboard/questions/create",
                      target: "_blank"
                    },
                    {},
                    {
                      default: () => {
                        return `Tambahkan Pertanyaan`;
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
