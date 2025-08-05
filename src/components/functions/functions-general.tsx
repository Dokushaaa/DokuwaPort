export const baseImgUrl = "../../../public/img";
export const ImgUrl = "/public";
export const ImgUtil = "./utils";
//const baseImgUrl = 'http://
export const urlPathPortfolioKey = "http://localhost/next-poftolio";
export const devApiUrl = `${urlPathPortfolioKey}/rest`;

// for img upload
export const devBaseImgUrl2 = "http://localhost/next-poftolio/public/img";

// vendor code [fbs]:
// fetch for uploading photo or file
export const fetchFormData = ({ url, fd = {} }: { url?: any; fd?: any }) => {
	const data = fetch(url, {
		method: "post",
		body: fd,
	})
		.then((res) => res.json())
		.catch((error) => {
			console.error(error + " api endpoint error");
		});

	return data;
};
// for search
// get the url id parameter
export const getUrlParam = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	return urlParams;
};

// for login
export const checkLocalStorage = () => {
	let glatoken = null;
	try {
		const token = localStorage.getItem("glatoken");
		glatoken = token ? JSON.parse(token) : null;
	} catch (error) {
		glatoken = null;
	}

	return glatoken;
};

export function setStorageRoute({ jwt }: { jwt: any }) {
	localStorage.setItem("glatoken", JSON.stringify({ token: jwt }));
}

// corrected const arr-func
export const getValue = (check: any) => {
	console.log("The value of the data is: ", check);
};
// Corrected function
export function getThis(checker?: any) {
	console.log("The value of the data is: ", checker);
}
