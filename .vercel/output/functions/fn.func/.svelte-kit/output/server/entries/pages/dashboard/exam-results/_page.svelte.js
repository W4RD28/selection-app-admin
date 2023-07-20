import { c as create_ssr_component, v as validate_component, o as each, e as escape, p as is_promise, n as noop } from "../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../chunks/Heading.js";
import { B as ButtonGroup } from "../../../../chunks/ButtonGroup.js";
/* empty css                                                          */import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../chunks/TableHeadCell.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questionData;
  let usersData;
  let { data } = $$props;
  async function getUserAnswers(user_id) {
    const { data: user_answers, error } = await data.supabase.from("user_answers").select("*").eq("user_id", user_id);
    if (error)
      console.log(error);
    else
      return user_answers;
  }
  async function getUserScore(user_id) {
    let userScore = 0;
    const user_answers = await getUserAnswers(user_id);
    for (let i = 0; i < user_answers.length; i++) {
      if (user_answers[i].answer === questionData[i].answer) {
        userScore++;
      }
    }
    return userScore / questionData.length * 100;
  }
  async function getUserResults(user_id) {
    const { data: result, error } = await data.supabase.from("test_results").select("*").eq("user_id", user_id).single();
    if (error)
      console.log(error);
    else
      return result;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ questionData, usersData } = data);
  return `${$$result.head += `<!-- HEAD_svelte-1ta1asd_START -->${$$result.title = `<title>Dashboard Hasil Ujian Tertulis</title>`, ""}<!-- HEAD_svelte-1ta1asd_END -->`, ""}

<div class="ml-10 mt-5 w-3/4">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
    default: () => {
      return `Dashboard Hasil Ujian Tertulis`;
    }
  })}
  ${validate_component(Table, "Table").$$render($$result, { tiled: true, divClass: "w-3/4" }, {}, {
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
              return `Nilai`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Hasil Ujian`;
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
          return `${each(usersData, (item) => {
            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.id)}`;
                  }
                })}
        ${function(__value) {
                  if (is_promise(__value)) {
                    __value.then(null, noop);
                    return `
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Menghitung...`;
                      }
                    })}
        `;
                  }
                  return function(userScore) {
                    return `
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(Math.round(userScore))}`;
                      }
                    })}
        `;
                  }(__value);
                }(getUserScore(item.id))}
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
                    })}` : `${userResults.exam_result === null ? `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `Belum Ada`;
                      }
                    })}` : `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(userResults.exam_result)}`;
                      }
                    })}`}`}
        `;
                  }(__value);
                }(getUserResults(item.id))}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(Button, "Button").$$render(
                          $$result,
                          {
                            color: "blue",
                            href: "/dashboard/exam-results/" + item.id,
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
          })}`;
        }
      })}`;
    }
  })}</div>`;
});
export {
  Page as default
};
