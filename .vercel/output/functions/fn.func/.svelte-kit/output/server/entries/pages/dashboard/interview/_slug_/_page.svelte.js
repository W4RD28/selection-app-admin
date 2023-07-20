import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../../chunks/Heading.js";
/* empty css                                                             */import { L as Label, I as Input } from "../../../../../chunks/Input.js";
import { A } from "../../../../../chunks/A.js";
import { P } from "../../../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resultData;
  let interviewData;
  let userData;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ resultData, interviewData, userData } = data);
  return `${$$result.head += `<!-- HEAD_svelte-sxr3hb_START -->${$$result.title = `<title>Detail Wawancara Peserta ${escape(userData.id)}</title>`, ""}<!-- HEAD_svelte-sxr3hb_END -->`, ""}

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
      return `Detail Wawancara Peserta No ${escape(userData.id)}`;
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
      href: "/dashboard/users/" + userData.user_id,
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
      return `Detail Wawancara`;
    }
  })}
  <div class="grid mb-6"><div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "room", class: "mb-2" }, {}, {
    default: () => {
      return `Ruang Wawancara`;
    }
  })}
      ${validate_component(Input, "Input").$$render($$result, { id: "room", disabled: true }, {}, {
    default: () => {
      return `${escape(interviewData.room_link)}`;
    }
  })}</div>
    <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "tanggal", class: "mb-2" }, {}, {
    default: () => {
      return `Tanggal Wawancara`;
    }
  })}
      ${validate_component(Input, "Input").$$render($$result, { id: "tanggal", disabled: true }, {}, {
    default: () => {
      return `${escape(interviewData.date)}`;
    }
  })}</div>
    <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "jam", class: "mb-2" }, {}, {
    default: () => {
      return `Jam Wawancara`;
    }
  })}
      ${validate_component(Input, "Input").$$render($$result, { id: "jam", disabled: true }, {}, {
    default: () => {
      return `${escape(interviewData.time)}`;
    }
  })}</div>
    <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "status", class: "mb-2" }, {}, {
    default: () => {
      return `Status Wawancara`;
    }
  })}
      ${validate_component(Input, "Input").$$render($$result, { id: "status", disabled: true }, {}, {
    default: () => {
      return `${escape(resultData.interview_result)}`;
    }
  })}</div></div>
  <div class="mb-10">${validate_component(Button, "Button").$$render($$result, { color: "blue" }, {}, {
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
