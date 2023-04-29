# react-native-webview-with-web

Combination of WebView (for ios and android app) and window.open (for browsers) with the limited functionality of detecting a certain url to return back to the main application.

## Installation

```sh
yarn add react-native-webview-with-web
```

## Usage


```js
import ReactNativeWebviewWithWeb from 'react-native-webview-with-web';
// ...
	// Replace the URL with your code
	const [url, setUrl] = React.useState(
		'https://low-economic-pyramid.glitch.me/start-route'
	);
// ...
	return <ReactNativeWebviewWithWeb
		url={url}
		setUrl={setUrl}
		closeRouteIncludes={'react-native-webview-with-web-close'}
		waitMessage={waitMessage}
		base64SpinnerImage={anotherBase64SpinnerImage}
	/>;
```

**IMPORTANT**

In order to signal to your code that the flow in the WebView is finished, the following approaches are taken:

### Native (iOS and Android)

If the current navigated URL contains the string passed as the `closeRouteIncludes` prop, the WebView will be closed and the `setUrl` function will be called with the value of `''`.

### Web

The final navigated page should pass a message to he opener with the URL of the page. The opener will then understand the flow in the new window is finalized.

An example final page is:
```html
<html>
	<head>
		<script>
			function postMessage() {
				if (window.opener) {
					window.opener.postMessage(window.location.href, "*");
					window.close();
				};
			}
			window.onload = postMessage;
		</script>
	</head>
	<body>
		<p>Please Close This Window</p>
	</body>
</html>
```

In this example, as soon as the browser comes to this page, this page sends the window.opener a message with the current URL and then closes itself.

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
