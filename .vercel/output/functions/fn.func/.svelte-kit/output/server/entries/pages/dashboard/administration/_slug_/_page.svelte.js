import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../../chunks/Heading.js";
/* empty css                                                             */import { L as Label, I as Input } from "../../../../../chunks/Input.js";
import { A } from "../../../../../chunks/A.js";
import { P } from "../../../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let administrationData;
  let resultData;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ administrationData, resultData } = data);
  return `${$$result.head += `<!-- HEAD_svelte-1qnz4z6_START -->${$$result.title = `<title>Jawaban Administrasi ${escape(administrationData?.user.id)}</title>`, ""}<!-- HEAD_svelte-1qnz4z6_END -->`, ""}

<form class="ml-10 w-3/4">${validate_component(A, "A").$$render(
    $$result,
    {
      class: "mb-3 mt-6",
      href: "/dashboard/administration"
    },
    {},
    {
      default: () => {
        return `${validate_component(P, "P").$$render($$result, { color: "blue" }, {}, {
          default: () => {
            return `Kembali ke dashboard administrasi`;
          }
        })}`;
      }
    }
  )}
  ${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
    default: () => {
      return `Detail Pengguna`;
    }
  })}
  <div class="grid gap-10 mb-6 md:grid-cols-2"><div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "nama_penuh", class: "mb-2" }, {}, {
    default: () => {
      return `Nama Penuh`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "nama_penuh",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(administrationData.user.first_name + " " + administrationData.user.last_name)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "asal", class: "mb-2" }, {}, {
    default: () => {
      return `Asal`;
    }
  })}
      ${validate_component(Input, "Input").$$render($$result, { type: "text", id: "asal", disabled: true }, {}, {
    default: () => {
      return `${escape(administrationData.user.kelurahan + ", " + administrationData.user.kecamatan + ", " + administrationData.user.kota)}`;
    }
  })}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "bootcamp", class: "mb-2" }, {}, {
    default: () => {
      return `Bootcamp`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "bootcamp",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(administrationData.user.course)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "status", class: "mb-2" }, {}, {
    default: () => {
      return `Status`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "status",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(administrationData.user.status)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "/dashboard/users/" + administrationData.user.id,
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `Lihat detail pengguna`;
      }
    }
  )}</div></div>
  ${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
    default: () => {
      return `Jawaban Pengguna`;
    }
  })}
  <div class="grid gap-10 mb-6 grid-cols-2"><div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "kategori", class: "mb-2" }, {}, {
    default: () => {
      return `Kategori`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "kategori",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(administrationData.category)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "disabilitas", class: "mb-2" }, {}, {
    default: () => {
      return `Disabilitas`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "disabilitas",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(administrationData.disability_type)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "pendapatan", class: "mb-2" }, {}, {
    default: () => {
      return `Pendapatan`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "pendapatan",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(administrationData.pendapatan)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "alasan", class: "mb-2" }, {}, {
    default: () => {
      return `Alasan`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "alasan",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(administrationData.alasan)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "alasan", class: "mb-2" }, {}, {
    default: () => {
      return `Harapan`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "alasan",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(administrationData.harapan)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "akses_laptop", class: "mb-2" }, {}, {
    default: () => {
      return `Akses Laptop?`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "akses_laptop",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(administrationData.akses_laptop)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "dapat_mengikuti", class: "mb-2" }, {}, {
    default: () => {
      return `Dapat Mengikuti?`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "dapat_mengikuti",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(administrationData.dapat_mengikuti)}`;
      }
    }
  )}</div>
    <div class="mb-3"></div></div>
  <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "selesai", class: "mb-2" }, {}, {
    default: () => {
      return `Selesai Tes?`;
    }
  })}
    ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "selesai",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(resultData?.administration_done)}`;
      }
    }
  )}</div>
  <div class="mb-6">${validate_component(Label, "Label").$$render($$result, { for: "lulus", class: "mb-2" }, {}, {
    default: () => {
      return `Lulus?`;
    }
  })}
    ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "lulus",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(resultData?.administration_result)}`;
      }
    }
  )}</div>
  ${validate_component(Button, "Button").$$render($$result, { class: "mb-6", color: "blue" }, {}, {
    default: () => {
      return `Luluskan`;
    }
  })}
  ${validate_component(Button, "Button").$$render($$result, { class: "mb-6", color: "red" }, {}, {
    default: () => {
      return `Tidak Luluskan`;
    }
  })}</form>`;
});
export {
  Page as default
};
