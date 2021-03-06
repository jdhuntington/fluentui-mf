import fs from "fs";
import path from "path";
import { exec } from "child_process";
import os from "os";
import { mkdtemp } from "fs";
import { promisify } from "util";

const writeFileAsync = promisify(fs.writeFile);
const execAsync = promisify(exec);

export async function createPackage() {
    const packageJsonPath = path.join('.', "package.json");
    const packageJson = {
        name: "fluentui-mf",
        version: "1.0.0",
        dependencies: {
            react: "^17.0.1",
            "react-dom": "^17.0.1",
            "@fluentui/date-time-utilities": "beta",
            "@fluentui/react-file-type-icons": "beta",
            "@fluentui/font-icons-mdl2": "beta",
            "@fluentui/foundation-legacy": "beta",
            "@fluentui/ie11-polyfills": "latest",
            "@fluentui/merge-styles": "beta",
            "@fluentui/react": "beta",
            "@fluentui/react-avatar": "latest",
            "@fluentui/react-button": "beta",
            "@fluentui/react-cards": "beta",
            "@fluentui/react-charting": "beta",
            "@fluentui/react-checkbox": "beta",
            "@fluentui/react-date-time": "beta",
            "@fluentui/react-flex": "latest",
            "@fluentui/react-focus": "beta",
            "@fluentui/react-hooks": "beta",
            "@fluentui/react-icons-mdl2": "beta",
            "@fluentui/react-image": "latest",
            "@fluentui/react-internal": "beta",
            "@fluentui/react-link": "beta",
            "@fluentui/react-shared-contexts": "beta",
            "@fluentui/react-slider": "beta",
            "@fluentui/react-tabs": "beta",
            "@fluentui/react-text": "latest",
            "@fluentui/react-theme-provider": "beta",
            "@fluentui/react-toggle": "beta",
            "@fluentui/scheme-utilities": "beta",
            "@fluentui/style-utilities": "beta",
            "@fluentui/theme": "beta",
            "@fluentui/utilities": "beta",
        },
    };

    await writeFileAsync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    const { stdout, stderr } = await execAsync("yarn");
    if (stderr) {
        console.error(stderr);
    }
    console.log(stdout);
}
