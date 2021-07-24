import React, { FunctionComponent } from 'react';
import Spinner from 'ink-spinner';
import { Text } from 'ink';

const LoadingView: FunctionComponent = () => {
	return <Text>
		<Spinner type="earth" /> {" "} Loading...
	</Text>
}

export default LoadingView;