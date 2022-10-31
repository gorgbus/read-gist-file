const core = require("@actions/core");
import fetch from "node-fetch";

(
    async () => {
        try {
            const gistId = core.getInput("gist_id");

            const res = await fetch(`https://api.github.com/gists/${gistId}`);

            if (res.status !== 200) throw res.statusText;

            const data = await res.json();

            if (!data.files) throw "No files were found";

            const fileName = core.getInput("file_name");
            const files = Object.values(data.files);
            let file;
        
            if (!fileName) file = files[0];
            else if (files.some(file => file.filename === fileName)) file = files.find(file => file.filename === fileName);
            else throw "No file matched the provided name";
            
            core.setOutput("file", file.content);
        } catch (err) {
            core.setFailed(err.message);
        }
    }
)();