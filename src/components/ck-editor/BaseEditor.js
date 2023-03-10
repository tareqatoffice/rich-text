import Editor from 'ck-base/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';

const BaseEditor = () => {
	const customConfig = {
		fontSize: {
			options: [8, 10, 12, 14, 'default', 18, 20, 24, 32, 36, 40],
			supportAllValues: true,
		},
		removePlugins: ['MediaEmbed', 'Style'],
	};

	const getEditorData = (data, event) => {
		// console.log(data, event);
	};

	return (
		<div className="App">
			<h2>Base64 CKEditor</h2>
			<CKEditor
				editor={Editor}
				config={customConfig}
				onChange={(event, editor) => getEditorData(editor.getData(), event)}
			/>
		</div>
	);
};

export default BaseEditor;
