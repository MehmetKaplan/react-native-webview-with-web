/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text, Image } from 'react-native';

/* istanbul ignore next */
import base64SpinnerImage from './spinner.js';

let closeRouteIncludes;

const ReactNativeWebviewWithWeb = (props) => {
	const [url, setUrl] = React.useState('');
	const [waitMessage, setWaitMessage] = React.useState('');
	const [spinnerImage, setSpinnerImage] = React.useState(base64SpinnerImage);
	React.useEffect(() => {
		if (props?.url) setUrl(props.url);
		if (props?.url.length === 0) setUrl('');
		if (props?.closeRouteIncludes)
			closeRouteIncludes = props.closeRouteIncludes;
	}, [props.url]);

	React.useEffect(() => {
		let listenMessage;
		if (props?.url?.length > 10) {
			listenMessage = (event) => {
				if (event && event.data && event.data.includes && event.data.includes(closeRouteIncludes)) {
					// eslint-disable-next-line no-alert
					alert(`Received URL: ${event.data}`);
					props.setUrl('');
				}
			};
			window.open(props.url);
			window.addEventListener('message', listenMessage, false);
		}
		if (props?.url?.length === 0) {
			window.removeEventListener('message', listenMessage, false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.url]);

	React.useEffect(() => {
		if (props?.waitMessage) setWaitMessage(props.waitMessage);
		if (props?.base64SpinnerImage) setSpinnerImage(props.base64SpinnerImage);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.waitMessage, props.base64SpinnerImage]);

	if (!props?.setUrl || url.length === 0) return <></>;

	return (
		<View
			style={{
				height: '100%',
				width: '100%',
				borderWidth: 0,
				paddingTop: 10,
				paddingBottom: 10,
				textAlign: 'center',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Text>{waitMessage}</Text>
			<Image
				source={{ uri: `${spinnerImage}` }}
				style={{width:40 , height:40}}
				resizeMode="cover"
			/>
		</View>
	);
};

export default ReactNativeWebviewWithWeb;
