import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index2.js";
import "classnames";
import { H as Heading, B as Button } from "../../../../../chunks/Heading.js";
/* empty css                                                             */import { L as Label, I as Input } from "../../../../../chunks/Input.js";
import { T as Textarea } from "../../../../../chunks/Textarea.js";
import { A } from "../../../../../chunks/A.js";
import { P } from "../../../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let title;
  let content;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-r8mdzu_START -->${$$result.title = `<title>Buat Pengumuman Baru</title>`, ""}<!-- HEAD_svelte-r8mdzu_END -->`, ""}

<form class="ml-10 w-3/4">${validate_component(A, "A").$$render(
      $$result,
      {
        class: "mb-3 mt-6",
        href: "/dashboard/announcements"
      },
      {},
      {
        default: () => {
          return `${validate_component(P, "P").$$render($$result, { color: "blue" }, {}, {
            default: () => {
              return `Kembali ke dashboard pengumuman`;
            }
          })}`;
        }
      }
    )}
  ${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-6" }, {}, {
      default: () => {
        return `Buat Pengumuman Baru`;
      }
    })}
  <div class="grid mb-6"><div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "judul", class: "mb-2" }, {}, {
      default: () => {
        return `Judul`;
      }
    })}
      ${validate_component(Input, "Input").$$render(
      $$result,
      { id: "judul", value: title },
      {
        value: ($$value) => {
          title = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "konten", class: "mb-2" }, {}, {
      default: () => {
        return `Konten`;
      }
    })}
      ${validate_component(Textarea, "Textarea").$$render(
      $$result,
      { rows: "15", id: "konten", value: content },
      {
        value: ($$value) => {
          content = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
  ${validate_component(Button, "Button").$$render($$result, { class: "mb-6", color: "blue" }, {}, {
      default: () => {
        return `Simpan`;
      }
    })}</form>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
