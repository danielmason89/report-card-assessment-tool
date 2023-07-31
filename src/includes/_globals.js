import _ from "lodash";

export default {
  install(app) {
    const baseComponents = import.meta.globEager("../components/base/*.vue");

    Object.entries(baseComponents).forEach(([path, module]) => {
      const componentName = _.upperFirst(
        _.camelCase(
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