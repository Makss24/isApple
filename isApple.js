function isApple() {
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	// deprecated version : var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
	if(iOS)
		$('head').append('<link rel="stylesheet" type="text/css" href="css/apple.css" media="screen and (max-device-width: 960px)" />');
}
isApple();