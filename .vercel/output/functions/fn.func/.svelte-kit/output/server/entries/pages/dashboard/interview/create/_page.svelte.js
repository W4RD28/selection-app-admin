import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../../chunks/Heading.js";
/* empty css                                                             */import { L as Label, I as Input } from "../../../../../chunks/Input.js";
import { A } from "../../../../../chunks/A.js";
import { P } from "../../../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let interviewData = {
    user_id: "",
    room_link: "",
    date: "",
    time: ""
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-x0d4xc_START -->${$$result.title = `<title>Pembuatan Ruang Wawancara Baru</title>`, ""}<!-- HEAD_svelte-x0d4xc_END -->`, ""}

<form>${validate_component(A, "A").$$render(
      $$result,
      {
        class: "mb-3 mt-6",
        href: "/dashboard/interview"
      },
      {},
      {
        default: () => {
          return `${validate_component(P, "P").$$render($$result, { color: "blue" }, {}, {
            default: () => {
              return `Kembali ke dashboard wawancara`;
            }
          })}`;
        }
      }
    )}
  <div class="ml-10 mt-5 w-3/4">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
      default: () => {
        return `Membuat Ruang Wawancara Baru`;
      }
    })}
    ${validate_component(Heading, "Heading").$$render($$result, { tag: "h4", class: "mb-6" }, {}, {
      default: () => {
        return `Detail Peserta`;
      }
    })}
    <div class="grid mb-6"><div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "id_peserta", class: "mb-2" }, {}, {
      default: () => {
        return `ID Peserta`;
      }
    })}
        ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "id_peserta",
        value: interviewData.user_id
      },
      {
        value: ($$value) => {
          interviewData.user_id = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
      <div class="mb-6">${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: "/dashboard/users",
        target: "_blank"
      },
      {},
      {
        default: () => {
          return `Lihat Seluruh Pengguna`;
        }
      }
    )}</div></div>
  ${validate_component(Heading, "Heading").$$render($$result, { tag: "h4", class: "mb-6" }, {}, {
      default: () => {
        return `Detail Wawancara`;
      }
    })}
  <div class="grid mb-6"><div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "room", class: "mb-2" }, {}, {
      default: () => {
        return `Ruang Wawancara`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "room",
        value: interviewData.room_link
      },
      {
        value: ($$value) => {
          interviewData.room_link = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "tanggal", class: "mb-2" }, {}, {
      default: () => {
        return `Tanggal Wawancara`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "date",
        id: "tanggal",
        value: interviewData.date
      },
      {
        value: ($$value) => {
          interviewData.date = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "jam", class: "mb-2" }, {}, {
      default: () => {
        return `Jam Wawancara (Misal: 12:30:00)`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      { id: "jam", value: interviewData.time },
      {
        value: ($$value) => {
          interviewData.time = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
  ${validate_component(Button, "Button").$$render(
      $$result,
      {
        class: "mb-10",
        color: "blue",
        href: "/dashboard/interview"
      },
      {},
      {
        default: () => {
          return `Buat Ruang Wawancara`;
        }
      }
    )}</div></form>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
