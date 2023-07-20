import { c as create_ssr_component, e as escape, i as add_attribute, j as compute_slots, d as compute_rest_props, f as spread, h as escape_attribute_value, g as escape_object, l as is_void, v as validate_component, p as is_promise, n as noop } from "../../../../../chunks/index2.js";
import classNames from "classnames";
import { H as Heading, B as Button } from "../../../../../chunks/Heading.js";
/* empty css                                                             */import { L as Label, I as Input } from "../../../../../chunks/Input.js";
import { A } from "../../../../../chunks/A.js";
import { P } from "../../../../../chunks/P.js";
const Placeholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rounded = false } = $$props;
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  return `<svg class="${"text-gray-400 bg-gray-100 dark:bg-gray-600 " + escape(rounded ? "rounded" : "rounded-full", true)}" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>

`;
});
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { color = "gray" } = $$props;
  let { rounded = false } = $$props;
  let { size = "md" } = $$props;
  let { border = false } = $$props;
  let { placement = void 0 } = $$props;
  let { offset = true } = $$props;
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 left-0",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "top-right": "top-0 right-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 left-0",
    center: "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 right-0",
    // bottom
    "bottom-left": "bottom-0 left-0",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-0 right-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  dotClass = classNames("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$props.class);
  return `<div${add_attribute("class", dotClass, 0)}>${slots.default ? slots.default({}) : ``}</div>

`;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"]);
  let $$slots = compute_slots(slots);
  let { src = "" } = $$props;
  let { href = void 0 } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { stacked = false } = $$props;
  let { dot = void 0 } = $$props;
  let { alt = "" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36"
  };
  let avatarClass;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.dot === void 0 && $$bindings.dot && dot !== void 0)
    $$bindings.dot(dot);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  dot = dot && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot
  };
  avatarClass = classNames(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ml-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300", $$props.class);
  return `${!src || !!href || $$slots.default || dot ? `${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: "relative flex justify-center items-center " + escape(avatarClass, true)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${src ? `<img${add_attribute("alt", alt, 0)}${add_attribute("src", src, 0)}${add_attribute("class", rounded ? "rounded" : "rounded-full", 0)}>` : `${slots.default ? slots.default({}) : `${validate_component(Placeholder, "AvatarPlaceholder").$$render($$result, { rounded }, {}, {})}`}`}
    ${dot ? `${validate_component(Indicator, "Indicator").$$render($$result, Object.assign({}, { border: true }, { offset: rounded }, dot), {}, {})}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}` : `<img${spread(
    [
      { alt: escape_attribute_value(alt) },
      { src: escape_attribute_value(src) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(avatarClass)
      }
    ],
    {}
  )}>`}

`;
});
function generateString(length = 8) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let userData;
  let { data } = $$props;
  const supabase = data.supabase;
  const getUserImageUrl = async (path) => {
    const { data: data2 } = await supabase.storage.from("avatar").getPublicUrl(path);
    return data2.publicUrl;
  };
  const getUserKtp = async (path) => {
    const { data: data2 } = await supabase.storage.from("ktp").getPublicUrl(path);
    return data2.publicUrl;
  };
  const getUserIjazah = async (path) => {
    const { data: data2 } = await supabase.storage.from("ijazah").getPublicUrl(path);
    return data2.publicUrl;
  };
  const getUserCv = async (path) => {
    const { data: data2 } = await supabase.storage.from("cv").getPublicUrl(path);
    return data2.publicUrl;
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.generateString === void 0 && $$bindings.generateString && generateString !== void 0)
    $$bindings.generateString(generateString);
  if ($$props.getUserImageUrl === void 0 && $$bindings.getUserImageUrl && getUserImageUrl !== void 0)
    $$bindings.getUserImageUrl(getUserImageUrl);
  if ($$props.getUserKtp === void 0 && $$bindings.getUserKtp && getUserKtp !== void 0)
    $$bindings.getUserKtp(getUserKtp);
  if ($$props.getUserIjazah === void 0 && $$bindings.getUserIjazah && getUserIjazah !== void 0)
    $$bindings.getUserIjazah(getUserIjazah);
  if ($$props.getUserCv === void 0 && $$bindings.getUserCv && getUserCv !== void 0)
    $$bindings.getUserCv(getUserCv);
  ({ userData } = data);
  return `${$$result.head += `<!-- HEAD_svelte-1dp293s_START -->${$$result.title = `<title>Detail Pengguna ${escape(userData?.id)}</title>`, ""}<!-- HEAD_svelte-1dp293s_END -->`, ""}

<form class="ml-10 w-3/4">${validate_component(A, "A").$$render(
    $$result,
    {
      class: "mb-3 mt-6",
      href: "/dashboard/users"
    },
    {},
    {
      default: () => {
        return `${validate_component(P, "P").$$render($$result, { color: "blue" }, {}, {
          default: () => {
            return `Kembali ke dashboard pengguna`;
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
  <div class="mb-6">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
      ${validate_component(Avatar, "Avatar").$$render(
        $$result,
        {
          alt: "user image",
          size: "xl",
          border: true,
          class: "1/2"
        },
        {},
        {}
      )}
    `;
    }
    return function(avatarUrl) {
      return ` 
      ${validate_component(Avatar, "Avatar").$$render(
        $$result,
        {
          alt: "user image",
          src: avatarUrl,
          size: "xl",
          border: true,
          class: "1/2"
        },
        {},
        {}
      )}
    `;
    }(__value);
  }(getUserImageUrl(userData.avatar_url))}</div>
  <div class="grid gap-10 mb-6 md:grid-cols-3"><div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "nama_penuh", class: "mb-2" }, {}, {
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
        return `${escape(userData.first_name + " " + userData.last_name)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2" }, {}, {
    default: () => {
      return `Email`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "email",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(userData.email)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "phone_number", class: "mb-2" }, {}, {
    default: () => {
      return `Nomor Telepon`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "phone_number",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(userData.phone_number)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "tanggal_lahir", class: "mb-2" }, {}, {
    default: () => {
      return `Tanggal Lahir`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "date",
      id: "tanggal_lahir",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(userData.birth_date)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "phone_number", class: "mb-2" }, {}, {
    default: () => {
      return `Nomor Telepon`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "phone_number",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(userData.phone_number)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "nik", class: "mb-2" }, {}, {
    default: () => {
      return `Nomor Induk Kependudukan`;
    }
  })}
      ${validate_component(Input, "Input").$$render($$result, { type: "text", id: "nik", disabled: true }, {}, {
    default: () => {
      return `${escape(userData.nik)}`;
    }
  })}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "kota", class: "mb-2" }, {}, {
    default: () => {
      return `Kota`;
    }
  })}
      ${validate_component(Input, "Input").$$render($$result, { type: "text", id: "kota", disabled: true }, {}, {
    default: () => {
      return `${escape(userData.kota)}`;
    }
  })}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "kecamatan", class: "mb-2" }, {}, {
    default: () => {
      return `Kecamatan`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "kecamatan",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(userData.kecamatan)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "kelurahan", class: "mb-2" }, {}, {
    default: () => {
      return `Kelurahan/Desa`;
    }
  })}
      ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "kelurahan",
      disabled: true
    },
    {},
    {
      default: () => {
        return `${escape(userData.kelurahan)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "bootcamp", class: "mb-2" }, {}, {
    default: () => {
      return `Kelas Bootcamp`;
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
        return `${escape(userData.course)}`;
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
        return `${escape(userData.status)}`;
      }
    }
  )}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "role", class: "mb-2" }, {}, {
    default: () => {
      return `Role`;
    }
  })}
      ${validate_component(Input, "Input").$$render($$result, { type: "text", id: "role", disabled: true }, {}, {
    default: () => {
      return `${escape(userData.role)}`;
    }
  })}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "ktp", class: "pb-2" }, {}, {
    default: () => {
      return `Kartu Tanda Penduduk`;
    }
  })}
      ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        ${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "mb-3 w-32",
          type: "button",
          color: "light",
          disabled: true
        },
        {},
        {
          default: () => {
            return `Lihat`;
          }
        }
      )}
      `;
    }
    return function(ktpUrl) {
      return ` 
        ${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "mb-3 w-32",
          type: "button",
          color: "light"
        },
        {},
        {
          default: () => {
            return `Lihat`;
          }
        }
      )}
      `;
    }();
  }(getUserKtp(userData.ktp_url))}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "cv", class: "pb-2" }, {}, {
    default: () => {
      return `Curriculum Vitae`;
    }
  })}
      ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        ${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "mb-3 w-32",
          type: "button",
          color: "light",
          disabled: true
        },
        {},
        {
          default: () => {
            return `Lihat`;
          }
        }
      )}
      `;
    }
    return function(cvUrl) {
      return ` 
        ${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "mb-3 w-32",
          type: "button",
          color: "light"
        },
        {},
        {
          default: () => {
            return `Lihat`;
          }
        }
      )}
      `;
    }();
  }(getUserCv(userData.cv_url))}</div>
    <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "ijazah", class: "pb-2" }, {}, {
    default: () => {
      return `Ijazah`;
    }
  })}
      ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        ${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "mb-3 w-32",
          type: "button",
          color: "light",
          disabled: true
        },
        {},
        {
          default: () => {
            return `Lihat`;
          }
        }
      )}
      `;
    }
    return function(ijazahUrl) {
      return `
      ${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "mb-3 w-32",
          type: "button",
          color: "light"
        },
        {},
        {
          default: () => {
            return `Lihat`;
          }
        }
      )}
      `;
    }();
  }(getUserIjazah(userData.ijazah_url))}</div>
    
    ${userData.status == "active" ? `<div class="mb-3">${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "mb-3 w-32",
      type: "button",
      color: "yellow"
    },
    {},
    {
      default: () => {
        return `Nonaktifkan Pengguna`;
      }
    }
  )}</div>` : `${userData.status == "suspended" ? `<div class="mb-3">${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "mb-3 w-32",
      type: "button",
      color: "yellow"
    },
    {},
    {
      default: () => {
        return `Aktifkan Pengguna`;
      }
    }
  )}</div>` : ``}`}
    ${userData.role == "admin" ? `<div class="">${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "mb-3 w-32",
      type: "button",
      color: "red"
    },
    {},
    {
      default: () => {
        return `Jadikan Pengguna`;
      }
    }
  )}</div>` : `${userData.role == "user" ? `<div class="mb-3">${validate_component(Button, "Button").$$render(
    $$result,
    {
      class: "mb-3 w-32",
      type: "button",
      color: "red"
    },
    {},
    {
      default: () => {
        return `Jadikan Admin`;
      }
    }
  )}</div>` : ``}`}</div></form>`;
});
export {
  Page as default
};
