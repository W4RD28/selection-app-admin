import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../../chunks/Heading.js";
/* empty css                                                             */import { L as Label, I as Input } from "../../../../../chunks/Input.js";
import { S as Select } from "../../../../../chunks/Select.js";
import { T as Textarea } from "../../../../../chunks/Textarea.js";
import { A } from "../../../../../chunks/A.js";
import { P } from "../../../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questionData;
  let { data } = $$props;
  let answers = [
    { value: "a", name: "A" },
    { value: "b", name: "B" },
    { value: "c", name: "C" },
    { value: "d", name: "D" }
  ];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    ({ questionData } = data);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1bsj69u_START -->${$$result.title = `<title>Detail Pertanyaan ${escape(questionData.id)}</title>`, ""}<!-- HEAD_svelte-1bsj69u_END -->`, ""}

<form class="ml-10 w-3/4">${validate_component(A, "A").$$render(
      $$result,
      {
        class: "mb-3 mt-6",
        href: "/dashboard/questions"
      },
      {},
      {
        default: () => {
          return `${validate_component(P, "P").$$render($$result, { color: "blue" }, {}, {
            default: () => {
              return `Kembali ke dashboard jawaban`;
            }
          })}`;
        }
      }
    )}
  ${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
      default: () => {
        return `Detail Pertanyaan No ${escape(questionData.id)}`;
      }
    })}
  <div class="grid mb-6"><div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "id", class: "mb-2" }, {}, {
      default: () => {
        return `Nomor`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "id",
        disabled: true,
        value: questionData.id
      },
      {
        value: ($$value) => {
          questionData.id = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "pertanyaan", class: "mb-2" }, {}, {
      default: () => {
        return `Pertanyaan`;
      }
    })}
      ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        id: "pertanyaan",
        value: questionData.question
      },
      {
        value: ($$value) => {
          questionData.question = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "opsi_a", class: "mb-2" }, {}, {
      default: () => {
        return `Opsi A`;
      }
    })}
      ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        id: "opsi_a",
        value: questionData.option_a
      },
      {
        value: ($$value) => {
          questionData.option_a = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "opsi_b", class: "mb-2" }, {}, {
      default: () => {
        return `Opsi B`;
      }
    })}
      ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        id: "opsi_b",
        value: questionData.option_b
      },
      {
        value: ($$value) => {
          questionData.option_b = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "opsi_c", class: "mb-2" }, {}, {
      default: () => {
        return `Opsi C`;
      }
    })}
      ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        id: "opsi_c",
        value: questionData.option_c
      },
      {
        value: ($$value) => {
          questionData.option_c = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "opsi_d", class: "mb-2" }, {}, {
      default: () => {
        return `Opsi D`;
      }
    })}
      ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      {
        id: "opsi_d",
        value: questionData.option_d
      },
      {
        value: ($$value) => {
          questionData.option_d = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "jawaban", class: "mb-2" }, {}, {
      default: () => {
        return `Jawaban`;
      }
    })}
      ${validate_component(Select, "Select").$$render(
      $$result,
      {
        id: "jawaban",
        items: answers,
        value: questionData.answer
      },
      {
        value: ($$value) => {
          questionData.answer = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="mb-3">${validate_component(Button, "Button").$$render($$result, { class: "mb-6", color: "blue" }, {}, {
      default: () => {
        return `Simpan`;
      }
    })}
      ${validate_component(Button, "Button").$$render($$result, { class: "mb-6", color: "red" }, {}, {
      default: () => {
        return `Hapus`;
      }
    })}</div></div></form>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
