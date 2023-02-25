import Editor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';

const ClassicEditor = () => {
	const customConfig = {
		ckfinder: {
			uploadUrl: 'https://tareqnmd.com/',
		},
	};

	const getEditorData = (data, event) => {
		// console.log(data, event);
	};

	return (
		<div className="App">
			<h2>Classic CKEditor</h2>
			<CKEditor
				editor={Editor}
				config={customConfig}
				onChange={(event, editor) => getEditorData(editor.getData(), event)}
			/>
		</div>
	);
};

export default ClassicEditor;
