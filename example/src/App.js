/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import ReactNativeWebviewWithWeb from 'react-native-webview-with-web';
import anotherBase64SpinnerImage from '../assets/another-spinner.js';

export default function App() {
	const [i, setI] = React.useState(0);
	const [url, setUrl] = React.useState(
		'https://low-economic-pyramid.glitch.me/start-route'
	);
	const [waitMessage, setWaitMessage] = React.useState('');
	setTimeout(() => {
		setI((v) => v + 1);
		setWaitMessage(`Elapsed time: ${i} seconds`);
	}, 1000);

	// iOS EMULATOR:
	//			Add below Text at the end.
	//			It is a hack to make the webview work otherwise it doesn't receive the click event.
	// 		Why? I don't know.
	// <Text style={{ fontSize: 1 }}>.</Text>

	return (
		<ReactNativeWebviewWithWeb
			url={url}
			setUrl={setUrl}
			closeRouteIncludes={'react-native-webview-with-web-close'}
			waitMessage={waitMessage}
			base64SpinnerImage={anotherBase64SpinnerImage}
		/>
	);
}
