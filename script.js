document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const url = document.getElementById('url').value.trim();
    const type = document.getElementById('type').value;
    const resultDiv = document.getElementById('result');
    
    if (url && type) {
        // Generate the command or link based on content type
        let downloadLink = '';
        if (type === 'audio') {
            downloadLink = `https://yt-dlp.org/downloads/latest/yt-dlp.exe -f bestaudio --extract-audio --audio-format mp3 ${url}`;
        } else if (type === 'visual') {
            downloadLink = `https://yt-dlp.org/downloads/latest/yt-dlp.exe -f bestvideo+bestaudio --merge-output-format mp4 ${url}`;
        }
        
        // Display instructions
        resultDiv.innerHTML = `<p>To download ${type} content, follow these instructions:</p>
                               <p>1. Copy the command below:</p>
                               <pre><code>${downloadLink}</code></pre>
                               <p>2. Open your command line interface (CLI) on your computer.</p>
                               <p>3. Paste and run the command in the CLI.</p>`;
    } else {
        resultDiv.innerHTML = '<p>Please enter a URL and select a content type.</p>';
    }
});
