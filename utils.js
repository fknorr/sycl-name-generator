function downloadBase64File(contentBase64, fileName) {
	const linkSource = `data:image/png;base64${contentBase64}`;
	const downloadLink = document.createElement('a');
	document.body.appendChild(downloadLink);

	downloadLink.href = linkSource;
	downloadLink.target = '_self';
	downloadLink.download = fileName;
	downloadLink.click(); 
}