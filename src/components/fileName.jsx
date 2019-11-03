import React from 'react';
import PropTypes from 'prop-types';
import FileIcon from '../components/fileIcon';

function FileName({ file }) {
	return (
		<React.Fragment>
			<FileIcon file={file} />
			<span className='file-name'>{file.name}</span>
		</React.Fragment>
	);
}
FileName.propTypes = {
	file: PropTypes.object.isRequired
};

export default FileName;