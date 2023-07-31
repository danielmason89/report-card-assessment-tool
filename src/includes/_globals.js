import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

export default {
  install(app) {
    const baseComponents = import.meta.globEager("../components/base/*.vue");

    Object.entries(baseComponents).forEach(([path, module]) => {
      const componentName = upperFirst(
        camelCase(
          path
            .split("/")
            .pop()
            .replace(/\.\w+$/, "")
        )
      );
      console.log(path, componentName);
      app.component(`Base${componentName}`, module.default);
    });
  },
};