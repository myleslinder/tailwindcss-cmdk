import plugin from "tailwindcss/plugin";
import type { PluginCreator } from "tailwindcss/types/config";

const prefix = "cmdk";
const dataAttributes = [
  "root",
  "dialog", // TODO: [cmdk] [&[data-state]="closed" [cdmk]]
  "overlay",
  "input",
  "list",
  "item",
  "group",
  "separator",
  "empty",
  "loading",
] as const;
const ariaAttributes = ["aria-disabled", "aria-selected"];
const groupMerge = ":merge(.group)";
const peerMerge = ":merge(.peer)";

const cmdkPlugin: PluginCreator = ({ addVariant }) => {
  addVariant("cmdk-group-heading", '& > [cmdk-group-heading=""]');

  dataAttributes.forEach((attribute) => {
    const variantName = `${prefix}-${attribute}`;
    const selector = `[${prefix}-${attribute}=""]`;
    const groupSelector = `group-${variantName}`;
    const peerSelector = `peer-${variantName}`;

    addVariant(variantName, `&${selector}`);
    addVariant(groupSelector, `${groupMerge}${selector} &`);
    addVariant(peerSelector, `${peerMerge}${selector} ~ &`);

    if (attribute === "item") {
      ariaAttributes.forEach((ariaAttribute) => {
        const ariaSelector = `[${ariaAttribute}="true"]`;
        addVariant(
          `${variantName}-${ariaAttribute}`,
          `&${selector}${ariaSelector}`
        );
        addVariant(
          `${groupSelector}-${ariaAttribute}`,
          `${groupMerge}${selector}${ariaSelector} &`
        );
        addVariant(
          `${peerSelector}-${ariaAttribute}`,
          `${peerMerge}${selector}${ariaSelector} ~ &`
        );
      });
    }
    if (attribute === "group") {
      const hiddenSelector = '[hidden="true"]';
      addVariant(`${variantName}-hidden`, `&${selector}${hiddenSelector}`);
      addVariant(
        `${groupSelector}-hidden`,
        `${groupMerge}${selector}${hiddenSelector} &`
      );
      addVariant(
        `${peerSelector}-hidden`,
        `${peerMerge}${selector}${hiddenSelector} ~ &`
      );
    }
  });
};

export default plugin(cmdkPlugin);
