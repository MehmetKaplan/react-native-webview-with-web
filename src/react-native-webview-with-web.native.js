/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import WebView from 'react-native-webview';
import { View, Text } from 'react-native';

const ReactNativeWebviewWithWeb = (props) => {
	const [url, setUrl] = React.useState('');
	const [closeRouteIncludes, setCloseRouteIncludes] = React.useState('');
	React.useEffect(() => {
		if (props?.url) setUrl(props.url);
		if (props?.url.length === 0) setUrl('');
		if (props?.closeRouteIncludes)
			setCloseRouteIncludes(props.closeRouteIncludes);
	}, [props.url, props.closeRouteIncludes]);

	if (!props?.setUrl || url.length === 0) return <></>;

	// else
	return (
		<>
			<WebView
				source={{ uri: url }}
				style={props?.style ? props.style : { marginTop: 20 }}
				onNavigationStateChange={(navState) => {
					if (navState.url.includes(closeRouteIncludes)) props.setUrl('');
				}}
			/>
		</>
	);
};

export default ReactNativeWebviewWithWeb;
