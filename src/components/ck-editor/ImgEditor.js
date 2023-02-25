import Editor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React from 'react';

const ImgEditor = () => {
	const customConfig = {
		extraPlugins: [uploadPlugin],
	};
	function uploadAdapter(loader) {
		const url = 'http://localhost:9000/img';
		return {
			upload: () => {
				return new Promise((resolve, reject) => {
					const body = new FormData();
					loader.file.then((file) => {
						body.append('image', file);
						fetch(`${url}`, {
							method: 'post',
							body: body,
						})
							.then((res) => res.json())
							.then((res) => {
								resolve({
									default: `${url}/${res.fileName}`,
								});
							})
							.catch((err) => {
								reject(err);
							});
					});
				});
			},
		};
	}
	function uploadPlugin(editor) {
		editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
			return uploadAdapter(loader);
		};
	}

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

export default ImgEditor;
