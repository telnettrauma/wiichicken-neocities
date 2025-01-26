const faviconSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
		<path fill-rule="evenodd" fill="${accentColor}" d="m0 2v-2h6v16h2v2h-8v-2h4v-14zm20-2v12h-10v-12zm-8 2v8h6v-8zm20-2v16h-10v-16zm-8 2v12h6v-12zm-10 30v-16h-4v-2h10v2h-4v16zm18-14v14h-14v-14zm-12 2v10h10v-10zm-20 12v-12h10v2h-8v8h8v2zm12-10v8h-2v-8zm4-18v4h-2v-4zm12 0v8h-2v-8z"/>
	</svg>
`;
const faviconLink = document.createElement("link");
faviconLink.rel = "icon";
faviconLink.href = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;
document.head.appendChild(faviconLink);