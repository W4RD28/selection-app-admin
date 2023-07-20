import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../../chunks/Heading.js";
/* empty css                                                             */import { L as Label, I as Input } from "../../../../../chunks/Input.js";
import { A } from "../../../../../chunks/A.js";
import { P } from "../../../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resultData;
  let userData;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ resultData, userData } = data);
  return `${$$result.head += `<!-- HEAD_svelte-a7tx7m_START -->${$$result.title = `<title>Detail Hasil Ujian Peserta ${escape(userData.id)}</title>`, ""}<!-- HEAD_svelte-a7tx7m_END -->`, ""}

<form class="ml-10 w-3/4">${validate_component(A, "A").$$render(
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
      return `${escape(userData.first_name)}`;
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
  <div class="grid mb-6"><div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "penyelesaian_admin", class: "mb-2" }, {}, {
    default: () => {
      return `Penyelesaian Administrasi`;
    }
  })}
      ${validate_component(Input, "Input").$$render($$result, { id: "penyelesaian_admin", disabled: true }, {}, {
    default: () => {
      return `${escape(resultData.administration_done)}`;
    }
  })}</div>
    <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "hasil_admin", class: "mb-2" }, {}, {
    default: () => {
      return `Hasil Administrasi`;
    }
  })}
      ${validate_component(Input, "Input").$$render($$result, { id: "hasil_admin", disabled: true }, {}, {
    default: () => {
      return `${escape(resultData.administration_result)}`;
    }
  })}</div>
    <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "penyelesaian_ujian", class: "mb-2" }, {}, {
    default: () => {
      return `Penyelesaian Ujian`;
    }
  })}
      ${validate_component(Input, "Input").$$render($$result, { id: "penyelesaian_ujian", disabled: true }, {}, {
    default: () => {
      return `${escape(resultData.exam_done)}`;
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
    <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "hasil_wawancara", class: "mb-2" }, {}, {
    default: () => {
      return `Hasil Wawancara`;
    }
  })}
      ${validate_component(Input, "Input").$$render($$result, { id: "hasil_wawancara", disabled: true }, {}, {
    default: () => {
      return `${escape(resultData.interview_result)}`;
    }
  })}</div></div></form>`;
});
export {
  Page as default
};
