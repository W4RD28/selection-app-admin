import { c as create_ssr_component, e as escape, v as validate_component, o as each } from "../../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../../chunks/Heading.js";
/* empty css                                                             */import { L as Label, I as Input } from "../../../../../chunks/Input.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../../chunks/TableHeadCell.js";
import { A } from "../../../../../chunks/A.js";
import { P } from "../../../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resultData;
  let userData;
  let userScore;
  let answerData;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ resultData, userData, userScore, answerData } = data);
  return `${$$result.head += `<!-- HEAD_svelte-a7tx7m_START -->${$$result.title = `<title>Detail Hasil Ujian Peserta ${escape(userData.id)}</title>`, ""}<!-- HEAD_svelte-a7tx7m_END -->`, ""}

<form><div class="ml-10 mt-5 w-3/4">${validate_component(A, "A").$$render(
    $$result,
    {
      class: "mb-3 mt-6",
      href: "/dashboard/results"
    },
    {},
    {
      default: () => {
        return `${validate_component(P, "P").$$render($$result, { color: "blue" }, {}, {
          default: () => {
            return `Kembali ke dashboard hasil ujian`;
          }
        })}`;
      }
    }
  )}
    ${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
    default: () => {
      return `Detail Hasil Ujian Peserta No ${escape(userData.id)}`;
    }
  })}
    ${validate_component(Heading, "Heading").$$render($$result, { tag: "h4", class: "mb-6" }, {}, {
    default: () => {
      return `Detail Peserta`;
    }
  })}
    <div class="grid mb-6"><div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "nama", class: "mb-2" }, {}, {
    default: () => {
      return `Nama Peserta`;
    }
  })}
        ${validate_component(Input, "Input").$$render($$result, { id: "nama", disabled: true }, {}, {
    default: () => {
      return `${escape(userData.first_name + " " + userData.last_name)}`;
    }
  })}</div>
      <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "bootcamp", class: "mb-2" }, {}, {
    default: () => {
      return `Bootcamp`;
    }
  })}
        ${validate_component(Input, "Input").$$render($$result, { id: "bootcamp", disabled: true }, {}, {
    default: () => {
      return `${escape(userData.course)}`;
    }
  })}</div>
      <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "asal", class: "mb-2" }, {}, {
    default: () => {
      return `Asal`;
    }
  })}
        ${validate_component(Input, "Input").$$render($$result, { id: "asal", disabled: true }, {}, {
    default: () => {
      return `${escape(userData.kelurahan + ", " + userData.kecamatan + ", " + userData.kota)}`;
    }
  })}</div>
      
      <div class="mb-6">${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/dashboard/users/" + userData.id,
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `Lihat detail pengguna`;
      }
    }
  )}</div></div>
  ${validate_component(Heading, "Heading").$$render($$result, { tag: "h4", class: "mb-6" }, {}, {
    default: () => {
      return `Detail Hasil Ujian`;
    }
  })}
  
  ${validate_component(Table, "Table").$$render($$result, { class: "mb-6" }, {}, {
    default: () => {
      return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `No`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Pertanyaan`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Jawaban Peserta`;
            }
          })}
      ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
            default: () => {
              return `Jawaban Benar`;
            }
          })}`;
        }
      })}
    ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
        default: () => {
          return `${each(answerData, (item) => {
            return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.question_id)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.question.question.slice(0, 20) + "...")}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.answer)}`;
                  }
                })}
        ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                  default: () => {
                    return `${escape(item.question.answer)}`;
                  }
                })}
      `;
              }
            })}`;
          })}`;
        }
      })}`;
    }
  })}
  <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "nilai_ujian", class: "mb-2" }, {}, {
    default: () => {
      return `Nilai Ujian`;
    }
  })}
    ${validate_component(Input, "Input").$$render($$result, { id: "nilai_ujian", disabled: true }, {}, {
    default: () => {
      return `${escape(Math.round(userScore))}`;
    }
  })}</div>
  <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "hasil_ujian", class: "mb-2" }, {}, {
    default: () => {
      return `Hasil Ujian`;
    }
  })}
    ${validate_component(Input, "Input").$$render($$result, { id: "hasil_ujian", disabled: true }, {}, {
    default: () => {
      return `${escape(resultData.exam_result)}`;
    }
  })}</div>
  
  <div class="mb-6">${validate_component(Button, "Button").$$render($$result, { color: "blue" }, {}, {
    default: () => {
      return `Lulus`;
    }
  })}
    ${validate_component(Button, "Button").$$render($$result, { color: "red" }, {}, {
    default: () => {
      return `Tidak Lulus`;
    }
  })}</div></div></form>`;
});
export {
  Page as default
};
