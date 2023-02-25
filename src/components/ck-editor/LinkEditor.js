import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ck-link/build/ckeditor';
import React from 'react';

const LinkEditor = () => {
	const customConfig = {
		fontSize: {
			
		},
		removePlugins: ['Style'],
	};

	const getEditorData = (data, event) => {
		// console.log(data, event);
	};

	return (
		<div className="App">
			<h2>Link CKEditor</h2>
			<CKEditor
				editor={Editor}
				config={customConfig}
				onChange={(event, editor) => getEditorData(editor.getData(), event)}
			/>
		</div>
	);
};

export default LinkEditor;
