import jsYaml from "js-yaml";

const parserData = (data, format) => {
    if (format === 'json') {
        return JSON.parse(data);
    } else if (format === 'yml') {
        return jsYaml.load(data);
    } else if (format === 'yaml') {
        return jsYaml.load(data);
    }
}

export default parserData;