import jsYaml from "js-yaml";

const parsers = {
    json: JSON.parse,
    yaml: jsYaml.load,
    yml: jsYaml.load,
};

export default (data, format) => parsers[format](data);